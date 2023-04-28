import React from 'react';
import NavBar from './NavBar';
import GifListContainer from './GifListContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <GifListContainer />
      </div>
    );
  }
}

export default App;










// import React, { Component } from "react";
// import GifListContainer from './GifListContainer';
// import NavBar from "./NavBar";

// // the App component should render out the GifListContainer component

// // function App() {
// //   return (
// //     <div>
// //       <NavBar color="black" title="Giphy Search" />
// //     </div>
//   )
// // }

// // export default App;


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar color="black" title="Giphy Search" />
//         <GifListContainer />
//       </div>
//     );
//   }
// }

// // class GifListContainer extends Component {
// //   state = {
// //     gifs: []
// //   };

// //   componentDidMount() {
// //     this.performSearch();
// //   }

// //   performSearch = (query = 'cats') => {
// //     // Replace YOUR API KEY with your actual API key from Giphy
// //     fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=YOUR API KEY&rating=g`)
// //       .then(response => response.json())
// //       .then(data => {
// //         const gifs = data.data.slice(0, 3).map(gif => ({
// //           url: gif.images.original.url,
// //           alt: gif.title
// //         }));
// //         this.setState({ gifs });
// //       });
// //   };

// //   handleSearchSubmit = query => {
// //     this.performSearch(query);
// //   };

// //   render() {
// //     return (
// //       <div>
// //         <GifSearch onSearch={this.handleSearchSubmit} />
// //         <GifList gifs={this.state.gifs} />
// //       </div>
// //     );
// //   }
// // }

// class GifSearch extends Component {
//   state = {
//     query: ''
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSearch(this.state.query);
//   };

//   handleChange = event => {
//     this.setState({ query: event.target.value });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Search:
//           <input type="text" value={this.state.query} onChange={this.handleChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// function GifList(props) {
//   return (
//     <ul>
//       {props.gifs.map(gif => (
//         <li key={gif.url}>
//           <img src={gif.url} alt={gif.alt} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default App;