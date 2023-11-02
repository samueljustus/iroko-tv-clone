// 118d7a089f760d25e91af9a62a159158    
const apiLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=118d7a089f760d25e91af9a62a159158&page=1'
const imgPath = 'https://image.tmdb.org/t/p/w1280'
const searcApi = 'https://api.themoviedb.org/3/search/movie?&api_key=118d7a089f760d25e91af9a62a159158&query='

const section = document.querySelector('#section')
const movieWrapper = document.querySelector('.wrapper')
const form = document.querySelector('#form')
const input = document.querySelector('input')
// console.log(section)


    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        movieWrapper.innerHTML =''
        const inputItem = input.value
        input.value = ''
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=118d7a089f760d25e91af9a62a159158&query=${inputItem}`)
        const allResults = res.data.results
        allResults.forEach((result) => {
            const divCard = document.createElement('div')
            divCard.classList.add('card')

            const divColumn = document.createElement('div')
            divColumn.classList.add('column')

            const divRow = document.createElement('div')
            divRow.classList.add('row')
            
            const image = document.createElement('img')
            image.src = imgPath + result.poster_path

            image.classList.add('thumbnail')

            const title = document.createElement('h3')
            title.innerText = result.original_title

            divCard.appendChild(image)
            divCard.appendChild(title)
            divColumn.appendChild(divCard)
            divRow.appendChild(divColumn)
            movieWrapper.append(divRow)
            // section.appendChild(movieWrapper)
        })
})


// const getMovie = (url) => {
//     fetch(url).then(res => res.json)
//     .then(function(data) {
//     console.log(data.result)
//         data.results.forEach((element) => {
//           const divRow = document.createElement('div')
//           divRow.setAttribute('class', 'card')
//           const divColumn = document.createElement('div')
//           divColumn.setAttribute('class', 'column')
//           divRow.appendChild(divColumn)
//           const divCard = document.createElement('div')
//           divCard.setAttribute('class', 'card')
//           const img = document.createElement('img')
//           img.setAttribute('class', 'thumbnail')
//           const title = document.createElement('h3')
//           title.innerTextContent = `${element.title}`
//           img.src = imgPath + element.postal_path
//           divCard.appendChild(img)
//           divCard.appendChild(title)
//           divColumn.appendChild(divCard)
//           section.appendChild(divRow)
//         })
//     })
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     section.innerHTML = ''

//     const inputItem = input.value

//     if (inputItem) {
//         getMovie(searcApi + inputItem)
//         input.value = ''
//     }
// })
