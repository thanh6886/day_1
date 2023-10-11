import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact" element={<Contact />} />
        <Route path="nopage" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
