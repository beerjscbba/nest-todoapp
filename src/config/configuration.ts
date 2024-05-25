import { registerAs } from '@nestjs/config'

export default registerAs('config', () => {
  return {
    Port: process.env.PORT,
    Mongo: {
      MONGO_URI: process.env.MONGO_URI,
      DBNAME: process.env.MONGO_DB
    }
  }
})
