
import React from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=y59aRZSq61XtQnRui3ItLneYjgI1qLvS&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(0,3)
        })
      })
  }

  handleSearchSubmit = (query) => {
    this.fetchGifs(query)
  }

  render() {
    return (
      <div>
        <GifSearch onSearchSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;




// http://api.giphy.com/v1/gifs/search?q=${query}&api_key=YOUR_API_KEY&rating=g










// import React from "react";
// import { useEffect,useState } from "react";
// import React, { Component } from "react";
 




// function  GifListContainer() {
//   state = {
//     gifs: []
//   };

//   componentDidMount() ;{
//     this.performSearch();
//   }

//   performSearch = (query = 'cats') => {
//     // Replace YOUR API KEY with your actual API key from Giphy
//     // fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=YOUR API KEY&rating=g`)
//     fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=y59aRZSq61XtQnRui3ItLneYjgI1qLvS&rating=g`)
//       .then(response => response.json())
//       .then(data => {
//         const gifs = data.data.slice(0, 3).map(gif => ({
//           url: gif.images.original.url,
//           alt: gif.title
//         }));
//         this.setState({ gifs });
//       });
//   };

//   handleSearchSubmit = query => {
//     this.performSearch(query);
//   };

//   render() ;{
//     return (
//       <div>
//         <GifSearch onSearch={this.handleSearchSubmit} />
//         <GifList gifs={this.state.gifs} />
//       </div>
//     );
//   }
// }


// export default  GifListContainer;