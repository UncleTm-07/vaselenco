import axios from "axios";

export const getMeans = async () => {
    const {data} = await axios.get('http://localhost:2000/api/means', {withCredentials: true})
    return data
}

export const getMeansById = async (id) => {
    const {data} = await  axios.get(`http://localhost:2000/api/means/${id}`, {withCredentials: true})
    return data
}
