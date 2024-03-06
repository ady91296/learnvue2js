<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

// import addBlog from './components/addBlog.vue';
// import showBlog from './components/showBlog.vue';
import header from './components/appHeader.vue';

export default {
  components: {
    // "AddBlog": addBlog,
    // "ShowBlog": showBlog,
    "app-header": header
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
