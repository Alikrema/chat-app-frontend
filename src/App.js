import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import ChatPage from "./pages/chat";
import "./App.css";
import ProtectedRoute from "./shared/protected-route";
import AuthStateListener from "./state/auth-listener";
import routes from "./shared/constants/routes";

const { login, home } = routes;

const AppContent = () => {
  return (
    <div className="appContainer">
      <div>
        <Routes>
          <Route path={login} element={<LoginPage />} />
          <Route
            path={home}
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthStateListener>
          <AppContent />
        </AuthStateListener>
      </BrowserRouter>
    </div>
  );
}

export default App;
