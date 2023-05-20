import MeansPage from "./page/MeansPage";
import Create from "./components/Create";
import MeanPage from "./page/MeanPage";
import EditPage from "./page/EditPage";
import AuthPage from "./page/AuthPage";

export const routes = [
    {
        path: "/means",
        Component: <MeansPage/>
    },
    {
        path: "/means/:id",
        Component: <MeanPage/>
    },
    {
        path: "/means/create",
        Component: <Create/>
    },
    {
        path: "/means/:id/edit",
        Component: <EditPage/>
    },
    {
        path: "/login",
        Component: <AuthPage/>
    },
    {
        path: "/registration",
        Component: <AuthPage/>
    },
]