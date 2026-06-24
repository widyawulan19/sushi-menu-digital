
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Welcome from './pages/Welcome';
import Category from './pages/Category';
import CategoryDetail from './pages/CategoryDetail';
import Reccomendation from './pages/Recommendation';
import AboutPage from './pages/AboutPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      {/* <Navbar /> */}

      <Routes>

        <Route path='/' element={<Welcome />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:name' element={<CategoryDetail />} />
        <Route path='/recommendation' element={<Reccomendation />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App
