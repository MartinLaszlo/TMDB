import axios from "axios";

const API_KEY = '0ec32c90b738eca693be9e84bb0ba414'
// I know this is less than favourable^, however this is a strictly front-end project.
// .env still does not hide this key unless I do my own backend service. 
const BASE_URL = 'https://api.themoviedb.org/3/'

const fetchMovies = async (setMovies, setGenres, page) => {
    try {
        const response = await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
        setMovies(response.data.results)
        const genreResponse = await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US&page=2`)
        setGenres(genreResponse.data.genres)
    }
    catch (error) { console.log(error) }

}

export default fetchMovies;