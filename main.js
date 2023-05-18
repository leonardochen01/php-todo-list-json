const { createApp } = Vue

  createApp({

    data() {
      return{
        apiUrl: 'server.php'
      }
    },
    methods:{
      readList(){
        axios.get('todo-list.json');
        .then(result => {
          console.log(result.data);
        })
      }
    },
    mounted(){
      this.readList();
    }
  }).mount('#app')