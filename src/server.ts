import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger'

// database connect
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected')
    app.listen(config.port, () => {
      logger.info(`Server app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Database connection failed')
  }
}

main()
