
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage/MainPage';
import TestComponent from './TestComponent';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact
          element={<MainPage />}
        />
        <Route path="/book/:id" 
          element={<TestComponent/>}
        />
      </Routes>
    </div>
  );
}

export default App;
