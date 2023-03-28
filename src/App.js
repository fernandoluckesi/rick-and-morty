import { Route, Routes } from 'react-router-dom';
import { ItemDetails } from './pages/ItemDetails';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category/:id" element={<ItemDetails />} />
    </Routes>
  );
}

export default App;
