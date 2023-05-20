import React, {useContext} from 'react';
import '../сss/NavBar.css'
import {useNavigate} from "react-router-dom";
import {Context} from "../index";
import axios from "axios";

const NavBar = () => {
    const navigate = new useNavigate()
    const {user} = useContext(Context)
    const exit = async () => {
        user.setUser({})
        user.setIsAuth(false)
        axios.post('http://localhost:2000/api/auth/logout', {},{withCredentials: true}).then(res => {
            if (res.status === 200) {
                // Дополнительные действия, например, перенаправление пользователя
                window.location.href = '/login';
            }
        }).catch(error => {
            // Обработка ошибок
            console.error('Ошибка выхода из системы:', error);
        });
    }

    return (
        <div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/means">Засоби зв'язку</a></li>
                    <li className="nav-item"><a href="/means/create">Додати</a></li>
                    <div className="nav-panel">
                        <button className="_button" onClick={exit}>Вийти</button>
                    </div>
                    <div className="nav-panel">
                        <button className="_button" onClick={() => navigate('/login')}>Авторизація</button>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar