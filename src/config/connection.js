import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'sqlite.db', // Specify the path to your SQLite database file
});

export default sequelize;