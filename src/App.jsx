import { Routes,Route,Navigate} from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './../src/pages/Home';
import Blog from './../src/pages/Blog'
import Contactus from './../src/pages/Contactus'
import PageRenderer from './../src/page-renderer'
import Webs from'./../src/pages/Webs'
import Login from'./../src/pages/Login'
import Footer from './components/footer'
import NewsDetail from './pages/NewsDetail';


function App(){
  const user={
    firstName: 'Reversa',
    lastName:'nexo'
  }
  return(
    <>
    <div>
    <Navigation user={user} /> 
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Home />
            </div>
          }
        />
        <Route
          path="/:page"
          element={
            <div className="App">
              <PageRenderer />
            </div>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/webs" element={<Webs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news/:id" element={<NewsDetail />} />
          


        <Route path="*" element={<div>404</div>} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;