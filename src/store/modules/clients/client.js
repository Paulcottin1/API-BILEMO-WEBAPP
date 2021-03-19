import Api from '@/services/index';

const state = {
    requestStatus: '',
    clients: {},
    client: ''
};

const mutations = {
    SET_REQUEST_STATUS: (state, status) => {
        state.requestStatus = status;
    },
    SET_CLIENTS: (state, clients) => {
        state.clients = clients;
    },
    SET_CLIENT: (state, client) => {
        state.client = client;
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
    setClient: async (store, id) => {
        await Api.Client.getClient(id).then((response) => {
            store.commit('SET_REQUEST_STATUS', response.status);
            store.commit('SET_CLIENT', response.data)
        }).catch((error) => {
            store.commit('SET_REQUEST_STATUS', error.response.status);
        })
    },
    editClient: async (store, params) => {
        await Api.Client.editClient(params['id'], params['data']).then((response) => {
            store.commit('SET_REQUEST_STATUS', response.status);
            store.commit('SET_CLIENT', response.data)
        }).catch((error) => {
            store.commit('SET_REQUEST_STATUS', error.response.status);
        })
    }
};

const getters = {
    getRequestStatus: state => {
        return state.requestStatus;
    },
    getClients: state => {
        return state.clients;
    },
    getClient: state => {
        return state.client;
    }
};

export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
