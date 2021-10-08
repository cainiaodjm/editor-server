const mongoose = require("../db/mongoose");

const WorkSchema = mongoose.Schema(
  {
    title: String, // String is shorthand for {type: String}
    components: [Object],
    props: Object,
    setting: Object,
  },
  { timestamps: true }
);

const WorkModel = mongoose.model("work", WorkSchema);

module.exports = {
  WorkModel,
};
