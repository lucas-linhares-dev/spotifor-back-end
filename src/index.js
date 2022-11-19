const express = require('express')
const server = express()
const mongoose = require('mongoose')

server.use(express.json())


const usuarios = [
    {
        nome: "Lucas Linhares",
        idade: 200,
        email: "lucas@gmail.com",
        senha: 123,
        playlists: [
          {
            id: 1,
            nome: "Playlist Lucas",
            capa: "/imagens/playlist-lofi.jpg",
            musicas: [
              {
                id: 1,
                nome: "Companions",
                artista: "Amtrac",
                audio: "/audios/Amtrac - Companions.mp3"
              },
              {
                id: 2,
                nome: "Madness To Mayhem",
                artista: "Amtrac",
                audio: "/audios/Amtrac - Madness To Mayhem.mp3"
              }
            ]
          },
          {
            nome: "Meu Rock",
            capa: "/imagens/playlist-lofi.jpg",
            musicas: []
          },
          {
            nome: "Meu pop",
            capa: "/imagens/playlist-lofi.jpg",
            musicas: []
          },
          {
            nome: "Meu reggae",
            capa: "/imagens/playlist-lofi.jpg",
            musicas: []
          },
          {
            nome: "Pop rock",
            capa: "/imagens/playlist-lofi.jpg",
            musicas: []
          },
          {
            nome: "Lucas melhores",
            capa: "/imagens/playlist-lofi.jpg",
            musicas: []
          }
        ],
        id: 1
      },
      {
        nome: "Mateus Souza Silva",
        idade: 18,
        email: "mateus@gmail.com",
        senha: 123,
        playlists: [
          {
            id: 1,
            nome: "Playlist Mateus",
            capa: "/imagens/playlist-lofi.jpg",
            musicas: [
              {
                id: 1,
                nome: "Companions",
                artista: "Amtrac",
                audio: "/audios/Amtrac - Companions.mp3"
              },
              {
                id: 2,
                nome: "Madness To Mayhem",
                artista: "Amtrac",
                audio: "/audios/Amtrac - Madness To Mayhem.mp3"
              }
            ]
          },
          {
            nome: "mateus rock",
            capa: "/imagens/playlist-lofi.jpg",
            musicas: []
          }
        ],
        id: 2
      },
      {
        nome: "Levi Linhares",
        idade: 25,
        email: "levi@gmail.com",
        senha: 123,
        playlists: [],
        id: 3
      },
      {
        nome: "Joao Pedro",
        idade: 15,
        email: "joao@gmail.com",
        senha: 123,
        playlists: [],
        id: 4
      },
      {
        nome: "Pedro Emilio",
        idade: 17,
        email: "pedro@gmail.com",
        senha: 123,
        playlists: [],
        id: 5
      }
]

const playlists = [
  {
    id: 1,
    nome: "Lofi HipHop",
    capa: "/imagens/playlist-lofi.jpg",
    musicas: [
      {
        id: 1,
        nome: "Companions",
        artista: "Amtrac",
        audio: "/audios/Amtrac - Companions.mp3"
      },
      {
        id: 2,
        nome: "Madness To Mayhem",
        artista: "Amtrac",
        audio: "/audios/Amtrac - Madness To Mayhem.mp3"
      }
    ]
  },
  {
    id: 2,
    nome: "Pop",
    capa: "/imagens/playlist-pop.jpg",
    musicas: [
      {
        id: 3,
        nome: "Atlas",
        artista: "Lane 8",
        audio: "/audios/Lane 8 - Atlas.mp3"
      },
      {
        id: 4,
        nome: "Brightest Lights feat. POLIÇA",
        artista: "Lane 8",
        audio: "/audios/Lane 8 - Brightest Lights feat. POLIÇA.mp3"
      }
    ]
  },
  {
    id: 3,
    nome: "Rap",
    capa: "/imagens/playlist-rap.jpg",
    musicas: [
      {
        id: 5,
        nome: "Fingerprint",
        artista: "Lane 8",
        audio: "/audios/Lane 8 - Fingerprint.mp3"
      },
      {
        id: 6,
        nome: "Lose Yourself to Dance",
        artista: "Daft Punk",
        audio: "/audios/Lose Yourself to Dance - Daft Punk.mp3"
      }
    ]
  },
  {
    id: 4,
    nome: "Clássicos do reggae",
    capa: "/imagens/playlist-reggae.jpg",
    musicas: [
      {
        id: 7,
        nome: "Meu Novo Mundo",
        artista: "Charlie Brown",
        audio: "/audios/Meu Novo Mundo - Charlie Brown.mp3"
      },
      {
        id: 8,
        nome: "Never Lost",
        artista: "Amtrac",
        audio: "/audios/Never Lost - Amtrac.mp3"
      }
    ]
  },
  {
    id: 5,
    nome: "Rock forever",
    capa: "/imagens/playlist-rock.jpg",
    musicas: [
      {
        id: 9,
        nome: "Rasta Courage",
        artista: "Soja",
        audio: "/audios/Rasta Courage - Soja.mp3"
      },
      {
        id: 10,
        nome: "True Love",
        artista: "Soja",
        audio: "/audios/True Love - Soja.mp3"
      }
    ]
  },
  {
    id: 6,
    nome: "O melhor da MPB",
    capa: "/imagens/playlist-mpb.jpg",
    musicas: [
      {
        id: 11,
        nome: "Waiting In Vain",
        artista: "Bob Marley",
        audio: "/audios/Waiting In Vain - Bob Marley.mp3"
      },
      {
        id: 12,
        nome: "Como Tudo Deve Ser",
        artista: "Charlie Brown",
        audio: "/audios/Como Tudo Deve Ser - Charlie Brown.mp3"
      }
    ]
  }
]


const musicas = [
  {
    id: 1,
    nome: "Companions",
    artista: "Amtrac",
    audio: "/audios/Amtrac - Companions.mp3"
  },
  {
    id: 2,
    nome: "Madness To Mayhem",
    artista: "Amtrac",
    audio: "/audios/Amtrac - Madness To Mayhem.mp3"
  },
  {
    id: 3,
    nome: "Atlas",
    artista: "Lane 8",
    audio: "/audios/Lane 8 - Atlas.mp3"
  },
  {
    id: 4,
    nome: "Brightest Lights feat. POLIÇA",
    artista: "Lane 8",
    audio: "/audios/Lane 8 - Brightest Lights feat. POLIÇA.mp3"
  },
  {
    id: 5,
    nome: "Fingerprint",
    artista: "Lane 8",
    audio: "/audios/Lane 8 - Fingerprint.mp3"
  },
  {
    id: 6,
    nome: "Lose Yourself to Dance",
    artista: "Daft Punk",
    audio: "/audios/Lose Yourself to Dance - Daft Punk.mp3"
  },
  {
    id: 7,
    nome: "Meu Novo Mundo",
    artista: "Charlie Brown",
    audio: "/audios/Meu Novo Mundo - Charlie Brown.mp3"
  },
  {
    id: 8,
    nome: "Never Lost",
    artista: "Amtrac",
    audio: "/audios/Never Lost - Amtrac.mp3"
  },
  {
    id: 9,
    nome: "Rasta Courage",
    artista: "Soja",
    audio: "/audios/Rasta Courage - Soja.mp3"
  },
  {
    id: 10,
    nome: "True Love",
    artista: "Soja",
    audio: "/audios/True Love - Soja.mp3"
  },
  {
    id: 11,
    nome: "Waiting In Vain",
    artista: "Bob Marley",
    audio: "/audios/Waiting In Vain - Bob Marley.mp3"
  },
  {
    id: 12,
    nome: "Como Tudo Deve Ser",
    artista: "Charlie Brown",
    audio: "/audios/Como Tudo Deve Ser - Charlie Brown.mp3"
  }
]

// Listagem de playlists abertas

server.get('/playlists', (req, res) => {
    res.json(playlists);
});


// Listagem de playlists de um usuário

server.get('/usuarios/:id/playlists', (req, res) => {
    const {id} = req.params;

    res.json(usuarios[id-1].playlists)
})


// Detalhe das playlists abertas

server.get('/playlists/:id', (req, res) => {
    const {id} = req.params;

    res.json(playlists[id-1])
})


// Detalhe playlist do usuário

server.get('/usuarios/:id/playlists/1', (req, res) => {
    const {id} = req.params;

    res.json(usuarios[id-1].playlists[0])
})


// Cadastro 

server.post('/usuarios', (req, res) => {
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

    usuarios.push(novoUsuario);
    
    res.json(usuarios);
})


// Login // SEM ENTENDER REQ QUERY

server.get('/usuarios', (req, res) => {
    const {email} = req.query

    const usuarioEncontrado = usuarios.filter((usuario) =>  // ATRIBUTOS DO USUARIO VINDO UNDEFINED
        usuario.email == email
    )

    if(usuarioEncontrado === undefined){
        res.json({message: "Usuário não encontrado"})
    }
    else{
      res.json(usuarioEncontrado)
    }
})


// Alterar conta 

server.put('/usuarios/:id', (req, res) => {
    const {id} = req.params

    const {nome} = req.body
    const {idade} = req.body
    const {email} = req.body
    const {senha} = req.body

    usuarios[id-1].nome = nome
    usuarios[id-1].idade = idade
    usuarios[id-1].email = email
    usuarios[id-1].senha = senha

    res.json(usuarios)
})


// Criar playlist

server.post('/usuarios/:id/playlists', (req, res) => {
    const {id} = req.params
    const {nome} = req.body
    
    const novaPlaylist = {
        nome: nome,
        capa: "/imagens/playlist-lofi.jpg",
        musicas: []
    }

    usuarios[id-1].playlists.push(novaPlaylist)

    res.json(usuarios[id-1].playlists)
})


// Adicionar música na playlists

server.post('/usuarios/:id/playlists/1/musicas', (req, res) => {
    const {id} = req.params

    const {nome} = req.body
    const {artista} = req.body

    const novaMusica = {
        nome: nome,
        artista: artista,
        audio: "/audios/Never Lost - Amtrac.mp3"
    }

    usuarios[id-1].playlists[0].musicas.push(novaMusica)

    res.json(usuarios[id-1].playlists[0].musicas)

})


// Deletar música da playlist // REQ PARAMS BUG

server.delete('/usuarios/:idUsuario/playlists/1/musicas/:idMusica', (req, res) => {
    const {idUsuario} = req.params
    const {idMusica} = req.params

    usuarios[idUsuario-1].playlists[0].musicas.splice(idMusica-1, 1)

    res.json(usuarios[idUsuario-1].playlists[0].musicas)
})


// Buscar músicas

server.get('/musicas', (req, res) => {
    const {nome} = req.query;

    if(!nome){
      res.json(musicas)
    }
    else{
      const musicasFiltradas = musicas.filter((musica) => musica.nome.toLowerCase().includes(nome.toLowerCase()))

      res.json(musicasFiltradas)
    }
})




mongoose.connect('mongodb+srv://lucas:lucas321@spotifor.mdrjo4z.mongodb.net/spotiformongo?retryWrites=true&w=majority')
  .then(() => {
    server.listen(3001);
    console.log('MongoDB conectado!')
  })
  .catch((erro) => {
    console.log(erro)
  })



