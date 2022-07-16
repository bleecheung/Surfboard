const mongoose = require("mongoose");

//create connection
mongoose
  .connect(
    "mongodb://localhost/agenda",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("database connected sucessfully!");
  })
  .catch(() => {
    mongoose.set("useCreateIndex", true);
  });

//   mongoose.connection.db.dropDatabase();
// });

const AgendaSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  time: {
      type: Number,
  },
  description: {
    type: String,
  }
});

const Agenda = mongoose.model('agenda', AgendaSchema);

module.exports.Agenda = Agenda;
