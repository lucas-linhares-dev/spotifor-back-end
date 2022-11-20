const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
    nome: String,
    idade: Number,
    email: String,
    senha: Number,
    playlists: [
        {
            nome: String,
            capa: String,
            musicas: [
                {
                    nome: String,
                    artista: String,
                    audio: String
                }
            ]
        }
    ]
})


module.exports = Usuario