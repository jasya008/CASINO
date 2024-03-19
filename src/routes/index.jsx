import { CasinoesPage } from "../pages/CasinoPage";
import { GamesAutomats } from "../pages/GameAutomats";
import { NotFound } from "../pages/Not Found";

export const routes = [
    { id: "page-1", path: "/GameAutomats", element: <GamesAutomats /> },
    { id: "page-2", path: "*", element: <NotFound /> },
    { id: "casinoes", path: "casino/:id", element: <CasinoesPage /> },

    
]