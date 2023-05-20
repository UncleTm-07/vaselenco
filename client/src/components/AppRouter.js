import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {routes} from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map( x =>
                <Route key={x.path} path={x.path} element={x.Component} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;