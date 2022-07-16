const client = require("../models/client.js");

module.exports = {

  getAll: (req, res) => {
    client.findAll()
      .select("-__v")
      .exec()
        .then((data) => res.send(data).status(200))
        .catch((err) => console.log(err))
  },

  createOne: (req, res) => {
    client.createOne(req.body.title, req.body.time, req.body.description)
      .then((data) => res.sendStatus(201))
      .catch((err) => console.log(err))
  },

  update: (req, res) => {
    client.update(req.body.description, req.body._id, req.body.title, req.body.time, req.body.updatedTitle, req.body.updatedDescription, req.body.updatedTime)
      .then((data) => res.sendStatus(203))
      .catch((err) => console.log(err))
  },

  delete: (req, res) => {
    client.delete(req.body._id)
      .then((data) => res.sendStatus(204))
      .catch((err) => console.log(err))
  }

}
