import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';
import axios from 'axios';

export const ModalReview = () => {
  const { chooseCasino } = GetContext();
  const [dataComment, setDataComment] = useState([]);
  const API_Comments = `http://127.0.0.1:8000/casinos/14/comments/`;

  const getCommentsData = async () => {
    try {
      const { comment } = await axios.get(API_Comments);
      setDataComment(comment);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCommentsData();
  }, []);

  return (
    <>
      {dataComment.map((comment) => (
        <p>{comment.comment_text}</p>
      ))}
    </>
  );
};
