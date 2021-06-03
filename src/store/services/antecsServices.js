import Axios from 'axios';

export class AntecsServices {
    getAntecs() {
        return Axios.get(`/antecs`);
    };
    getAntecById(id) {
        return Axios.get(`/antecs/${id}`);
    };
    getAntecsByIds(ids) {
        return Axios.post(`/antecs/ids`, { ids });
    }
}