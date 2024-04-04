import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import ChatPage from "./pages/chat";
import ProtectedRoute from "./shared/protected-route";
import AuthStateListener from "./shared/auth-listener";
import routes from "./shared/constants/routes";
import "./App.css";

const { login, home } = routes;

const AppContent = () => {
  return (
    <div className="appContainer">
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
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthStateListener>
        <AppContent />
      </AuthStateListener>
    </BrowserRouter>
  );
}

export default App;
