import { createPool } from 'mysql2/promise';
import {config} from '../config';

const {database, user, password} = config;

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_battleground',
    namedPlaceholders: true,
    decimalNumbers: true,
});
