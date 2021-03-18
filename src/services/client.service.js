import authHeader from './auth-header';
import Api from '@/api/axiosConfig'


class ClientService {
    getClients() {
        return Api().get('clients', { headers: authHeader() });
    }
}

export default new ClientService();
