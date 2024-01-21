import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import star from '../../assets/star.svg';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';
import axios from 'axios';

export const ModalReview = () => {
  const { chooseCasino } = GetContext();
  const [dataComment, setDataComment] = useState([]);
  const { t } = useTranslation();
  const API_Comments = `http://127.0.0.1:8000/casinos/${chooseCasino.id}/comments/`;

  const getCommentsData = async () => {
    try {
      const { comment } = await axios(API_Comments);
      setDataComment(comment);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(dataComment);

  useEffect(()=>{
    getCommentsData()
  },[])

  return <></>;
};
