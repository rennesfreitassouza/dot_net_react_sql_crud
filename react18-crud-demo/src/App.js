import './App.css';
import Layout from './components/shared/Layout';
import AllSuperVillain from './pages/AllSuperVillain';
import { Routes, Route } from "react-router-dom";
import AddSuperVillain from './pages/AddSuperVillain';
import UpdateSuperVillain from './pages/UpdateSuperVillain';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllSuperVillain></AllSuperVillain>}></Route>
      </Routes>
      <Routes>
        <Route path="/add-supervillain" element={<AddSuperVillain></AddSuperVillain>}></Route>
      </Routes>
      <Routes>
        <Route path="/update-supervillain/:id" element={<UpdateSuperVillain></UpdateSuperVillain>}></Route>
      </Routes>
    </Layout>

  );
}

export default App;
