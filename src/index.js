import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
//API_KEY for YouTube
const API_KEY = 'AIzaSyDCjRFit0KSX7I9quuLhTeoOnjpPab3DmA';
//Create new component
class App extends Component
{
  constructor(props)
  {
     super(props);

     this.state = {videos: []}

     YTSearch({key: API_KEY, term: 'Clash of Clans'}, (videos) =>
     {
     this.setState({ videos });
     });
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Add component to the DOM
ReactDom.render(<App />, document.querySelector('.container'));
