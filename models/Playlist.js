const mongoose = require('mongoose')

const Playlist = mongoose.model('Playlist', {
    nome: String,
    capa: String,
    musicas: [
        {
            nome: String,
            artista: String,
            audio: String
        }
    ]
})


module.exports = Playlist