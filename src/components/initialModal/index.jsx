import React from 'react';
import s from './index.module.scss';
import { GetContext } from '../context/Context';
import { useTranslation } from 'react-i18next';

export const InitialModal = () => {
  const { initialModal, setInitialModal, user } = GetContext();
  const { t } = useTranslation();

  const shouldRenderModal = !user; // Render the modal if the user is not registered

  return (
    <>
      {shouldRenderModal && (
        <div
          className={
            initialModal ? [s.initialModal, s.modalclose].join(' ') : s.initialModal
          }
        >
          <div className='body'>
            <div className={s.modal}>
              <p className={s.text}>{t('firstModaltext')}</p>
              <div className={s.buttons}>
                <button onClick={() => setInitialModal(true)} className={s.button}>
                  {t('yes')}
                </button>
                <button className={s.button}><a className={s.butt} href="https://www.google.com/">{t('no')}</a></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
