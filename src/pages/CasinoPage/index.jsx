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
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { GetContext } from '../../components/context/Context.jsx';
import { PicturesPay } from '../../components/modalDataCasino/picturesPay/index.jsx';

export const CasinoesPage = () => {
  const [casino, setCasino] = useState([]);
  const { lang } = GetContext();
  const [error, setError] = useState('');
  const [casinoObj, setCasinoObj] = useState({});
  const { t } = useTranslation();

  let CurrentLangText = '';
  let CurrentLangPromoText = '';

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
                {t('Available')} {casinoObj.countries_access}
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
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className={s.advertising}>
                <img className={s.iconKing} src={iconKing} alt='' />
                <p className={s.text}>{CurrentLangPromoText}</p>
                <div className={s.all}>
                  <p className={s.small_text}>{t('discount_text')}</p>
                  <img src={handIcon} alt='' />

                  <CopyToClipboard text={casinoObj.promo_code}>
                    <button className={s.button_uare}>
                      {' '}
                      {casinoObj.promo_code} <img src={fileIcon} alt='' />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={s.advertising}>
                <img className={s.iconKing} src={iconKing} alt='' />
                <p className={s.text}>{CurrentLangPromoText}</p>
                <div className={s.all}>
                  <p className={s.small_text}>{t('discount_text')}</p>
                  <img src={handIcon} alt='' />
                  <button className={s.button_uare}>
                    {' '}
                    {casinoObj.promo_code} <img src={fileIcon} alt='' />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className={s.all_pays}>
            <div className={s.all_things}>
              <p className={s.text_pay}> {t('Payments')}</p>
              <PicturesPay />
            </div>

            <hr />

            <div className={s.all_things}>
              <p className={s.text_pay}> {t('Providers')}</p>
              <PicturesPay />
            </div>

            <hr />

            <div className={s.all_things}>
              <p className={s.text_pay}> {t('Interface')}</p>
              <PicturesPay />
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
