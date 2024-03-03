<template>
    <div id="show-blogs">
        <h1>All the Blogs</h1>
        <input type="text" placeholder="Search Blog" v-model="search" />
        <div v-for="blog in filterBlogs" class="single-blog">
            <h3>{{ blog.title | toUpperCase }}</h3>
            <article>{{ blog.body | snippet }}</article>
        </div>
    </div>
</template>
  
<script>

import searchMixin from '../mixins/searchMixin'

export default {
    data() {
        return {
            blogs: [],
            search: ""

        }
    },
    methods: {

    },
    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function (data) {
            this.blogs = data.body.slice(0, 10)
        })
    },

    computed: {
        
    },
    filters: {
        toUpperCase(value){
            return value.toUpperCase()
        }
    },
    mixins :[searchMixin]
}
</script>
  
<style scoped>
#show-blogs {
    max-width: 800px;
    margin: 0px auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
  