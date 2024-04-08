import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { GetContext } from '../context/Context';

export const FilterComments = ({ dataComment, setOpenButtons }) => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState(null);
  const { filterComments, setFilterComments } = GetContext();

  useEffect(() => {
    setFilterComments(dataComment);
  }, [dataComment]);

  const positiveComments = filterComments.filter(
    (comment) => comment.rating >= 70
  );
  const negativeComments = filterComments.filter(
    (comment) => comment.rating < 70
  );

  const handleButtonClick = (type) => {
    setActiveButton(type);
    if (type === 'positive') {
      console.log('Positive comments:', positiveComments);
    } else if (type === 'negative') {
      console.log('Negative comments:', negativeComments);
    }
  };

  return (
    <>
      <button
        className={`${s.button} ${activeButton === 'positive' ? s.active : ''}`}
        onClick={() => {
          handleButtonClick('positive'), setOpenButtons(false);
        }}
      >
        {t('positive')}
      </button>
      <button
        className={`${s.button} ${activeButton === 'negative' ? s.active : ''}`}
        onClick={() => {
          handleButtonClick('negative'), setOpenButtons(false);
        }}
      >
        {t('negative')}
      </button>
    </>
  );
};

{
  /* <div className={openButtons ? [s.Buttons, s.buttonsOpen].join(' ') : s.Buttons}>
  <div className='body'>
    <div className={s.searchButtons}>
      <button className={s.button} onClick={() => setOpenButtons(false)}>
        {t('positive')}
      </button>
      <button className={s.button} onClick={() => setOpenButtons(false)}>
        {t('negative')}
      </button>
    </div>
  </div>
</div>; */
}
