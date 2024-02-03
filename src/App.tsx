import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CallbackPage from './pages/CallbackPage';
import HomePage from './pages/HomePage'; // 仮のホームページコンポーネント
import DisplayPage from './pages/DisplayPage';

const App: React.FC = () => {
    return (
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/callback" element={<CallbackPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/display" element={<DisplayPage />} />
                {/* 他のルート */}
            </Routes>
    );
};

export default App;
