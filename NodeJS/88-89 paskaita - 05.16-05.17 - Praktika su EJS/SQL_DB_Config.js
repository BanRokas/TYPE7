const mysqlConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
  port: process.env.DB_PORT
}

export default mysqlConfig;