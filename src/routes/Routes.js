import Home from './../pages/Home/Home';
import Landing from './../pages/Landing/Landing';
import Personas from './../pages/Personas/Personas.jsx';
import PersonasNew from './../pages/Personas/New/PersonasNew.jsx';
import PersonasView from './../pages/Personas/View/PersonasView.jsx';
import Antecs from './../pages/Antecs/Antecs.jsx';

export const ApplicationRoutes = {
    Routes: [
        { path: '/', exact: true, component: Home, key: 'landing' },
        // { path: '/', exact: true, component: Landing, key: 'landing' },
        // { path: '/login', exact: true, component: Login, key: 'login' },
        { path: '/app', exact: true, component: Home, key: 'home' },
        { path: '/app/personas', exact: true, component: Personas, key: 'personas' },
        { path: '/app/personas-new', exact: true, component: PersonasNew, key: 'personas-new' },
        { path: '/app/personas-view', exact: true, component: PersonasView, key: 'personas-view' },
        { path: '/app/antecs', exact: true, component: Antecs, key: 'antecs' },
        { path: '/app/antecs-view', exact: true, component: Antecs, key: 'antecs-view' },
    ]
}

export default ApplicationRoutes;