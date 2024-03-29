import { useState } from 'react';
import { GetContext } from '../../components/context/Context';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import iconSort from '../../assets/sort.svg';
import { ModalReview } from '../../components/modalReviews';

export const ReviewsData = () => {
  const { chooseCasino, setTrigger } = GetContext();
  const [addCommentText, setAddCommentText] = useState('');
  const [addCommentRating, setAddCommentRating] = useState('');
  const [openButtons, setOpenButtons] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [timerOpen, setTimerOpen] = useState(false);

  const { t } = useTranslation();

  const API_URL = 'http://127.0.0.1:8000/add_comment/';

  const AddCommentsData = async () => {
    try {
      await axios.post(API_URL, {
        email: localStorage.getItem('user.email'),
        casino_id: chooseCasino.id,
        comment_text: addCommentText,
        rating: addCommentRating,
      });

      setAddCommentText('');
      setAddCommentRating('');
      setTrigger((prev) => !prev);

      startTimer();
    } catch (error) {
      console.log(error.message);
    }
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          setTimerOpen(false);
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
              <button
                className={s.button}
                onClick={() => setOpenButtons(false)}
              >
                {t('positive')}
              </button>
              <button
                className={s.button}
                onClick={() => setOpenButtons(false)}
              >
                {t('negative')}
              </button>
            </div>
          </div>
        </div>

        <div className={s.all_reviews}>
          {' '}
          <ModalReview />
        </div>

        <div className={timerOpen ? [s.Timer, s.openTimer].join(' ') : s.Timer}>
          <div className='body'>
            <p className={s.text}>
              {t('timing_text')} {formatTime(timeLeft)}
            </p>
          </div>
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
              setTimerOpen(true);
            }}
          >
            {t('send')}
          </button>
        </div>
      </div>
    </>
  );
};
