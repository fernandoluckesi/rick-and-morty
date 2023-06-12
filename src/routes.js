import { Route, Routes } from 'react-router-dom';
import { ItemDetails } from './pages/ItemDetails';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { Locations } from './pages/Locations';
import { Episodes } from './pages/Episodes';
import { About } from './pages/About';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category/:id" element={<ItemDetails />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
