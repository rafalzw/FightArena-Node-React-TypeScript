import './App.css';
import {Header} from "./components/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {CreateWarrior} from "./pages/CreateWarrior/CreateWarrior";
import {HallOfFame} from "./pages/HallOfFame/HallOfFame";
import {FightArena} from "./pages/FightArena/FightArena";
import {NotFound} from "./pages/404/404";

export const App = () => (
    <div className="App overflow-auto">
      <div className="container-fluid container-md">
        <Header/>
        <div className="container container-md text-start">
          <Routes>
            <Route path="/create-warrior" element={<CreateWarrior/>}/>
            <Route path="/fight-arena" element={<FightArena/>}/>
            <Route path="/hall-of-fame" element={<HallOfFame/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
);