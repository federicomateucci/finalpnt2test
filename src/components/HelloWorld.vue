<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <input type="text" v-model="inputfromStore"/>
    <p>{{inputfromStore}}</p>
    <button @click="addToStore()">agregar a vuex store</button>
   
  


  </div>
  <p>{{getInputFromStore()}}</p>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return{
      inputfromStore:''
    }
  },
  methods:{
    addToStore(){
      this.$store.dispatch('chargeVarAction',this.inputfromStore)
      this.inputfromStore='';
    },
      getInputFromStore(){
      return this.$store.state.input

      
    }
    
  
  },
  computed:{
  
  }

 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
