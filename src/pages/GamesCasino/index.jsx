import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './index.module.scss';
import Trophy from '../../assets/Trophy.svg';
import Star from '../../assets/bigStar.svg';
import iconKing from '../../assets/kingIcon.svg';
import handIcon from '../../assets/Hand-OneFinger.svg';
import fileIcon from '../../assets/File.svg';
import { useTranslation } from 'react-i18next';
import CircularDeterminate from '../../components/modalDataCasino/progressCirculars';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import 'swiper/css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Autoplay, Pagination } from 'swiper/modules';
import { GetContext } from '../../components/context/Context.jsx';

export const GamesCasino = () => {
  const { lang, chooseCasinoGames: item } = GetContext();
  const { t } = useTranslation();

  let CurrentLangText = '';
  let CurrentLangPromoText = '';
  let CurrentLangPayments_images = '';
  let CurrentLangProviders_images = '';
  let CurrentLangInterface_languages_image = '';
  let CurrentLangCountries_access = '';

  if (item?.casino_name && item?.casino_text.length !== 0) {
    CurrentLangText = item?.casino_text[lang]?.join(' ');
  } else {
    CurrentLangText = 'error';
  }

  if (item?.promo_text && item?.promo_text.length !== 0) {
    CurrentLangPromoText = item?.promo_text[lang]?.join(' ');
  } else {
    CurrentLangPromoText = 'error';
  }

  if (item?.casino_text && item?.casino_text.length !== 0) {
    CurrentLangText = item?.casino_text[lang]?.join(' ');
  } else {
    CurrentLangText = 'error';
  }

  // Casino payment images
  if (item?.payments_images && item?.payments_images.length !== 0) {
    CurrentLangPayments_images = item?.payments_images[lang]?.join(' ');
  } else {
    CurrentLangPayments_images = 'error';

    //casino provide images
  }
  if (item?.providers_images && item?.providers_images.length !== 0) {
    CurrentLangProviders_images = item?.providers_images[lang]?.join(' ');
  } else {
    CurrentLangProviders_images = 'error';

    // casino Interface images
  }
  if (
    item?.interface_languages_image &&
    item?.interface_languages_image.length !== 0
  ) {
    CurrentLangInterface_languages_image =
      item?.interface_languages_image[lang]?.join(' ');
  } else {
    CurrentLangInterface_languages_image = 'error';

    // casino countriess
  }
  if (item?.countries_access && item?.countries_access.length !== 0) {
    CurrentLangCountries_access = item?.countries_access[lang]?.join(' ');
  } else {
    CurrentLangCountries_access = 'error';
  }

  return (
    <>
      <Container>
        <div className={s.pageCasino}>
          <div className={s.top_content}>
            <div className={s.image_text}>
              <img src={item.image_link} alt='' className={s.image_casino} />
              <div className={s.texts}>
                <img className={s.icon} src={Trophy} alt='' />
                <p className={s.text_img}>
                  {item.ranking_position}
                  {t('rank')}
                </p>
              </div>
            </div>

            <div className={s.all_text}>
              <h2 className={s.grade}>
                {' '}
                <img className={s.star} src={Star} alt='' />{' '}
                {item.editor_rating}
              </h2>
              <div className={s.textGrade}>{t('editGrade')}</div>

              <p className={s.text_production}>
                {' '}
                {t('Available')} {CurrentLangCountries_access}
              </p>
            </div>
          </div>

          <div className={s.allCirculas}>
            <div className={s.textsCircular}>
              <CircularDeterminate
                variant='determinate'
                value={item.reliability}
              />
              <p className={s.textCircular}>{t('Reliability')}</p>
            </div>

            <div className={s.textsCircular}>
              <CircularDeterminate variant='determinate' value={item.speed} />
              <p className={s.textCircular}>{t('Speed')}</p>
            </div>

            <div className={s.textsCircular}>
              <CircularDeterminate variant='determinate' value={item.payout} />
              <p className={s.textCircular}>{t('Funds')}</p>
            </div>

            <div className={s.textsCircular}>
              <CircularDeterminate
                variant='determinate'
                value={item.player_rating}
              />
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
            {Array.isArray(item.promo_code) &&
              item.promo_code.map((code, index) => (
                <SwiperSlide key={index}>
                  <div className={s.advertising}>
                    <img className={s.iconKing} src={iconKing} alt='' />
                    <p className={s.text}>
                      {item.promo_text &&
                      item.promo_text[lang] &&
                      item.promo_text[lang][index]
                        ? item.promo_text[lang][index].map((text) => (
                            <span key={text}>{text} </span>
                          ))
                        : 'Error: Promo text not available'}
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
              ))}
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
          <Link to={item.casino_link}>
            <button className={s.button}>{t('play_button')}</button>
          </Link>
        </div>
      </Container>
    </>
  );
};
