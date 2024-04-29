import { useState } from 'react';
import { GetContext } from '../../components/context/Context';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import iconSort from '../../assets/sort.svg';
import { ModalReview } from '../../components/modalReviews';
import { toast } from 'react-toastify';
import { FilterComments } from '../../components/FilterComments';

export const ReviewsData = () => {
  const { chooseCasino, setTrigger } = GetContext();
  const [addCommentText, setAddCommentText] = useState('');
  const [addCommentRating, setAddCommentRating] = useState('');
  const [openButtons, setOpenButtons] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [dataComment, setDataComment] = useState([]);

  const { t } = useTranslation();

  const API_URL = 'http://127.0.0.1:8000/add_comment/';

  const AddCommentsData = async () => {
    const userEmail = localStorage.getItem('user.email');
    if (!userEmail) {
      // Display error toast if user is not logged in
      toast.error(t('email_login_review_error'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    if (!addCommentText || !addCommentRating) {
      // Display error toast if any field is empty
      toast.error(t('fill_all_fields_error'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    const rating = parseInt(addCommentRating, 10);
    if (isNaN(rating) || rating < 0 || rating > 100) {
      // Display error toast for invalid rating
      toast.error(t('rating_range_error'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    if (isTimerRunning) {
      // Display error toast if it hasn't been two minutes yet
      toast.error(` ${t('timing_text')} ${formatTime(timeLeft)} `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    try {
      await axios.post(API_URL, {
        email: userEmail,
        casino_id: chooseCasino.id,
        comment_text: addCommentText,
        rating: rating,
      });

      setAddCommentText('');
      setAddCommentRating('');
      setTrigger((prev) => !prev);

      startTimer();
      setIsTimerRunning(true);

      toast.success(t('comment_success'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          setIsTimerRunning(false);
          return 120;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <>
      <div className={s.reviews}>
        <h3 className={s.title}>{t('review')}</h3>

        <p className={s.sortText} onClick={() => setOpenButtons(true)}>
          <img className={s.img_sort} src={iconSort} alt='' />
          {t('sort')}:
        </p>

        <div
          className={
            openButtons ? [s.Buttons, s.buttonsOpen].join(' ') : s.Buttons
          }
        >
          <div className='body'>
            <div className={s.searchButtons}>
              <FilterComments
                dataComment={dataComment}
                setOpenButtons={setOpenButtons}
              />
            </div>
          </div>
        </div>

        <div className={s.all_reviews}>
          <ModalReview
            dataComment={dataComment}
            setDataComment={setDataComment}
          />
        </div>

        <input
          type='text'
          className={s.addInput}
          placeholder={t('review_add')}
          value={addCommentText}
          onChange={(e) => setAddCommentText(e.target.value)}
        />

        <div className={s.input_button}>
          <div className={s.rating}>
            <p className={s.rating_text}>{t('add_rating')}</p>
            <input
              type='number'
              value={addCommentRating}
              onChange={(e) => setAddCommentRating(e.target.value)}
              className={s.rating_input}
            />
          </div>

          <button
            className={s.add_button}
            onClick={() => {
              AddCommentsData();
            }}
          >
            {t('send')}
          </button>
        </div>
      </div>
    </>
  );
};
