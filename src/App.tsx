import { Routes, Route } from 'react-router-dom';
import First from './pages/First.tsx';
import Second from './pages/Second';

const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<First />} />

        <Route
          path="second"
          element={<Second />}
        />
      </Routes>
    </div>
  );
};

export default App;
