import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getMeans} from "../http/MeansApi";
import Means from "../components/Means";

const MeansPage = observer(() => {
    const {means} = useContext(Context)

    useEffect(() => {
        try {
            getMeans().then(data => {
                console.log(data)
                means.setMeans(data)
            })
        }catch (e){
            alert(e.response.data.message)
        }

    }, [])


    return (
        <div>
            <Means/>
        </div>
    );
});

export default MeansPage;