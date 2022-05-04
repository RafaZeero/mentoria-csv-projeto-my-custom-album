// const fetchMovies = movie => {
//   fetch(search_url + movie)
//     .then(res => res.json())
//     .then(data => setData(data.results))
//     .then(data => console.log(data.results))
//     .catch(err => console.log(err))
// }

// const fetchData = (url, param, setter) => {
//   fetch(url + param)
//     .then(res => res.json())
//     .then(setter)
//     .catch(err => console.log(err))
// }

// const fetchMoviesDetails = movie => {
//   fetchData(
//     search_url + process.env.REACT_APP_MOVIES_API_KEY + '&query=',
//     movie,
//     data => setData(data.results)
//   )
// }

// const searching = () => {
//   fetchMoviesDetails(searchParams)
// }
