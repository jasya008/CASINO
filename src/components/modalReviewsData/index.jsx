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

export const ReviewsData = () => {
  const { modalReview, setModalReview, chooseCasino, setTrigger } =
    GetContext();
  const [addCommentText, setAddCommentText] = useState('');
  const [addCommentRating, setAddCommentRating] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerOpen, setTimerOpen] = useState(false);

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
    } catch (error) {
      console.log(error.message);
    }
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          setTimerOpen(false)
          return 0;
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
            <button className={s.button}>{t('positive')}</button>
            <button className={s.button}>{t('negative')}</button>
          </div>
          <CloseIcon className='icon' onClick={() => setModalReview(false)} />
        </div>
        <div className={s.all_reviews}>{modalReview && <ModalReview />}</div>
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
              AddCommentsData();
              setTimerOpen(true);
            }}
          >
            {t('send')}
          </button>

          <div
            className={timerOpen ? [s.Timer, s.openTimer].join(' ') : s.Timer}
          >
            <div className='body'>
              <p className={s.text}>
                You can write comment after {formatTime(timeLeft)}
              </p>
            </div>
          </div>
        </div>
        <div className={s.rating}>
          <p className={s.rating_text}>{t('add_rating')}</p>
          <input
            type='number'
            value={addCommentRating}
            onChange={(e) => setAddCommentRating(e.target.value)}
            className={s.rating_input}
          />
        </div>
      </div>
    </animated.div>
  );
};
