import React, { useEffect, useState } from 'react';
import s from './index.module.scss';
import { GetContext } from '../context/Context';
import { Container } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import CloseIcon from '@mui/icons-material/Close';
import star from '../../assets/star.svg';
import person from '../../assets/person.svg';
import warning from '../../assets/!.svg';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export const ModalGamesCasino = () => {
  const {
    modalGamesCasino,
    chooseGame,
    dataCasino,
    setModalGamesCasino,
    setChooseCasinoGames,
    setChooseCasinoGamesModal,
    setChooseCasinoGamesReview,
  } = GetContext();
  const [filteredCasinos, setFilteredCasinos] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (
      dataCasino &&
      dataCasino.length > 0 &&
      chooseGame &&
      chooseGame.multiple_casino_ids &&
      chooseGame.multiple_casino_ids.length > 0
    ) {
      const filtered = dataCasino.filter((casino) =>
        chooseGame.multiple_casino_ids.includes(casino.id.toString())
      );
      setFilteredCasinos(filtered);
    } else {
      setFilteredCasinos([]);
    }
  }, [dataCasino, chooseGame]);

  const animation = useSpring({
    opacity: modalGamesCasino ? 1 : 0,
    transform: modalGamesCasino ? 'translateY(0%)' : 'translateY(-100%)',
  });

  return (
    <Container fixed>
      <animated.div style={animation} className={s.popup}>
        <div
          className={
            modalGamesCasino ? [s.modal, s.modalShow].join(' ') : s.modal
          }
        >
          <h1 className={s.title}>{t('casinoGameModal')}</h1>
          <div className={s.cards}>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-navigation-padding': '20px',
              }}
              rewind={true}
              navigation={true}
              slidesPerView={3}
              spaceBetween={50}
              modules={[Navigation]}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                770: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              className={s.swiper}
            >
              {filteredCasinos && filteredCasinos.length > 0 ? (
                filteredCasinos.map((casino) => (
                  <SwiperSlide>
                    <div key={casino.id} className={s.card}>
                      <p className={s.grade}>
                        <img src={star} alt='' />
                        {casino.editor_rating}
                      </p>
                      <img className={s.image} src={casino.image_link} alt='' />
                      <div className={s.all_text}>
                        <p
                          className={s.text}
                          onClick={() => {
                            setChooseCasinoGames(casino);
                            setChooseCasinoGamesModal(true);
                            setModalGamesCasino(false);
                          }}
                        >
                          <img src={warning} alt='' />
                          {t('information')}
                        </p>
                        <p
                          className={s.text}
                          onClick={() => {
                            setChooseCasinoGamesReview(true);
                            setModalGamesCasino(false);
                            setChooseCasinoGames(casino);
                          }}
                        >
                          <img src={person} alt='' />
                          {t('Reviews')}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p>No casinos found</p>
              )}
            </Swiper>
          </div>

          <CloseIcon
            className={s.icon}
            onClick={() => setModalGamesCasino(false)}
          />
        </div>
      </animated.div>
    </Container>
  );
};
