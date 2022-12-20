import '../src/styles/index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Routes>
                        <Route path="/" element={ <MainPage />} />
                        <Route path="/user" element={<UserPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;