import Axios from 'axios';

export class PersonsServices {
    getPersons() {
        return Axios.get(`/persons`);
    };
    getPersonById(id){
        return Axios.get(`/persons/id/${id}`);
    };
    getPersonByCuit(cuit){
        return Axios.get(`/persons/cuit/${cuit}`);
    };
    registerPerson(data) {
        return Axios.post('/persons', data);
    }
    registerPersonAntecs(person, antec) {
        const data = {
            "personId": person,
            "antecId": antec
        }
        return Axios.post('/persons-antecs', data);
    }
}