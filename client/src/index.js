import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import MeansStore from "./store/MeansStore";
import UserStore from "./store/UserStore";
import NavBar from "./components/NavBar";


export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        means: new MeansStore(),
        user: new UserStore(),
    }}>
        <React.StrictMode>
            <BrowserRouter>
                <NavBar/>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Context.Provider>
);
