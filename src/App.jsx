import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Nav from './assets/common/nav-foots/Nav'
import Footer from './assets/common/nav-foots/footer'
import Routing from './routing/routing'







function App() {
  

  return (
    <>
       <BrowserRouter>
            <Nav />
              <Routing />
            <Footer />
       </BrowserRouter>
    </>
  )
}

export default App
