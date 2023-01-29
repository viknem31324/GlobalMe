<template>
  <div class="home">
    <AppTaskList />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import AppTaskList from '@/entities/ui/AppTaskList.vue';

export default Vue.extend({
  name: 'AppHome',
  components: {
    AppTaskList,
  }
});
</script>
<style scoped lang="scss"></style>