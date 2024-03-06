<template>
    <div id="show-blogs">
        <h1>All the Blogs</h1>
        <input type="text" placeholder="Search Blog" v-model="search" />
        <div v-for="blog in filterBlogs" class="single-blog">
            <router-link :to="'/blog/'+blog.id"><h3>{{ blog.title | toUpperCase }}</h3></router-link>
            <article>{{ blog.content }}</article>
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
        this.$http.get('https://learnvue-d95ca-default-rtdb.firebaseio.com//posts.json').then(function(data){
            return data.json()
        }).then(function(data){
            var blogsArray = [];
            for (let key in data){
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
            //console.log(this.blogs);
        });
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
  