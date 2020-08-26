import Axios from 'axios';

export class PersonsServices {
    getPersons() {
        return Axios.get(`/persons`);
    };
    getPersonById(id){
        return Axios.get(`/persons/${id}`);
    };
}