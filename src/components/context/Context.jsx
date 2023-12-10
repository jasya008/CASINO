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
  const [modalLoginOpen, setLoginModal] = useState(false);
  const [modalReview, setModalReview] = useState(false);
  const [initialModal, setIntitalModal] = useState(false);
  const [dataCasino, setDataCasino] = useState([]);
  const [dataGames, setDataGames] = useState([]);
  const [chooseCasino, setChooseCasino] = useState([]);

  // USER SAVE
  const [user, setUser] = useState({
    email: '',
  });

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
  const AutomatsApi_URL = 'http://localhost:4080/games';

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
          setChooseCasino
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
