import { Sequelize } from 'sequelize'

export const db = new Sequelize(
  'typescript',
  'estagiario_05',
  '741852',
  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
  }
)
