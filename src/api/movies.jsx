const fetchMovies = movie => {
  fetch(search_url + movie)
    .then(res => res.json())
    .then(data => setData(data.results))
    .then(data => console.log(data.results))
    .catch(err => console.log(err))
}
