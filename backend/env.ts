import * as dotenv from 'dotenv'

dotenv.config()

type envType = {
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
}

export const env:envType = {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
};