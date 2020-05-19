export const config = {
    type: 'mssql',
    host: process.env.DATABASE_URL,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    requestTimeout: +process.env.DATABASE_REQUEST_TIMEOUT,
    logging: true,
    entities: [`dist/**/*.entity{.ts,.js}`],
};
