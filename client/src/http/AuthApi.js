import axios from "axios";

export const login = async (username, password) => {
    const {data} = await axios.post('http://localhost:2000/api/auth/login', {username, password}, {withCredentials: true})
    return data
}

export const registration = async (username, password) => {
    const {data} = await axios.post('http://localhost:2000/api/auth/registration', {username, password}, {withCredentials: true})
    return data
}

// export const logout = async () => {
//     const {data} = await axios.post('http://localhost:2000/api/auth/logout', {},{withCredentials: true})
//     return data
// }
