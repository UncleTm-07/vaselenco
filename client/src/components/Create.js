import React, {useState} from 'react';
import '../сss/Create.css'
import axios from "axios";

const Create = () => {
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [transmission_mode, setTransmission_mode] = useState('')
    const [number_of_channels, setNumber_of_channels] = useState(0)
    const [output_power, setOutput_power] = useState('')
    const [frequency_range, setFrequency_range] = useState('')
    const [power_supply, setPower_supply] = useState('')
    const [operating_temperature, setOperating_temperature] = useState('')
    const [time_of_continuous_work, setTime_of_continuous_work] = useState('')
    const [weight, setWeight] = useState('')
    const [file, setFile] = useState()

    const create = () => {
        const formData = new FormData()
        formData.append('brand', brand)
        formData.append('model', model)
        formData.append('transmission_mode', transmission_mode)
        formData.append('number_of_channels', number_of_channels)
        formData.append('output_power', output_power)
        formData.append('frequency_range', frequency_range)
        formData.append('power_supply', power_supply)
        formData.append('operating_temperature', operating_temperature)
        formData.append('time_of_continuous_work', time_of_continuous_work)
        formData.append('weight', weight)
        formData.append('img', file)
        axios.post('http://localhost:2000/api/means', formData, {withCredentials: true}).then((response) => {
            alert('Засіб був успішно створенний');
            // Добавить здесь код для обработки успешной отправки данных
        }).catch((error) => {
            alert('Помилка при створені');
            // Добавить здесь код для обработки ошибки отправки данных
        })
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }


    return (
        <div className="contain">
            <form>
                <div className="form-group">
                    <label htmlFor="brand">Бренд:</label>
                    <input type="text" id="brand" name="brand" value={brand}
                           onChange={(event) => setBrand(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="model">Модель:</label>
                    <input type="text" id="model" name="model" value={model}
                           onChange={(event) => setModel(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="transmission_mode">Режим передачі:</label>
                    <input type="text" id="transmission_mode" name="transmission_mode" value={transmission_mode}
                           onChange={(event) => setTransmission_mode(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="number_of_channels">Кількість каналів:</label>
                    <input type="number" id="number_of_channels" name="number_of_channels" value={number_of_channels}
                           onChange={(event) => setNumber_of_channels(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="output_power">Вихідна потужність:</label>
                    <input type="text" id="output_power" name="output_power" value={output_power}
                           onChange={(event) => setOutput_power(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="frequency_range">Діапазон частот:</label>
                    <input type="text" id="frequency_range" name="frequency_range" value={frequency_range}
                           onChange={(event) => setFrequency_range(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="power_supply">Живлення:</label>
                    <input type="text" id="power_supply" name="power_supply" value={power_supply}
                           onChange={(event) => setPower_supply(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="operating_temperature">Температура експлуатації:</label>
                    <input type="text" id="operating_temperature" name="operating_temperature" value={operating_temperature}
                           onChange={(event) => setOperating_temperature(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="time_of_continuous_work">Час безперервної роботи:</label>
                    <input type="text" id="time_of_continuous_work" name="time_of_continuous_work" value={time_of_continuous_work}
                           onChange={(event) => setTime_of_continuous_work(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Вага:</label>
                    <input type="text" id="weight" name="weight" value={weight}
                           onChange={(event) => setWeight(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="file">Зображення:</label>
                    <input type="file" id="file" name="file" onChange={selectFile}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-btn" onClick={create}>Створити засіб</button>
                </div>
            </form>
        </div>
    );
};

export default Create;