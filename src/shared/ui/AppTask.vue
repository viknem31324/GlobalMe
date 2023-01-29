<template>
  <div class="task">
    <h2 class="task__title">{{ task.title }}</h2>
    <p class="task__descr">{{ task.description }}</p>
    <button class="task__btn" :class="getCheckedBtn" @click="doneTask(task)">Done</button>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import { mapActions } from 'vuex';
import { Task } from '@/types/task';

export default Vue.extend({
  name: 'AppTask',

  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
  },

  methods: {
    ...mapActions(['doneTask']),
  },

  computed: {
    getCheckedBtn (): string {
      return this.task.done ? 'task__btn--checked' : 'task__btn--unchecked';
    },
  },
})
</script>
<style scoped lang="scss">
.task {
  display: flex;
  justify-content: space-between;
  width: 100%;

  &__btn {
    &--checked {
      background: grey;
    }
    &--unchecked {
      background: greenyellow;
    }
  }
}
</style>