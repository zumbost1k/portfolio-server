const { v4 } = require('uuid');
const { Project } = require('../models/models');
const path = require('path');

class ProjectController {
  async create(req, res) {
    try {
      const {
        projectName,
        type,
        displayResolution,
        instruments,
        developmentPeriod,
        projectLink,
        personalFeedback,
      } = req.body;
      const { img } = req.files;
      let fileName = v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const newProject = await Project.create({
        projectName,
        type,
        displayResolution,
        instruments,
        developmentPeriod,
        projectLink,
        personalFeedback,
        projectPhotoPath: fileName,
      });
      return res.status(200).json(newProject);
    } catch (error) {
      return res.status(404).json({ message: 'project create error' });
    }
  }
  async getAll(req, res) {
    try {
      const projects = await Project.findAll();
      return res.json(projects);
    } catch (error) {
      return res.status(404).json({ message: 'get all projects error' });
    }
  }
}

module.exports = new ProjectController();
