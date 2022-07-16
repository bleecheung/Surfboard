const {Agenda} = require("../database/db.js");

exports.findAll = () => {
  return Agenda.find({});
};

exports.createOne = (title, time, description) => {
  return Agenda.create({title: title, time: time, description: description});
};

exports.update = (description, id, title, time, updatedTitle, updatedDescription, updatedTime) => {
  return Agenda.findOneAndUpdate({description: description, _id: id, title: title, time: time}, {description: updatedDescription, _id: id, title: updatedTitle, time: updatedTime})
}

exports.delete = (id) => {
  return Agenda.deleteOne({_id: id});
};
