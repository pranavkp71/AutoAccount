import React, {useState} from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function Appp() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      {showRegister ? <RegisterPage /> : <LoginPage />}
      <button onClick={() => setShowRegister(!showRegister)} style={{marginTop: '1rem'}}>
        {showRegister ? 'Go to Login': 'Go to Register'}
      </button>
    </div>
  );
}

export default Appp;