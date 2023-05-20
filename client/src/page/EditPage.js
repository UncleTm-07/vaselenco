import React, {useEffect, useState} from 'react';
import '../сss/Create.css'
import {useParams} from "react-router-dom";
import {getMeansById} from "../http/MeansApi";
import Edit from "../components/Edit";

const EditPage = () => {

    const {id} = useParams()
    useEffect(() => {
        getMeansById(id).then(data => setMean(data))
    }, [])


    const [mean, setMean] = useState()


    return (
        <Edit _mean={mean}/>
    );
};

export default EditPage;