import { Route, Routes } from 'react-router-dom';
import { ItemDetails } from './pages/ItemDetails';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category/:id" element={<ItemDetails />} />
      <Route path="/characters" element={<Characters />} />
    </Routes>
  );
}

export default App;
