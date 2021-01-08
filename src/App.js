import logo from './logo.svg';
import './App.css';
import Kursus from "./state/state";
import Materi from './props/Prop';
import './props/styel.css';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="wraperapp">
        <Header/>
        <Kursus />
        <p>contoh state</p>
        <hr />
        <Materi des="belajar seo" harga="120000" />
        <Materi des="belajar google adword" harga="400000" />
        <Materi des="belajar React js" harga="50000" />
      </div>
    </div>
  );
}

export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       nama : "Angga Alfiansah",
//       kelas : 'ReactJS'
//     }
//   }
//   Update = () => {
//     this.setState({nama : "Udin Gamboet"})
//   }
//   render() {
//     return (
//       <div className="test">
//         <h1>Halo {this.state.nama} kelas {this.state.kelas}</h1>
        
//        <button onClick={this.Update}>Update</button>
//       </div>
//     );
//   }
// }

// export default App;
