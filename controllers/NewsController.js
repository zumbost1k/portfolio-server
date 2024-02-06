const { v4 } = require('uuid');
const { News } = require('../models/models');
const path = require('path');

class NewsController {
  async create(req, res) {
    try {
      const { newsTitle, newsDate, newsText, alt } = req.body;
      const { img } = req.files;
      let fileName = v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const newNews = await News.create({
        newsTitle,
        newsDate,
        newsText,
        alt,
        newsPhotoPath: fileName,
      });
      return res.status(200).json(newNews);
    } catch (error) {
      return res.status(404).json({ message: 'news create error' });
    }
  }
  async getAll(req, res) {
    try {
      const projects = await News.findAll();
      return res.json(projects);
    } catch (error) {
      return res.status(404).json({ message: 'get all news error' });
    }
  }
}

module.exports = new NewsController();
