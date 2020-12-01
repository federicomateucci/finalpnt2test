<template>


  <div class="jumbotron">
    <input placeholder="COLOR" type="text" v-model="color">
    <input placeholder="TAMANIO" type="text" v-model="tamanio">
    <input placeholder="FONDO" type="text" v-model="fondo">
    
  </div>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>

    <input placeholder="TEXTO" :style="{fontSize:tamanio + 'px', color:color,backgroundColor:fondo}" type="text" v-model="inputfromStore" />
    <p> desde vuex reverso {{ addToStore }}</p>

    <p>Cantidad de palabras {{wordCount}}</p>
  </div>
 

<hr>

  <table id="choiceawnsers">
    <h3>Respuestas Choice</h3>
  <br>
  <tr>
    <th>1.</th>
    <th>2.</th>
    <th>3.</th>
    <th>4.</th>
    <th>5.</th>
  </tr>
  <tr>
    <td>B</td>
    <td>C</td>
    <td>B</td>
    <td>D</td>
    <td>D</td>
  </tr>
  </table>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      inputfromStore: "",
      color:'',
      tamanio:'',
      fondo:'',
      // myStyle:{
      //   backgroundColor:this.color,
      //   color:this.color,
      //   fontSize:this.tamanio
        
      // }
    };
  },
  methods: {
    getInputFromStore() {
      return this.$store.state.input;
    },
  },
  computed: {
    addToStore() {
      this.$store.dispatch("chargeVarAction", this.inputfromStore);
      return this.$store.state.input;
    },
    wordCount(){
      const msgtoCount = this.inputfromStore.split(' ');
      let wordstoCount = []
      msgtoCount.forEach(word => {
        if(word != ""){
          wordstoCount.push(word)
        }
      })
      return wordstoCount.length
    }
 
  },
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

#choiceawnsers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

</style>
