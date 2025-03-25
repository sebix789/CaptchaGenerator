import { Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import GeneratingScreen from "GeneratingScreen/GeneratingScreen";
import GenerateCodeCaptcha from "GenerateCodeCaptcha/GenerateCodeCaptcha";
import CaptchaCode from "CaptchaCode/CaptchaCode";
import CaptchaCodeEvaluated from "CaptchaCodeEvaluated/CaptchaCodeEvaluated";
import CaptchaCodeError from "CaptchaCodeError/CaptchaCodeError";
import { CaptchaProvider } from "./CaptchaContext/CatpchaContext";

function App() {
  return (
    <CaptchaProvider>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/generatingScreen" element={<GeneratingScreen />} />
        <Route path="/generatingCode" element={<GenerateCodeCaptcha />} />
        <Route path="/generatingCode/captchaCode" element={<CaptchaCode />} />
        <Route
          path="/generatingCode/captchaCode/correctCaptcha"
          element={<CaptchaCodeEvaluated />}
        />
        <Route
          path="/generatingCode/captchaCode/incorrectCaptcha"
          element={<CaptchaCodeError />}
        />
      </Routes>
    </CaptchaProvider>
  );
}

export default App;
