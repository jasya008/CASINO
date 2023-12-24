import s from './index.module.scss';
import iconTrophy from '../../assets/Trophy.svg';
import star from '../../assets/bigStar.svg';
import { Container } from '@mui/material';
import { GetContext } from '../context/Context';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from 'react-spring';


export const ModalGames = () => {
  const { modalOpen, setModalOpen, chooseGame: item } = GetContext();
  const { t } = useTranslation();

  const animation = useSpring({
    opacity: modalOpen ? 1 : 0,
    transform: modalOpen ? 'translateY(0%)' : 'translateY(-100%)',
  });

  return (
    <Container fixed>
      <animated.div style={animation} className='popup'>
        <div
          className={
            modalOpen ? [s.ModalAutomat, s.modalShow].join(' ') : s.ModalAutomat
          }
        >
          <div className={s.left_side}>
            <p className={s.estimate_text}>
              <img className={s.iconTrophy} src={iconTrophy} alt='' />
              {item.ranking_position}
              {t('rank')}
            </p>
            <img className={s.imgAutomat} src={item.image_link} alt='' />

            <p className={s.text}>{item.game_text}</p>

            <button className={s.button}>{t('buttonGame_text')}</button>
          </div>

          <div className={s.right_side}>
            <div className={s.all_grade}>
              <CloseIcon
                className={s.icon}
                onClick={() => setModalOpen(false)}
              />
              <p className={s.estimate}>
                {' '}
                <img src={star} alt='' className={s.star} />{' '}
                {item.editor_rating}
              </p>
              <p className={s.text_grade}>{t('grade')}</p>
            </div>

            <div className={s.texts}>
              <div className={s.one_side}>
                <p className={s.textOneside}>{t('Date')}</p>
                <p className={s.textOneside}>{t('genre')}</p>
                <p className={s.textOneside}>{t('minBid')}</p>
                <p className={s.textOneside}>{t('maxBid')}</p>
                <p className={s.textOneside}>{t('maxpay')}</p>
                <p className={s.textOneside}>{t('reels')}</p>
                <p className={s.textOneside}>{t('rows')}</p>
                <p className={s.textOneside}>{t('lines')}</p>
                <p className={s.textOneside}>{t('rtp')}</p>
                <p className={s.textOneside}>{t('Volatility')}</p>
                <p className={s.textOneside}>{t('Platforms_button')}</p>
              </div>

              <div className={s.one_side}>
                <p className={s.textOtherside}>{item.release_date}</p>
                <p className={s.textOtherside}>{item.genre}</p>
                <p className={s.textOtherside}>{item.min_bet}</p>
                <p className={s.textOtherside}>{item.max_bet}</p>
                <p className={s.textOtherside}>{item.max_payout}</p>
                <p className={s.textOtherside}>{item.reels}</p>
                <p className={s.textOtherside}>{item.rows}</p>
                <p className={s.textOtherside}>{item.pay_lines}</p>
                <p className={s.textOtherside}>{item.rtp}</p>
                <p className={s.textOtherside}>{item.volatility}</p>
                <p className={s.textOtherside}>{item.platforms}</p>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </Container>
  );
};
