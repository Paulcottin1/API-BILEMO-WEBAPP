import Api from '@/api/axiosConfig'

class AuthService {
    login(user) {
        return Api()
            .post('login_check', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data.token));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService();
