import { createStore } from "vuex";
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '',
});

const store = createStore({
    state: {
        news: [],
        hiddenItemIds: [],
        currentNewsItem: null
    },
    getters: {
        news(state) {
            return state.news.filter(news => !state.hiddenItemIds.includes(news.id));
        }
    },
    mutations: {
        SET_NEWS_ITEMS(state, news) {
            state.news = news;
        },
        HIDE_ITEMS(state, newsID) {
            state.hiddenItemIds.push(newsID);
        },
        SET_CURRENT_NEWS_ITEM(state, item) {
            state.currentNewsItem = item;
        }
    },
    actions: {
        async fetchNews({ commit }) {
            await api.get('news').then(response => response.data).then(({ data }) => {
                commit('SET_NEWS_ITEMS', data);
            }).catch((error) => {
                console.error(error);
            });
        },

        async fetchCurrentNewsItem({ commit }, slug) {
            await api.get(`news/${slug}`).then(response => response.data).then(({ data }) => {
                commit('SET_CURRENT_NEWS_ITEM', data);
            }).catch((error) => {
                console.error(error);
            });
        }
    }
});

export default store;
