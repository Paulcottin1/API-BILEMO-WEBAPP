import authHeader from './auth-header';
import Api from '@/api/axiosConfig'


class MobileService {
    getMobiles() {
        return Api().get('mobiles', { headers: authHeader() });
    }
}

export default new MobileService();
