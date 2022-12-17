const mongoose = require('mongoose');

// Criação da entidade Profiles no mongoose
const ProfilesSchema = mongoose.Schema({
    type: { type: String, required: false },
    canDelete: { type: Boolean, required: true, default: true },
    created: { type: Date, required: true },
    updated: { type: Date, required: false }
})

module.exports = mongoose.model('Profiles', ProfilesSchema);