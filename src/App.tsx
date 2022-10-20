import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.less';

import { Layout } from 'antd';
import HeaderApp from './components/header/HeaderApp';
import Home from './pages/home/Home';
import FormDemo from './pages/form/Form';

const { Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <HeaderApp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormDemo />} />
        </Routes>
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
}

export default App;
