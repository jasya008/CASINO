import { Casino1Game } from '../pages/Casino1Games';
import { Casino2Game } from '../pages/Casino2Games';
import { CasinoesPage } from '../pages/CasinoPage';
import { GamesAutomats } from '../pages/GameAutomats';
import { GamesOfWeekPage } from '../pages/GameOfWeekPage';
import { GamePage } from '../pages/GamesPage';
import { NotFound } from '../pages/Not Found';
import { ReviewsData } from '../pages/ReviewsAdd';

export const routes = [
  { id: 'page-1', path: '/GameAutomats', element: <GamesAutomats /> },
  { id: 'page-2', path: '*', element: <NotFound /> },
  { id: 'casinoes', path: 'casino/:id', element: <CasinoesPage /> },
  { id: 'games', path: 'game/:id', element: <GamePage /> },
  { id: 'games', path: 'gamesOfWeek/:id', element: <GamesOfWeekPage /> },
  { id: 'games-casino-1', path: 'gamesCasino1', element: <Casino1Game /> },
  { id: 'games-casino-1', path: 'gamesCasino2', element: <Casino2Game /> },
  { id: 'reviews', path: 'review/:id', element: <ReviewsData /> }
];
