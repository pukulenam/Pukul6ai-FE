import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import AddProject from './pages/AddProject';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import ProtectingRouteAdmin from './routes/protectingRouteAdmin';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/project" element={<Project />} />
              <Route path="/project/add" element={
                <ProtectingRouteAdmin>
                  <AddProject />
                </ProtectingRouteAdmin>
              } />

              <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
