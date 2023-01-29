<template>
  <div class="task-list">
    <ul class="task-list__list">
      <li v-for="task in getTasks" :key="task.title">
        <AppTask  :task="task" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Task } from '@/types/task';
import AppTask from '@/shared/ui/AppTask.vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'AppTaskList',

  data() {
    return {
      taskList: [] as Array<Task>,
    };
  },

  methods: {
    ...mapActions(['takeTasks']),
  },

  computed: {
    ...mapGetters(['getTasks']),
  },

  created () {
    this.takeTasks();
  },

  components: {
    AppTask,
  }

});
</script>
<style scoped lang="scss">
.task-list {
  &__list {
    list-style-type: none;
  }

}
</style>