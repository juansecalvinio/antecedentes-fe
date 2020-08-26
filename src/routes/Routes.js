import Home from './../pages/Home/Home';
import Personas from './../pages/Personas/Personas.jsx';
import PersonasNew from './../pages/Personas/New/PersonasNew.jsx';
import PersonasView from './../pages/Personas/View/PersonasView.jsx';
import Antecs from './../pages/Antecs/Antecs.jsx';

export const ApplicationRoutes = {
    Routes: [
        { path: '/', exact: true, component: Home, key: 'home' },
        { path: '/inicio', exact: true, component: Home, key: 'home' },
        { path: '/personas', exact: true, component: Personas, key: 'personas' },
        { path: '/personas/new', exact: true, component: PersonasNew, key: 'personas-new' },
        { path: '/personas/view', exact: true, component: PersonasView, key: 'personas-view' },
        { path: '/antecs', exact: true, component: Antecs, key: 'antecs' },
        { path: '/antecs/view', exact: true, component: Antecs, key: 'antecs-view' },
    ]
}

export default ApplicationRoutes;