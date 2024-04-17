import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './index.module.scss';
import Trophy from '../../assets/Trophy.svg';
import Star from '../../assets/bigStar.svg';
import iconKing from '../../assets/kingIcon.svg';
import handIcon from '../../assets/Hand-OneFinger.svg';
import fileIcon from '../../assets/File.svg';
import { useTranslation } from 'react-i18next';
import CircularDeterminate from '../../components/modalDataCasino/progressCirculars/index.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import 'swiper/css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Autoplay, Pagination } from 'swiper/modules';
import { GetContext } from '../../components/context/Context.jsx';

export const Casino1Game = () => {
  const { lang, casino1 } = GetContext();

  const { t } = useTranslation();

  let CurrentLangText = '';
  let CurrentLangPromoText = [];
  let CurrentLangPayments_images = '';
  let CurrentLangProviders_images = '';
  let CurrentLangInterface_languages_image = '';
  let CurrentLangCountries_access = '';

  if (casino1?.casino_name && casino1?.casino_text.length !== 0) {
    CurrentLangText = casino1?.casino_text[lang]?.join(' ');
  } else {
    CurrentLangText = 'error';
  }

  if (casino1?.promo_text && casino1?.promo_text.length !== 0) {
    CurrentLangPromoText = casino1?.promo_text[lang]?.join(' ');
  } else {
    CurrentLangPromoText = 'error';
  }

  if (casino1?.casino_text && casino1?.casino_text.length !== 0) {
    CurrentLangText = casino1?.casino_text[lang]?.join(' ');
  } else {
    CurrentLangText = 'error';
  }

  // Casino payment images
  if (casino1?.payments_images && casino1?.payments_images.length !== 0) {
    CurrentLangPayments_images = casino1?.payments_images[lang]?.join(' ');
  } else {
    CurrentLangPayments_images = 'error';

    //casino provide images
  }
  if (casino1?.providers_images && casino1?.providers_images.length !== 0) {
    CurrentLangProviders_images = casino1?.providers_images[lang]?.join(' ');
  } else {
    CurrentLangProviders_images = 'error';

    // casino Interface images
  }
  if (
    casino1?.interface_languages_image &&
    casino1?.interface_languages_image.length !== 0
  ) {
    CurrentLangInterface_languages_image =
      casino1?.interface_languages_image[lang]?.join(' ');
  } else {
    CurrentLangInterface_languages_image = 'error';

    // casino countriess
  }
  if (casino1?.countries_access && casino1?.countries_access.length !== 0) {
    CurrentLangCountries_access = casino1?.countries_access[lang]?.join(' ');
  } else {
    CurrentLangCountries_access = 'error';
  }

  const promoSlides =
    Array.isArray(casino1?.promo_code) && Array.isArray(CurrentLangPromoText[0])
      ? casino1?.promo_code.map((code, index) => (
          <SwiperSlide key={index}>
            <div className={s.advertising}>
              <img className={s.iconKing} src={iconKing} alt='' />
              <p className={s.text}>
                <span>{CurrentLangPromoText[0][index]}</span>
              </p>
              <div className={s.all}>
                <p className={s.small_text}>{t('discount_text')}</p>
                <img src={handIcon} alt='' />
                <CopyToClipboard text={code}>
                  <button className={s.button_uare}>
                    {code} <img src={fileIcon} alt='' />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </SwiperSlide>
        ))
      : null;

  return (
    <>
      <Container>
        <div className={s.pageCasino}>
          <div className={s.top_content}>
            <div className={s.image_text}>
              {casino1 && (
                <img
                className={s.image_casino}
                  src={casino1.image_link}
                  alt='lkjdfjdskj'
                />
              )}
              <div className={s.texts}>
                <img className={s.icon} src={Trophy} alt='' />
                {casino1 && (
                  <p className={s.text_img}>
                    {casino1.ranking_position}
                    {t('rank')}
                  </p>
                )}
              </div>
            </div>

            <div className={s.all_text}>
              {casino1 && (
                <h2 className={s.grade}>
                  {' '}
                  <img className={s.star} src={Star} alt='' />{' '}
                  {casino1.editor_rating}
                </h2>
              )}
              <div className={s.textGrade}>{t('editGrade')}</div>

              <p className={s.text_production}>
                {' '}
                {t('Available')} {CurrentLangCountries_access}
              </p>
            </div>
          </div>

          <div className={s.allCirculas}>
            <div className={s.textsCircular}>
              {casino1 && (
                <CircularDeterminate
                  variant='determinate'
                  value={casino1.reliability}
                />
              )}
              <p className={s.textCircular}>{t('Reliability')}</p>
            </div>

            <div className={s.textsCircular}>
              {casino1 && (
                <CircularDeterminate
                  variant='determinate'
                  value={casino1.speed}
                />
              )}
              <p className={s.textCircular}>{t('Speed')}</p>
            </div>

            <div className={s.textsCircular}>
              {casino1 && (
                <CircularDeterminate
                  variant='determinate'
                  value={casino1.payout}
                />
              )}
              <p className={s.textCircular}>{t('Funds')}</p>
            </div>

            <div className={s.textsCircular}>
              {casino1 && (
                <CircularDeterminate
                  variant='determinate'
                  value={casino1.player_rating}
                />
              )}
              <p className={s.textCircular}>{t('grade')}</p>
            </div>
          </div>

          <Swiper
            style={{
              '--swiper-pagination-color': '#ffcf3a',
            }}
            width={250}
            height={130}
            className={s.swiper}
            direction={'horizontal'}
            spaceBetween={1}
            slidesPerView={1}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Autoplay, Pagination]}
          >
            {promoSlides}
          </Swiper>

          <div className={s.all_pays}>
            <div className={s.all_things}>
              <p className={s.text_pay}> {t('Payments')}</p>
              <p className={s.text_pay}>{CurrentLangPayments_images}</p>
            </div>

            <hr />

            <div className={s.all_things}>
              <p className={s.text_pay}> {t('Providers')}</p>
              <p className={s.text_pay}>{CurrentLangProviders_images}</p>
            </div>

            <hr />

            <div className={s.all_things}>
              <p className={s.text_pay}> {t('Interface')}</p>
              <p className={s.text_pay}>
                {CurrentLangInterface_languages_image}
              </p>
            </div>
          </div>

          <p className={s.text}>{CurrentLangText}</p>
          {casino1 && (
            <Link to={casino1.casino_link}>
              <button className={s.button}>{t('play_button')}</button>
            </Link>
          )}
        </div>
      </Container>
    </>
  );
};
