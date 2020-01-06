const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LoginAdd = new Schema({
    email: {
        type: String,required: true
    },
    password: {
        type: String,required: true
    }
});

// module.exports = mongoose.model('LoginAdd', LoginAdd);
const LogAdd = mongoose.model("LogAdd", LoginAdd);

module.exports = LogAdd;