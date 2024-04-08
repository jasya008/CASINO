import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const FilterComments = ({ dataComment, setOpenButtons }) => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState('positive');
  const {
    filteredPositiveComments,
    setFilteredPositiveComments,
    filteredNegativeComments,
    setFilteredNegativeComments,
    setQwert,
  } = GetContext();

  useEffect(() => {
    const positiveComments = dataComment.filter(
      (comment) => comment.rating >= 70
    );
    const negativeComments = dataComment.filter(
      (comment) => comment.rating < 70
    );
    setFilteredPositiveComments(positiveComments);
    setFilteredNegativeComments(negativeComments);
  }, [dataComment]);

  const handleButtonClick = (type) => {
    setActiveButton(type);
    if (type === 'positive') {
      setQwert(true);
      console.log('Positive comments:', filteredPositiveComments);
    } else if (type === 'negative') {
      setQwert(false);
      console.log('Negative comments:', filteredNegativeComments);
    }
    setOpenButtons(false);
  };

  return (
    <>
      <button
        className={`${s.button} ${activeButton === 'positive' ? s.active : ''}`}
        onClick={() => handleButtonClick('positive')}
      >
        {t('positive')}
      </button>
      <button
        className={`${s.button} ${activeButton === 'negative' ? s.active : ''}`}
        onClick={() => handleButtonClick('negative')}
      >
        {t('negative')}
      </button>
    </>
  );
};
