const express = require('express')
const server = express()
const mongoose = require('mongoose')

const Musica = require('../models/Musica')
const Playlist = require('../models/Playlist')
const Usuario = require('../models/Usuario')

server.use(express.json())




// Listagem de playlists abertas

server.get('/playlists', async (req, res) => {
    const playlist = await Playlist.find()
    res.json(playlist)
});


// Listagem de playlists de um usuário

server.get('/usuarios/:id/playlists', async (req, res) => {
    const id = req.params.id;

    const usuario = await Usuario.findOne({_id : id})

    const playlistsUsuario = usuario.playlists
    
    res.json(playlistsUsuario)
})


// Detalhe das playlists abertas

server.get('/playlists/:id', async (req, res) => {
    const id = req.params.id

    const playlists = await Playlist.findOne({_id : id})

    res.json(playlists)
})


// Detalhe playlist do usuário

server.get('/usuarios/:idUsuario/playlists/1', async (req, res) => {

    const idUsuario = req.params.idUsuario

    const usuario = await Usuario.findOne({_id : idUsuario})

    res.json(usuario.playlists[0])
    
})


// Cadastro 

server.post('/usuarios', async (req, res) => {
    const {nome} = req.body;
    const {idade} = req.body;
    const {email} = req.body;
    const {senha} = req.body;

    const novoUsuario = {
        nome: nome,
        idade: idade,
        email: email,
        senha: senha,
        playlists: []
    }


    await Usuario.create(novoUsuario)
    res.json({message: 'Usuário Cadastrado.'})
})


// Login

server.get('/usuarios', async (req, res) => {
    const email = req.query.email

    const usuarioEncontrado = await Usuario.findOne({email: email})

    if(usuarioEncontrado){
      res.json(usuarioEncontrado)
    }
    else{
      res.json({message: 'Usuário não encontrado.'})
    }
    
})


// Alterar conta 

server.put('/usuarios/:id', async (req, res) => {
    const id = req.params.id

    const usuario = await Usuario.findOne({_id: id})

    const {nome} = req.body
    const {idade} = req.body
    const {email} = req.body
    const {senha} = req.body

    usuario.nome = nome
    usuario.idade = idade
    usuario.email = email
    usuario.senha = senha

    await Usuario.updateOne({_id: id}, usuario)

    res.json(usuario)
})


// Criar playlist

server.post('/usuarios/:id/playlists', async (req, res) => {
    const id = req.params.id

    const usuario = await Usuario.findOne({_id: id})

    const {nome} = req.body
    
    const novaPlaylist = {
        nome: nome,
        capa: "/imagens/playlist-lofi.jpg",
        musicas: []
    }

    usuario.playlists.push(novaPlaylist)

    await Usuario.updateOne({_id: id}, usuario)

    res.json(usuario.playlists)
})


// Adicionar música na playlists 

server.post('/usuarios/:idUsuario/playlists/1/musicas/:idMusica', async (req, res) => {
    const idUsuario = req.params.idUsuario
    const idMusica = req.params.idMusica

    const usuario = await Usuario.findOne({_id: idUsuario})

    const musicaAdicionar = await Musica.findOne({_id: idMusica})

    usuario.playlists[0].musicas.push(musicaAdicionar)

    await Usuario.updateOne({_id: id}, usuario)

    res.json(usuario.playlists[0].musicas)

})


// Deletar música da playlist 

server.delete('/usuarios/:idUsuario/playlists/1/musicas/:idMusica', async (req, res) => {
    const idUsuario = req.params.idUsuario
    const idMusica = req.params.idMusica

    const usuario = await Usuario.findOne({_id: idUsuario})

    usuario.playlists[0].musicas.splice(idMusica-1, 1)

    await Usuario.updateOne({_id: id}, usuario)

    res.json(usuario.playlists[0].musicas)
})


// Buscar músicas

server.get('/musicas', async (req, res) => {
    const {nome} = req.query;
    const musicas = await Musica.find()

    if(!nome){
      res.json(musicas)
    }
    else{
      const musicasFiltradas = musicas.filter((musica) => musica.nome.toLowerCase().includes(nome.toLowerCase()))

      res.json(musicasFiltradas)
    }
})


// Adicionar música

server.post('/musicas', (req, res) => {
    const {nome, artista, audio} = req.body

    const novaMusica = {
      nome: nome,
      artista: artista,
      audio: audio
    }

    Musica.create(novaMusica)
    res.json({message: 'Música cadastrada.'})
})


// Adicionar playlist

server.post('/playlists', (req,res) => {
    const {nome, capa, musicas} = req.body

    const novaPlaylist = {
      nome: nome,
      capa: capa,
      musicas: musicas
    }

    Playlist.create(novaPlaylist)
    res.json({message: 'Playlist adicionada'})
})



mongoose.connect('mongodb+srv://lucas:lucas321@spotifor.mdrjo4z.mongodb.net/spotiformongo?retryWrites=true&w=majority')
  .then(() => {
    server.listen(3001);
    console.log('MongoDB conectado!')
  })
  .catch((erro) => {
    console.log(erro)
  })



