<template>
  <div>
    <!-- <AddBlog></AddBlog> -->
    <ShowBlog></ShowBlog>
  </div>
</template>

<script>

import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';

export default {
  components: {
    "AddBlog": addBlog,
    "ShowBlog": showBlog,
  },
  data() {
    return {
    
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
