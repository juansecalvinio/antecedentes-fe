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
    updatePerson(id, data) {
        return Axios.put(`/persons/${id}`, data);
    }
    deletePerson(id) {
        return Axios.delete(`/persons/${id}`);
    }
}