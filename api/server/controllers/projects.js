const Project = require('../models').project;

module.exports = {
  async list(req, res){
    try {
      const result = await Project.all();
      return res.status(200).send(result);
    } catch (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
}