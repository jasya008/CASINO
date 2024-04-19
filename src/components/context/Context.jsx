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
  const [modalGamesCasino, setModalGamesCasino] = useState(false);
  const [dataCasino, setDataCasino] = useState([]);
  const [dataGames, setDataGames] = useState([]);
  const [chooseCasino, setChooseCasino] = useState([]);
  const [chooseReview, setChooseReview] = useState([]);
  const [chooseGame, setChooseGame] = useState([]);
  const [chooseGamesWeek, setChooseGamesWeek] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCasino, setfilteredCasino] = useState(dataCasino);
  const [filteredGames, setfilteredGames] = useState(dataGames);
  const [filteredPositiveComments, setFilteredPositiveComments] = useState([]);
  const [filteredNegativeComments, setFilteredNegativeComments] = useState([]);
  const [qwert, setQwert] = useState(true);
  const [lang, setLang] = useState('english');
  const [trigger, setTrigger] = useState(false);
  const [user, setUser] = useState([]);
  const [casino1, setCasino1] = useState(null);
  const [casino2, setCasino2] = useState(null);
  const [openCasino1Modal, setOpenCasino1Modal] = useState(false);
  const [openCasino2Modal, setOpenCasino2Modal] = useState(false);
  const [chooseCasinoGames, setChooseCasinoGames] = useState([]);
  const [chooseCasinoGamesModal, setChooseCasinoGamesModal] = useState(false);

  //   Fetching Data
  const fetchData = async (url, setter) => {
    try {
      const { data } = await axios(url);
      setter(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData('http://127.0.0.1:8000/all-casino-profiles/', setDataCasino);
    fetchData('http://127.0.0.1:8000/all-game-profiles/', setDataGames);
  }, []);

  const contextValues = {
    modalOpen,
    setModalOpen,
    modalLoginOpen,
    setLoginModal,
    modalReview,
    setModalReview,
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
    chooseReview,
    filteredPositiveComments,
    setFilteredPositiveComments,
    filteredNegativeComments,
    setFilteredNegativeComments,
    qwert,
    setQwert,
    modalGamesCasino,
    setModalGamesCasino,
    openCasino1Modal,
    setOpenCasino1Modal,
    casino1,
    setCasino1,
    casino2,
    setCasino2,
    openCasino2Modal,
    setOpenCasino2Modal,
    chooseCasinoGames,
    setChooseCasinoGames,
    chooseCasinoGamesModal,
    setChooseCasinoGamesModal,
  };

  return (
    <>
      <initContext.Provider value={contextValues}>
        {children}
      </initContext.Provider>
    </>
  );
};

export const GetContext = () => {
  return useContext(initContext);
};
