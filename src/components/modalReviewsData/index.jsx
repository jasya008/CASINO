import React, { useEffect, useRef, useState } from 'react';
import { ModalReview } from '../modalReviews';
import axios from 'axios';
import { GetContext } from '../context/Context';
import s from './index.module.scss';
import iconSort from '../../assets/sort.svg';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from 'react-spring';
import { toast } from 'react-toastify';
import { FilterComments } from '../FilterComments';

export const ReviewsData = () => {
  const { modalReview, setModalReview, chooseCasino, setTrigger } =
    GetContext();
  const [addCommentText, setAddCommentText] = useState('');
  const [addCommentRating, setAddCommentRating] = useState('');
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [dataComment, setDataComment] = useState([]);
  const [openButtons, setOpenButtons] = useState(false);


  const { t } = useTranslation();

  const API_URL = 'http://127.0.0.1:8000/add_comment/';

  const animation = useSpring({
    opacity: modalReview ? 1 : 0,
    transform: modalReview ? 'translateY(0%)' : 'translateY(-100%)',
  });

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
      setIsTimerRunning(true);

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
    <animated.div style={animation} className='popup'>
      <div
        className={
          modalReview ? [s.ModalReview, s.modalShow].join(' ') : s.ModalReview
        }
      >
        <div className={s.buttons}>
          <div className={s.sort_buttons}>
            <p className={s.sort}>
              <img className={s.img_sort} src={iconSort} alt='' />
              {t('sort')}:
            </p>
            <FilterComments
              dataComment={dataComment}
              setOpenButtons={setOpenButtons}
            />
          </div>
          <CloseIcon className='icon' onClick={() => setModalReview(false)} />
        </div>
        <div className={s.all_reviews}>
          {modalReview && (
            <ModalReview
              dataComment={dataComment}
              setDataComment={setDataComment}
            />
          )}
        </div>
        <div className={s.input_button}>
          <input
            type='text'
            className={s.addInput}
            placeholder={t('review_add')}
            value={addCommentText}
            onChange={(e) => setAddCommentText(e.target.value)}
          />
          <button
            className={s.add_button}
            onClick={() => {
              if (!isTimerRunning) {
                AddCommentsData();
              }
            }}
            disabled={isTimerRunning}
          >
            {t('send')}
          </button>
        </div>
        <div className={s.rating}>
          <p className={s.rating_text}>{t('add_rating')}</p>
          <input
            placeholder='1-100'
            value={addCommentRating}
            onChange={(e) => setAddCommentRating(e.target.value)}
            className={s.rating_input}
          />
        </div>
      </div>
    </animated.div>
  );
};
