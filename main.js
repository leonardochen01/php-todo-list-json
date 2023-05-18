const { createApp } = Vue

  createApp({

    data() {
      return{

      }
    },
    methods:{
      getApi(){
        console.log('GET API');
      }
    },
    mounted(){
      this.getApi();
    }
  }).mount('#app')