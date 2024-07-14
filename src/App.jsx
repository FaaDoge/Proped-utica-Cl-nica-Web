import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Glosario from './pages/Glosario';
import Nomenclatura from './pages/Nomenclatura';
import Enfermedades from './pages/Enfermedades';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glosario" element={<Glosario />} />
          <Route path="/nomenclatura" element={<Nomenclatura />} />
          <Route path="/enfermedades" element={<Enfermedades />} />
        </Routes>
      </Content>
      <Footer />
    </AppContainer>
  );
}

export default App;
