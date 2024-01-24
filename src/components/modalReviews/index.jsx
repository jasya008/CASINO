import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';
import axios from 'axios';

export const ModalReview = () => {
  const { chooseCasino, trigger } = GetContext();
  const [dataComment, setDataComment] = useState([]);
  const API_Comments = `http://127.0.0.1:8000/casinos/${chooseCasino.id}/comments/`;

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
        <div>
        </div>
      ))}
    </>
  );
};
