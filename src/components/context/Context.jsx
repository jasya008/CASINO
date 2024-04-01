import axios from 'axios';
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const initContext = createContext();

export const Context = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenGame, setModalOpenGame] = useState(false);
  const [modalLoginOpen, setLoginModal] = useState(false);
  const [modalEmailVerify, setModalEmailVerify] = useState(false);
  const [modalNumberVerify, setModalNumberVerify] = useState(false);
  const [modalNumberVerifyRegist, setModalNumberVerifyRegistr] =
    useState(false);
  const [modalReview, setModalReview] = useState(false);
  const [modalChangePassword, setModalChangePassword] = useState(false);
  const [initialModal, setIntitalModal] = useState(false);
  const [dataCasino, setDataCasino] = useState([]);
  const [dataGames, setDataGames] = useState([]);
  const [chooseCasino, setChooseCasino] = useState([]);
  const [chooseReview, setChooseReview] = useState([]);
  const [chooseGame, setChooseGame] = useState([]);
  const [chooseGamesWeek, setChooseGamesWeek] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCasino, setfilteredCasino] = useState(dataCasino);
  const [filteredGames, setfilteredGames] = useState(dataGames);
  const [lang, setLang] = useState('english');
  const [trigger, setTrigger] = useState(false);
  // USER SAVE
  const [user, setUser] = useState([]);

  //   GET CASINO
  const CasinoApi_URL = 'http://127.0.0.1:8000/all-casino-profiles/';

  const getData = async () => {
    try {
      const { data } = await axios(CasinoApi_URL);
      setDataCasino(data);
    } catch (error) {
      //   console.log(error.message);
    }
  };

  //   GET GAMES AUTOMAT
  const AutomatsApi_URL = 'http://127.0.0.1:8000/all-game-profiles/';

  const getDataAutomats = async () => {
    try {
      const { data } = await axios(AutomatsApi_URL);
      setDataGames(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
    getDataAutomats();
  }, []);

  return (
    <>
      <initContext.Provider
        value={{
          modalOpen,
          setModalOpen,
          modalLoginOpen,
          setLoginModal,
          modalReview,
          setModalReview,
          initialModal,
          setIntitalModal,
          user,
          setUser,
          dataCasino,
          setDataCasino,
          dataGames,
          setDataGames,
          chooseCasino,
          setChooseCasino,
          chooseGame,
          setChooseGame,
          setSearch,
          search,
          filteredCasino,
          setfilteredCasino,
          filteredGames,
          setfilteredGames,
          lang,
          setLang,
          chooseGamesWeek,
          setChooseGamesWeek,
          modalOpenGame,
          setModalOpenGame,
          trigger,
          setTrigger,
          modalEmailVerify,
          setModalEmailVerify,
          modalNumberVerify,
          setModalNumberVerify,
          modalChangePassword,
          setModalChangePassword,
          modalNumberVerifyRegist,
          setModalNumberVerifyRegistr,
          setChooseReview,
          chooseReview
        }}
      >
        {children}
      </initContext.Provider>
    </>
  );
};

export const GetContext = () => {
  return useContext(initContext);
};
