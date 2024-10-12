const API_key = '8a09c3b85695123d32e395f0f23c416f';
const requests = {
    fetchTrending: `/trending/movie/day?api_key=${API_key}`,
    fetchWeeklyTrending :`/trending/movie/week?api_key=${API_key}`,
    trendingTvShows:`/trending/tv/day?api_key=${API_key}`,
    nowPlayingMovies:`/movie/now_playing?api_key=${API_key}&language=en-US&page=1`,
    topRatedTvShows:`/tv/top_rated?api_key=${API_key}&language=en-US&page=1`,
    horrorMovies:`/discover/movie?api_key=${API_key}&with_genres=27&language=en-US&page=1`


}

export default requests;