import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { tasks } from './modules/tasks';
import { IRootStore } from '@/interfaces/IRootStore';

Vue.use(Vuex);

const store: StoreOptions<IRootStore> = {
  state: {
    day: {
      tasks: [],
    },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tasks,
  }
}
export default new Vuex.Store<IRootStore>(store);
