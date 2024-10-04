import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Cliente } from './pages/cliente';
import { ProtectedRoute } from './components/ProtecaoRota';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Routes>
        {/**Rotas públicas */}
        <Route 
          path="/" 
          element={<Login />} 
        />

        {/**Rotas protegidas */}
        <Route 
          path="/cliente" 
          element={
            <ProtectedRoute>
              <Cliente />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App
