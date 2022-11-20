const mongoose = require('mongoose')

const Musica = mongoose.model('Musica', {
    nome: String,
    artista: String,
    audio: String
})


module.exports = Musica