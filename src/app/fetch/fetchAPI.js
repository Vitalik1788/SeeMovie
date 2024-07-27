import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '41b8f9437bf3f899281f8a3f9bdc0891';

const getTrandingMovies = async () => {
  const response = await axios.get(
    `trending/movie/day?language=uk-UK&api_key=${API_KEY}`
  );
  return response.data;
}


export { getTrandingMovies };
