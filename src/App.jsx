import './App.css'
import {BrowserRouter, Routes, Route, NavLink} from "react-router";
import {Home} from './components/Home.js'
import {About} from './components/About.js'
import {Contact} from './components/Contact.js'

const App = () => (

    <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li><NavLink className="navLink" to="/">Головна сторінка</NavLink></li>
                    <li><NavLink className="navLink" to="/about">Сторінка про нас</NavLink></li>
                    <li><NavLink className="navLink" to="/contact">Контактна сторінка</NavLink></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);


export default App;
