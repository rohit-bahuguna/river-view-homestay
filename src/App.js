import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/mainPages/Home';
import Login from './Components/user/LogIn';
import SignUp from './Components/user/SignUp';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
