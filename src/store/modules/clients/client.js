import Api from '@/services/index';

const state = {
    requestStatus: null,
    clients: {}
};

const mutations = {
    SET_REQUEST_STATUS: (state, status) => {
        state.requestStatus = status;
    },
    SET_CLIENTS: (state, clients) => {
        state.clients = clients
    }
};

const actions = {
    setClients: async (store) => {
        await Api.Client.getClients().then((response) => {
            store.commit('SET_REQUEST_STATUS', response.status);
            store.commit('SET_CLIENTS', response.data['hydra:member'])
        }).catch((error) => {
            store.commit('SET_REQUEST_STATUS', error.response.status);
        })
    },
};

const getters = {
    getRequestStatus: state => {
        return state.requestStatus;
    },
    getClients: state => {
        return state.clients;
    },
};

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
