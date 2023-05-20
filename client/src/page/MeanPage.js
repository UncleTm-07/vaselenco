import React, {useState, useEffect} from 'react';
import {redirect, useNavigate, useParams} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {getMeansById} from "../http/MeansApi";
import '../сss/Mean.css'
import axios from "axios";
import means from "../components/Means";

const MeanPage = observer(() => {
    const [mean, setMean] = useState({info: []})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getMeansById(id).then(data => setMean(data))
    }, [])


    const edit = () => {
        navigate(`/means/${mean.id}/edit`)
    }

    const remove = () => {
        try {
            axios.delete(`http://localhost:2000/api/means/${mean.id}`, {withCredentials: true}).then((response) => {
                alert('Засіб був успішно видалений');
                navigate('/means')
            }).catch((error) => {
                alert('Помилка при видаленні');
                // Добавить здесь код для обработки ошибки отправки данных
            })
        }catch (e){
            alert(e.error)
        }

    }

    return (
        <div>
            <div className="car-info-container">
                <div className="car-image">
                    <img src={"http://localhost:2000/" + mean.img} alt="Car Image"/>
                </div>
                <div className="car-info">
                    <h2>Марка і модель машини: {mean.brand} - {mean.model}</h2>
                    <ul>
                        <li><strong>Режим передачі:</strong> {mean.transmission_mode}</li>
                        <li><strong>Кількість каналів:</strong> {mean.number_of_channels}</li>
                        <li><strong>Вихідна потужність:</strong> {mean.output_power}</li>
                        <li><strong>Діапазон частот:</strong> {mean.frequency_range}</li>
                        <li><strong>Живлення:</strong> {mean.power_supply}</li>
                        <li><strong>Температура експлуатації:</strong> {mean.operating_temperature}</li>
                        <li><strong>Час безперервної роботи:</strong> {mean.time_of_continuous_work}</li>
                        <li><strong>Вага:</strong> {mean.weight}</li>

                    </ul>
                </div>
            </div>
            <div className="button-container">
                <button onClick={remove}>Видалити</button>
                <button onClick={edit}>Змінити</button>
            </div>
        </div>
    );
});

export default MeanPage;