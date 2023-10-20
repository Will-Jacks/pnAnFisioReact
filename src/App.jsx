import { useState } from 'react'
import { SearchProvider } from './Context/SearchContext.jsx';
import Header from './Components/Header/Header.jsx';

import RenderBooks from './Components/RenderBooks/RenderBooks.jsx';
import Search from './utils/Search.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchProvider>
        <Header />
        <Search />
        <RenderBooks />
      </SearchProvider>
    </>
  )
}

export default App
