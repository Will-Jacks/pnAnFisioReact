import Books from './Components/Books/Books.jsx';
import Home from './Components/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/books' element={<Books />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
