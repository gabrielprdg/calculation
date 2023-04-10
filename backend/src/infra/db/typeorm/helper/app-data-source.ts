import { DataSource } from 'typeorm'
import { TypeOrmCalculate } from '../entities/typeorm-calculate'

export class AppDataSource {
  private static instance: DataSource
  static getInstance (): DataSource {
    if (this.instance) return this.instance
    this.instance = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [TypeOrmCalculate],
      subscribers: [],
      migrations: []
    })

    return this.instance
  }
}
