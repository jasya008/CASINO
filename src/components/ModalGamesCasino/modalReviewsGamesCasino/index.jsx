import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import star from '../../../assets/star.svg';
import axios from 'axios';
import { GetContext } from '../../context/Context';

export const ModalReviewCasinoGames = ({ setDataComment, dataComment }) => {
  const {
    chooseCasinoGames,
    trigger,
    filteredNegativeComments,
    filteredPositiveComments,
    qwert,
  } = GetContext();
  const API_Comments = `http://127.0.0.1:8000/casinos/${chooseCasinoGames.id}/comments/`;
  const { t } = useTranslation();

  const getCommentsData = async () => {
    try {
      const { data } = await axios(API_Comments);
      setDataComment(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCommentsData();
  }, [trigger]);

  return (
    <>
      {qwert
        ? filteredPositiveComments.map((comment) => (
            <div className={s.comment_user} key={comment.id}>
              <div className={s.user}>
                <img
                  className={s.avatar}
                  src={
                    `/static/images/iconUser` +
                    comment.user?.number_of_avatar +
                    '.svg'
                  }
                  alt='error'
                />
                <p className={s.user_email}>{comment.user.email}</p>
              </div>
              <div className={s.comment}>
                <div className={s.all_coment}>
                  <p className={s.text_date}>{comment.created_at}</p>
                  <p className={s.text_comment}>{comment.comment_text}</p>
                </div>

                <p className={s.rating_default_text}>
                  {t('user_rating')}
                  <img src={star} alt='' />
                  {comment.rating}
                </p>
              </div>
            </div>
          ))
        : filteredNegativeComments.map((comment) => (
            <div className={s.comment_user} key={comment.id}>
              <div className={s.user}>
                <img
                  className={s.avatar}
                  src={
                    `/static/images/iconUser` +
                    comment.user?.number_of_avatar +
                    '.svg'
                  }
                  alt='error'
                />
                <p className={s.user_email}>{comment.user.email}</p>
              </div>
              <div className={s.comment}>
                <div className={s.all_coment}>
                  <p className={s.text_date}>{comment.created_at}</p>
                  <p className={s.text_comment}>{comment.comment_text}</p>
                </div>

                <p className={s.rating_default_text}>
                  {t('user_rating')}
                  <img src={star} alt='' />
                  {comment.rating}
                </p>
              </div>
            </div>
          ))}
    </>
  );
};
