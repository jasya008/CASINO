import React from 'react';
import s from './index.module.scss';
import star from '../../assets/star.svg';
import person from '../../assets/person.svg';
import warning from '../../assets/!.svg';
import { GetContext } from '../context/Context';
import { ReviewsData } from '../modalReviewsData';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

export const InfoCasino = ({ data }) => {
  const {
    setModalOpen,
    setModalReview,
    setChooseCasino,
    setChooseReview,
  } = GetContext();
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <>
      <div className={s.card}>
        <p className={s.grade}>
          <img src={star} alt='' />
          {data.editor_rating}
        </p>
        <img className={s.img} src={data.image_link} />
        <div className={s.all_texts}>
          <p
            onClick={() => {
              setModalOpen(true);
              setChooseCasino(data);
            }}
            className={s.text}
          >
            {' '}
            <img src={warning} alt='' />
            {t('information')}
          </p>{' '}
          <Link className={s.text_mobile} to={`/casino/${data.id}`}>
            {' '}
            <img src={warning} alt='' />
            {t('information')}
          </Link>
          <p
            onClick={() => {
              setModalReview(true);
              setChooseCasino(data);
            }}
            className={s.textreview}
          >
            {' '}
            <img src={person} alt='' />
            {t('Reviews')}{' '}
          </p>
          <Link
            className={s.text_reviewMobi}
            onClick={() => {
              setChooseReview(data);
              setChooseCasino(data);
            }}
            to={`/review/${data.id}`}
          >
            {' '}
            <img src={person} alt='' />
            {t('Reviews')}
          </Link>
        </div>
      </div>
      <ReviewsData />
    </>
  );
};
