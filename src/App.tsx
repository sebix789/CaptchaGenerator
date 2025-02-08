import { Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen/HomeScreen';
import GeneratingScreen from './GeneratingScreen/GeneratingScreen';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/generatingScreen" element={<GeneratingScreen />} />
      </Routes>
  );
}

export default App;
