import * as express from "express";
import * as cors from "cors";
import * as path from "path";
import {config} from './config';
import {addRouter} from "./routes/create-warrior";
import { fightRouter } from './routes/fight-arena';
import { hallOfFameRouter } from "./routes/hall-of-fame";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.use('/create-warrior', addRouter);
app.use('/fight-arena', fightRouter);
app.use('/hall-of-fame', hallOfFameRouter);
app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`);
});
