// 118d7a089f760d25e91af9a62a159158    
const apiLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=118d7a089f760d25e91af9a62a159158&page=1'
const imgPath = 'https://image.tmdb.org/t/p/w1280/'
const searcApi = 'https://api.themoviedb.org/3/search/movie?&api_key=118d7a089f760d25e91af9a62a159158&query='

const section = document.querySelector('#section')
const form = document.querySelector('#form')
const input = document.querySelector('input')



const getMovie = (url) => {
    fetch(url)
        .then((res) => {
        return res.json
    })
    .then(function(data) {
        console.log(data.result)
    })


}

