import React, {useEffect, useState} from 'react';
import axios from "axios";

const Edit = ({_mean}) => {
    const [mean, setMean] = useState(_mean)

    useEffect(() => {
      setMean(_mean)
    }, [_mean])

    const edit = () => {
        try {
            axios.put(`http://localhost:2000/api/means/${_mean.id}`, mean, {withCredentials: true}).then((response) => {
                alert('Засіб був успішно змінений');
                // Добавить здесь код для обработки успешной отправки данных
            }).catch((error) => {
                alert('Помилка при редагуванні!');
                // Добавить здесь код для обработки ошибки отправки данных
            })
        }catch (e){
            alert(e)
        }

    }

    const selectFile = e => {
        setMean({...mean, "img": e.target.files[0]})
    }

    return (
        <div className="contain">
            <form>
                <div className="form-group">
                    <label htmlFor="brand">Бренд:</label>
                    <input type="text" id="brand" name="brand" value={mean?.brand}
                          onChange={event => {
                              setMean({...mean, "brand": event.target.value})
                          }} />
                </div>
                <div className="form-group">
                    <label htmlFor="model">Модель:</label>
                    <input type="text" id="model" name="model" value={mean?.model}
                           onChange={event => {
                               setMean({...mean, "model": event.target.value})
                           }} />
                </div>
                <div className="form-group">
                    <label htmlFor="transmission_mode">Режим передачі:</label>
                    <input type="text" id="transmission_mode" name="transmission_mode" value={mean?.transmission_mode}
                           onChange={event => {
                               setMean({...mean, "transmission_mode": event.target.value})
                           }} />
                </div>
                <div className="form-group">
                    <label htmlFor="number_of_channels">Кількість каналів:</label>
                    <input type="number" id="number_of_channels" name="number_of_channels" value={mean?.number_of_channels}
                           onChange={event => {
                               setMean({...mean, "number_of_channels": event.target.value})
                           }} />
                </div>
                <div className="form-group">
                    <label htmlFor="output_power">Вихідна потужність:</label>
                    <input type="text" id="output_power" name="output_power" value={mean?.output_power}
                           onChange={event => {
                               setMean({...mean, "output_power": event.target.value})
                           }} />
                </div>
                <div className="form-group">
                    <label htmlFor="frequency_range">Діапазон частот:</label>
                    <input type="text" id="frequency_range" name="frequency_range" value={mean?.frequency_range}
                           onChange={event => {
                               setMean({...mean, "frequency_range": event.target.value})
                           }} />
                </div>
                <div className="form-group">
                    <label htmlFor="power_supply">Живлення:</label>
                    <input type="text" id="power_supply" name="power_supply" value={mean?.power_supply}
                           onChange={event => {
                               setMean({...mean, "power_supply": event.target.value})
                           }} />
                </div>
                <div className="form-group">
                    <label htmlFor="operating_temperature">Температура експлуатації:</label>
                    <input type="text" id="operating_temperature" name="operating_temperature" value={mean?.operating_temperature}
                           onChange={event => {
                               setMean({...mean, "operating_temperature": event.target.value})
                           }} />
                </div>
                <div className="form-group">
                    <label htmlFor="time_of_continuous_work">Час безперервної роботи:</label>
                    <input type="text" id="time_of_continuous_work" name="time_of_continuous_work" value={mean?.time_of_continuous_work}
                           onChange={event => {
                               setMean({...mean, "time_of_continuous_work": event.target.value})
                           }} />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Вага:</label>
                    <input type="text" id="weight" name="weight" value={mean?.weight}
                           onChange={event => {
                               setMean({...mean, "weight": event.target.value})
                           }} />
                </div>
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="file">Зображення:</label>*/}
                {/*    <input type="file" id="file" name="file"  onChange={selectFile}/>*/}
                {/*</div>*/}
                <div className="form-group">
                    <button type="submit" className="submit-btn" onClick={edit}>Змінити засіб</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;