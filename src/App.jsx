import './App.css'
import Homepage from './components/Homepage'
import Homepage2 from './components/Homepage2'
import Homepage3 from './components/Homepage3'
import Homepage4 from './components/Homepage4'
import Homepage5 from './components/Homepage5'
import Homepage6 from './components/Homepage6'
import Homepage7 from './components/Homepage7'
import Homepage8 from './components/Homepage8'
import Homepage9 from './components/Homepage9'
import Homepage10 from './components/Homepage10'
import Homepage11 from './components/Homepage11'
import Homepage12 from './components/Homepage12'
import Homepage13 from './components/Homepage13'
import Homepage14 from './components/Homepage14'
import List from './components/Lists'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage2" element={<Homepage2 />} />
        <Route path="/homepage3" element={<Homepage3 />} />
        <Route path="/homepage4" element={<Homepage4 />} />
        <Route path="/homepage5" element={<Homepage5 />} />
        <Route path="/homepage6" element={<Homepage6 />} />
        <Route path="/homepage7" element={<Homepage7 />} />
        <Route path="/homepage8" element={<Homepage8 />} />
        <Route path="/homepage9" element={<Homepage9 />} />
        <Route path="/homepage10" element={<Homepage10 />} />
        <Route path="/homepage11" element={<Homepage11 />} />
        <Route path="/homepage12" element={<Homepage12 />} />
        <Route path="/homepage13" element={<Homepage13 />} />
        <Route path="/homepage14" element={<Homepage14 />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
