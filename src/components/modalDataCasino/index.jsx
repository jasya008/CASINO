import s from './index.module.scss';
import { Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Trophy from '../../assets/Trophy.svg';
import Star from '../../assets/bigStar.svg';
import iconKing from '../../assets/kingIcon.svg';
import handIcon from '../../assets/Hand-OneFinger.svg';
import fileIcon from '../../assets/File.svg';
import CircularDeterminate from './progressCirculars';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { useSpring, animated } from 'react-spring';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';
import { GetContext } from '../context/Context';

export const ModalDataCasino = () => {
  const { modalOpen, setModalOpen, chooseCasino: item, lang } = GetContext();
  // const [CurrentLang, setCurrentLang] = useState('');

  let CurrentLang = '';
  let CurrentLangText = '';
  let CurrentLangPromoText = '';
  let CurrentLangPayments_images = '';
  let CurrentLangProviders_images = '';
  let CurrentLangInterface_languages_image = '';
  let CurrentLangCountries_access = '';

  const { t } = useTranslation();

  const animation = useSpring({
    opacity: modalOpen ? 1 : 0,
    transform: modalOpen ? 'translateY(0%)' : 'translateY(-100%)',
  });

  // Casino name
  if (item?.casino_name && item?.casino_name.length !== 0) {
    CurrentLang = item?.casino_name[lang]?.join(' ');
  } else {
    CurrentLang = 'error';
  }

  // Casino Text
  if (item?.casino_text && item?.casino_text.length !== 0) {
    CurrentLangText = item?.casino_text[lang]?.join(' ');
  } else {
    CurrentLangText = 'error';
  }

  // Casino Promo Text
  if (item?.promo_text && item.promo_text[lang]?.length !== 0) {
    CurrentLangPromoText = item.promo_text[lang].join(' ');
  } else {
    CurrentLangPromoText = 'error';
  }
  // Casino payment images
  if (item?.payments_images && item?.payments_images.length !== 0) {
    CurrentLangPayments_images = item?.payments_images[lang]?.join(' ');
  } else {
    CurrentLangPayments_images = 'error';
  }
  //casino provide images
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
    <Container fixed>
      <animated.div style={animation} className='popup'>
        <div className={modalOpen ? [s.modal, s.modalShow].join(' ') : s.modal}>
          <div className={s.left_side}>
            <div className={s.circulars}>
              <img className={s.img} src={item.image_link} alt='' />
              {/* <p>{CurrentLang}</p> */}
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
                <CircularDeterminate
                  variant='determinate'
                  value={item.payout}
                />
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

            <div className={s.texts}>
              <img className={s.icon} src={Trophy} alt='' />
              <p className={s.text_img}>
                {item.ranking_position}
                {t('rank')}
              </p>
            </div>
            <p className={s.text}>{CurrentLangText}</p>
            <Link to={item.casino_link}>
              <button className={s.button}>{t('play_button')}</button>
            </Link>
          </div>

          <div className={s.right_side}>
            <CloseIcon className={s.icon} onClick={() => setModalOpen(false)} />
            <div className={s.all_text}>
              <h2 className={s.grade}>
                {' '}
                <img className={s.star} src={Star} alt='' />{' '}
                {item.editor_rating}
              </h2>
              <div className={s.textGrade}>{t('editGrade')}</div>
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
                {/* <PicturesPay /> */}
                <p className={s.text_pay}>{CurrentLangProviders_images}</p>
              </div>

              <hr />

              <div className={s.all_things}>
                <p className={s.text_pay}> {t('Interface')}</p>
                <p className={s.text_pay}>
                  {CurrentLangInterface_languages_image}
                </p>
              </div>

              <p className={s.text_production}>
                {' '}
                {t('Available')} {CurrentLangCountries_access}
              </p>
            </div>
          </div>
        </div>
      </animated.div>
    </Container>
  );
};
