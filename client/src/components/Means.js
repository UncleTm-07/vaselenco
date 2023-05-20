import React, {useContext} from 'react';
import '../сss/Means.css'
import {useNavigate} from "react-router-dom"
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Means = observer(() => {
    const {means} = useContext(Context)
    const navigate = useNavigate()
    return (
        <div className="container">
            {means.means.map(m =>
                <div className="card" key={m.id} onClick={() => navigate('/means/' + m.id)}>
                    <img
                        src={"http://localhost:2000/" + m.img}
                        alt=""/>
                    <h3>{m.brand} {m.model}</h3>
                </div>
            )}
        </div>
    );
});


export default Means;