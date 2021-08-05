const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const movies = require('./samples.json')
console.log(movies)

router.get('/', (req, res)=>{
    res.json(movies)
})

router.post('/', (req, res)=>{
    const {id,titulo, Artista, ano, disco} = req.body
    if (titulo && Artista && ano && disco){
        const id = movies.length + 1
        const newMovie = {...req.body, id}
        movies.push(newMovie)
        res.json(movies)
    }else{
        res.status(500).json({erro:'no guardado/erro'})
    }
    res.send('recibido')
})

router.put('/:id', (req, res)=>{
    const {id} = req.params
    const {titulo, Artista, ano, disco} = req.params
    if(titulo && Artista && ano && disco){
        _.each(movies, (movie, i)=>{
            if (movie.id == id){
                movie.titulo = titulo
                movie.Artista = Artista
                movie.ano = ano
                movie.disco = disco
            }
        })
        res.json(movies)
    }else{
        res.status(500).json({error:'hubo un error'})
    }
})

router.delete('/:id', (req, res)=>{
    const {id} = req.params
    _.each(movies, (movie, i)=>{
        if(movie.id == id){
            movies.splice(i, 1)
        }
    })
    res.send(movies)
})



module.exports = router