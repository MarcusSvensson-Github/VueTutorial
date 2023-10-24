const app = Vue.createApp({
    data(){
        return {title: "Welcome to the vue tutorial", 
                age: 5, 
                newTitle: "",
                show: false,
                eventTracker: 0,
                x: 0,
                y: 0,
                showMouseover: false,
                books: [
                    {author: "Dan brown", title: "da vinci koden", fav: true},
                    {author: "ban brown", title: "c# koden", fav: false},
                    {author: "stan brown", title: "koden", fav: false}
                    ]
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
    },
    computed: {
        filterFavorite(){
                return this.books.filter((book) => book.fav)
            }
    }
})

app.mount('#app')