const Sequelize = require("sequelize");

const sequelize = new Sequelize("steam1", "root", null, {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const Game = sequelize.define("game", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  hours: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  review: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  developer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  publisher: {
    type: Sequelize.STRING,
    allowNull: false
  },
  published_date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  recommended: {
    type: Sequelize.STRING,
    allowNull: false
  },
  played: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Game.sync({ force: false, logging: false }).then(() => {
  console.log("Game table synced");
});

const getAll = cb => {
  Game.findAll()
    .then(data => cb(null, data))
    .catch(err => cb(err));
};

module.exports.Game = Game;
module.exports.getAll = getAll;
