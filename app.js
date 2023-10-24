const app = Vue.createApp({
    data(){
        return {title: "Welcome to the vue tutorial", 
                age: 5, 
                newTitle: "",
                show: false,
                eventTracker: 0,
                x: 0,
                y: 0
        }

    },
    methods: {
        changeTitle(newTitle){
            this.title = newTitle
        },
        positionHandler(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')