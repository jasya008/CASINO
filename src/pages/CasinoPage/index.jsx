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

export const CasinoesPage = () => {
  const [casino, setCasino] = useState([]);
  const { lang } = GetContext();
  const [error, setError] = useState('');
  const [casinoObj, setCasinoObj] = useState({});
  const { t } = useTranslation();

  let CurrentLangText = '';
  let CurrentLangPromoText = '';
  let CurrentLangPayments_images = '';
  let CurrentLangProviders_images = '';
  let CurrentLangInterface_languages_image = '';
  let CurrentLangCountries_access = '';

  const { id } = useParams();

  const API_URL = 'http://127.0.0.1:8000/all-casino-profiles/';

  const getDataCasino = async () => {
    try {
      const { data } = await axios(API_URL);
      setCasino(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getDataCasino();

    for (const index of casino) {
      if (index.id == id) {
        setCasinoObj(index);
        break;
      }
    }
  }, [casino.length, id, casino.id]);

  if (casinoObj?.casino_name && casinoObj?.casino_text.length !== 0) {
    CurrentLangText = casinoObj?.casino_text[lang]?.join(' ');
  } else {
    CurrentLangText = 'error';
  }

  if (casinoObj?.promo_text && casinoObj?.promo_text.length !== 0) {
    CurrentLangPromoText = casinoObj?.promo_text[lang]?.join(' ');
  } else {
    CurrentLangPromoText = 'error';
  }

  if (casinoObj?.casino_text && casinoObj?.casino_text.length !== 0) {
    CurrentLangText = casinoObj?.casino_text[lang]?.join(' ');
  } else {
    CurrentLangText = 'error';
  }

  // Casino payment images
  if (casinoObj?.payments_images && casinoObj?.payments_images.length !== 0) {
    CurrentLangPayments_images = casinoObj?.payments_images[lang]?.join(' ');
  } else {
    CurrentLangPayments_images = 'error';

    //casino provide images
  }
  if (casinoObj?.providers_images && casinoObj?.providers_images.length !== 0) {
    CurrentLangProviders_images = casinoObj?.providers_images[lang]?.join(' ');
  } else {
    CurrentLangProviders_images = 'error';

    // casino Interface images
  }
  if (
    casinoObj?.interface_languages_image &&
    casinoObj?.interface_languages_image.length !== 0
  ) {
    CurrentLangInterface_languages_image =
      casinoObj?.interface_languages_image[lang]?.join(' ');
  } else {
    CurrentLangInterface_languages_image = 'error';

    // casino countriess
  }
  if (casinoObj?.countries_access && casinoObj?.countries_access.length !== 0) {
    CurrentLangCountries_access = casinoObj?.countries_access[lang]?.join(' ');
  } else {
    CurrentLangCountries_access = 'error';
  }

  return (
    <>
      <Container>
        <div className={s.pageCasino}>
          <div className={s.top_content}>
            <div className={s.image_text}>
              <img
                src={casinoObj.image_link}
                alt=''
                className={s.image_casino}
              />
              <div className={s.texts}>
                <img className={s.icon} src={Trophy} alt='' />
                <p className={s.text_img}>
                  {casinoObj.ranking_position}
                  {t('rank')}
                </p>
              </div>
            </div>

            <div className={s.all_text}>
              <h2 className={s.grade}>
                {' '}
                <img className={s.star} src={Star} alt='' />{' '}
                {casinoObj.editor_rating}
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
                value={casinoObj.reliability}
              />
              <p className={s.textCircular}>{t('Reliability')}</p>
            </div>

            <div className={s.textsCircular}>
              <CircularDeterminate
                variant='determinate'
                value={casinoObj.speed}
              />
              <p className={s.textCircular}>{t('Speed')}</p>
            </div>

            <div className={s.textsCircular}>
              <CircularDeterminate
                variant='determinate'
                value={casinoObj.payout}
              />
              <p className={s.textCircular}>{t('Funds')}</p>
            </div>

            <div className={s.textsCircular}>
              <CircularDeterminate
                variant='determinate'
                value={casinoObj.player_rating}
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
            {Array.isArray(casinoObj.promo_code) &&
              casinoObj.promo_code.map((code, index) => (
                <SwiperSlide key={index}>
                  <div className={s.advertising}>
                    <img className={s.iconKing} src={iconKing} alt='' />
                    <p className={s.text}>
                      {casinoObj.promo_text &&
                      casinoObj.promo_text[lang] &&
                      casinoObj.promo_text[lang][index]
                        ? casinoObj.promo_text[lang][index].map((text) => (
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
          <Link to={casinoObj.casino_link}>
            <button className={s.button}>{t('play_button')}</button>
          </Link>
        </div>
      </Container>
    </>
  );
};
