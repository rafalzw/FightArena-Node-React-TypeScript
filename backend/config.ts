import 'dotenv/config';

export const config = {
    port: process.env.PORT || 3002,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
}