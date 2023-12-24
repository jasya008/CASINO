import s from './index.module.scss';
import { Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Trophy from '../../assets/Trophy.svg';
import Star from '../../assets/bigStar.svg';
import iconKing from '../../assets/kingIcon.svg';
import handIcon from '../../assets/Hand-OneFinger.svg';
import fileIcon from '../../assets/File.svg';
import { PicturesPay } from './picturesPay';
import CircularDeterminate from './progressCirculars';
import { GetContext } from '../context/Context';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { useSpring, animated } from 'react-spring';

export const ModalDataCasino = () => {
  const { modalOpen, setModalOpen, chooseCasino: item } = GetContext();
  const { t } = useTranslation();

  const animation = useSpring({
    opacity: modalOpen ? 1 : 0,
    transform: modalOpen ? 'translateY(0%)' : 'translateY(-100%)'
  });

  return (
    <Container fixed>
      <animated.div style={animation} className='popup'>
        <div className={modalOpen ? [s.modal, s.modalShow].join(' ') : s.modal}>
          <div className={s.left_side}>
            <div className={s.circulars}>
              <img className={s.img} src={item.image_link} alt='' />
              {/* <p
              style={{
                color: 'white',
              }}
            >
              {item.casino_name}
            </p> */}
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
            <p className={s.text}>{item?.casino_text}</p>
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
              width={250}
              height={130}
              className={s.swiper}
              direction={'horizontal'}
              spaceBetween={1}
              slidesPerView={1}
              grabCursor={true}
              centeredSlides={true}
              autoplay={{
                delay: 1700,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide>
                <div className={s.advertising}>
                  <img className={s.iconKing} src={iconKing} alt='' />
                  <p className={s.text}>{item.promo_text}</p>
                  <div className={s.all}>
                    <p className={s.small_text}>{t('discount_text')}</p>
                    <img src={handIcon} alt='' />

                    <CopyToClipboard text={item.promo_code}>
                      <button className={s.button_uare}>
                        {' '}
                        {item.promo_code} <img src={fileIcon} alt='' />
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.advertising}>
                  <img className={s.iconKing} src={iconKing} alt='' />
                  <p className={s.text}>{item.promo_text}</p>
                  <div className={s.all}>
                    <p className={s.small_text}>{t('discount_text')}</p>
                    <img src={handIcon} alt='' />
                    <button className={s.button_uare}>
                      {' '}
                      {item.promo_code} <img src={fileIcon} alt='' />
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

              <p className={s.text_production}>
                {' '}
                {t('Available')} {item.countries_access}
              </p>
            </div>
          </div>
        </div>
      </animated.div>
    </Container>
  );
};
