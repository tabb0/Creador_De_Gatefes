import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main CSS
import './index.css';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Routes
import MainForm from './pages/mainFormPage';
import ImageDisplay from './pages/imageDisplay';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<MainForm />} />
				<Route path="cedula" element={<ImageDisplay />} />
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
