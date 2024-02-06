const { Email } = require('../models/models');

class EmailController {
  async create(req, res) {
    try {
      const { email } = req.body;
      const candidat = await Email.findOne({ where: { email } });
      if (candidat) {
        return res.status(409).json({ message: 'this email already sented' });
      }
      const newEmail = await Email.create({ email });
      //return in
      return res.json(newEmail);
    } catch (error) {
      return res.status(404).json({ message: 'email create error' });
    }
  }
  async getAll(req, res) {
    try {
      const emails = await Email.findAll();
      return res.json(emails);
    } catch (error) {
      return res.status(404).json({ message: 'get all email error' });
    }
  }
}

module.exports = new EmailController();
