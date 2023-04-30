import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import View from './components/View';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<View />} />
            <Route path="/post" element={<Post />} />
            <Route path='/edit/:id' element={<Edit />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
