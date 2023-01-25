import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Products from './Components/Products'
import { Routes, Route} from 'react-router-dom'
import Resources from './Components/Resources'
import KnowledgeBase from './Components/KnowledgeBase'
function App() {
  return (
    <Wrap>
        <Header/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/knowledge-base' element = {<KnowledgeBase/>}/>
        </Routes>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`
