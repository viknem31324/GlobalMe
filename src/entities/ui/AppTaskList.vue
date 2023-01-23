<template>
  <div class="task-list">
    <ul class="task-list__list">
      <li v-for="task in taskList" :key="task.title"></li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Task } from '../../types/task';

export default Vue.extend({
  data() {
    return {
      taskList: [] as Array<Task>,
    };
  },

  created () {

  },

});
</script>
<style scoped lang="scss">
.task-list {

}
</style>