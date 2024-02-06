const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Project = sequelize.define('project', {
  projectId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  projectName: { type: DataTypes.STRING, allowNull: false },
  projectPhotoPath: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  displayResolution: { type: DataTypes.STRING, allowNull: false },
  instruments: { type: DataTypes.STRING, allowNull: false },
  developmentPeriod: { type: DataTypes.STRING, allowNull: false },
  projectLink: { type: DataTypes.STRING, allowNull: false },
  personalFeedback: { type: DataTypes.STRING(600), allowNull: false },
});

const News = sequelize.define('news', {
  newsId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  newsTitle: { type: DataTypes.STRING, allowNull: false, unique: true },
  newsDate: { type: DataTypes.STRING, allowNull: false },
  newsText: { type: DataTypes.STRING(600), allowNull: false },
  newsPhotoPath: { type: DataTypes.STRING, allowNull: false },
  alt: { type: DataTypes.STRING, allowNull: false },
});

const Email = sequelize.define('email', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = {
  Email,
  News,
  Project,
};
