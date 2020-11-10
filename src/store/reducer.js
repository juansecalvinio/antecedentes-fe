import { combineReducers } from 'redux';
import { antecsReducer } from './reducers/antecsReducer';
import { appReducer } from './reducers/appReducer';
import { personsReducer } from './reducers/personsReducer';

export default combineReducers({
    antecsReducer,
    appReducer,
    personsReducer
});