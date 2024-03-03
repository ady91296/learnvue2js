<template>
    <div id="add-blog">
        <h2>Add a Blog</h2>
        <form v-if="!submitted">
            <label>Blog Title</label>
            <input type="text" v-model.lazy="blog.title" required>
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkbox">
                <label>Beginner</label>
                <input type="checkbox" value="beginner" v-model="blog.categories" />
                <label>Intermediate</label>
                <input type="checkbox" value="intermediate" v-model="blog.categories" />
                <label>Expert</label>
                <input type="checkbox" value="expert" v-model="blog.categories" />
                <label>Hands-on</label>
                <input type="checkbox" value="hands-on" v-model="blog.categories" />
            </div>
            <label>Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{ author }}</option>
            </select>
            <button @click.prevent="post">Submit</button>
        </form>
        <div id="preview">
            <div v-if="submitted">Thanks for submitting the blog</div>
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog Content:</p>
            <p>{{ blog.content }}</p>
            <p>Categories</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Author:</p>
            <p>{{ blog.author }}</p>
        </div>
    </div>
</template>
  
<script>

export default {
    components: {
    },
    data() {
        return {
            blog: {
                title: "",
                content: "",
                categories: [],
                author: ""
            },
            "authors": ["Author1", "Author2", "Author3"],
            "submitted": false,
        }

    },
    methods: {
        post(){
            this.$http.post("https://jsonplaceholder.typicode.com/posts", {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1,
            }).then(function(data){
                this.submitted = true
            }
            )
        }
    }
}
</script>
  
<style>
#add-blog * {
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"],
textarea {
    display: block;
    width: 100%;
    padding: 8px;
}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

h3 {
    margin-top: 10px;
}

#checkbox input {
    display: inline-block;
    margin-right: 10px;
}

#checkbox label {
    display: inline-block;
}
</style>
  
  