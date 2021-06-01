// import Home from './../pages/Home/Home';
import Landing from './../pages/Landing/Landing';
import Login from './../pages/Login/Login';
import Register from './../pages/Login/Register';
import Personas from './../pages/Personas/Personas.jsx';
import PersonasNew from '../pages/Personas/New/PersonasNew.jsx';
import PersonasView from '../pages/Personas/View/PersonasView.jsx';
import Antecs from './../pages/Antecs/Antecs.jsx';

export const ApplicationRoutes = {
    Routes: [
        // { path: '/', exact: true, component: Home, key: 'landing' },
        { path: '/', exact: true, component: Landing, protectedRoute: false, key: 'landing' },
        { path: '/app', exact: true, component: Personas, protectedRoute: true, key: 'personas' },
        { path: '/app/personas', exact: true, component: Personas, protectedRoute: true, key: 'personas' },
        { path: '/app/personas-new', exact: true, component: PersonasNew, protectedRoute: true, key: 'personas-new' },
        { path: '/app/personas-view', exact: true, component: PersonasView, protectedRoute: true, key: 'personas-view' },
        { path: '/app/antecs', exact: true, component: Antecs, protectedRoute: true, key: 'antecs' },
        { path: '/app/antecs-view', exact: true, component: Antecs, protectedRoute: true, key: 'antecs-view' },
        { path: '/login', exact: true, component: Login, protectedRoute: false, key: 'login' },
        { path: '/register', exact: true, component: Register, protectedRoute: false, key: 'register' },
    ]
}

export default ApplicationRoutes;