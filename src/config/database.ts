export default {
  type: 'mssql',
  host: process.env.DATABASE_URL,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: true,
  sync: true,
  entities: [`dist/**/*.entity{.ts,.js}`],
};
