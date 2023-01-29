import axios from 'axios';
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { IRootTasks } from '@/interfaces/IRootTasks';
import { IRootStore } from '@/interfaces/IRootStore';

const state: IRootTasks = {
  tasks: [],
};

const actions: ActionTree<IRootTasks, IRootStore> = {
  async takeTasks (ctx) {
    const ref = await axios.get("http://localhost:3000/tasks");
    const tasks = ref.data;
    ctx.commit("updateTasks", tasks);
  },
  async doneTask(ctx, task) {
    await axios.patch(`http://localhost:3000/tasks/${task.id}`, {
      done: !task.done,
    });
    ctx.commit("updateDoneTask", task);
},
};

const mutations: MutationTree<IRootTasks> = {
  updateTasks (state, tasks) {
    state.tasks = tasks;
  },
  updateDoneTask (state, task) {
    const currentIndex = state.tasks.findIndex(item => item.id === task.id);
    state.tasks[currentIndex].done = !task.done;
    console.log(currentIndex);
  }
};

const getters: GetterTree<IRootTasks, IRootStore> = {
  getTasks (state) {
    return state.tasks;
  }
};

export const tasks: Module<IRootTasks, IRootStore> = {
  state,
  actions,
  mutations,
  getters,
}