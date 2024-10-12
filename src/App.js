
import './App.css';
import Banner from './Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './request'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
    
      
     <div style={{backgroundColor:'#111'}}>
     <Row title='NETFLIX ORIGINALS' fetchUrl ={requests.fetchTrending} isLargeRow/>
      <Row title='Trending now' fetchUrl ={requests.fetchWeeklyTrending}/>
      <Row title='Trending TV Shows' fetchUrl ={requests.trendingTvShows}/>
      <Row title='Now playing Movies' fetchUrl ={requests.nowPlayingMovies}/>
      <Row title='Top rated tv Shows' fetchUrl ={requests.topRatedTvShows}/>
      <Row title='Horror Movies' fetchUrl ={requests.horrorMovies}/>
     </div>
     
      </div>

  
  );
}

export default App;
