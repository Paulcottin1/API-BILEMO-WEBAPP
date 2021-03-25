import authHeader from './auth-header';
import Api from '@/api/axiosConfig';


class ClientService {
    getClients() {
        return Api().get('clients', { headers: authHeader() });
    }
    getClient(id) {
        return Api().get('clients/' + id, { headers: authHeader()} )
    }
    deleteClient(id) {
        return Api().delete('clients/' + id, { headers: authHeader()} )
    }
    editClient(id, data) {
        return Api().put('clients/' + id, JSON.stringify(data),{ headers: authHeader()} )
    }
    addClient(data) {
        return Api().post('clients', JSON.stringify(data),{ headers: authHeader()} )
    }
}

export default new ClientService();
