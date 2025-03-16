import { Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen/HomeScreen';
import GeneratingScreen from 'GeneratingScreen/GeneratingScreen';
import CaptchaPhotos from 'CaptchaPhotos/CaptchaPhotos';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/generatingScreen" element={<GeneratingScreen />} />
        <Route path="/captchaPhotos" element={<CaptchaPhotos />} />
      </Routes>
  );
}

export default App;
