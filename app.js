const app = Vue.createApp({
    data(){
        return {title: "Welcome to the vue tutorial", age: 5, newTitle: ""}

    },
    methods: {
        changeTitle(newTitle){
            this.title = newTitle
        }        
    }
})

app.mount('#app')