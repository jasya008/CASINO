import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';
import star from '../../assets/star.svg'
import axios from 'axios';

export const ModalReview = () => {
  const { chooseCasino, trigger } = GetContext();
  const [dataComment, setDataComment] = useState([]);
  const API_Comments = `http://127.0.0.1:8000/casinos/${chooseCasino.id}/comments/`;

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
      {dataComment.map((comment) => (
        <div className={s.comment}>
          <div className={s.all_coment}>
          <p className={s.text_date}>{comment.created_at}</p>
          <p className={s.text_comment}>{comment.comment_text}</p>
          </div>

          <p className={s.rating_default_text}>
            {t("user_rating")}
            <img src={star} alt="" />
            {comment.rating}
          </p>
        </div>
      ))}
    </>
  );
};
