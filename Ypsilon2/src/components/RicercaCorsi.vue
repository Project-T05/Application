<template>
  <div id="app" style="overflow: hidden">
    <input type="text" v-model="searchTerm" placeholder="Cerca..." style="position: absolute; top: 100px; left: 350px; height: 30px; width: 500px; background-color: #D8D8D8; font-weight: bold; border-radius: 20px;">
    <img src="../assets/profilepic.png" style="width: 60px; height: 60px; position: absolute; left: 1250px; top:60px; border-radius: 60px; ">
    <p style="position: absolute; left: 1130px; top:65px;" >NOME PROFILO</p>
    <p style="height: 50px;"></p>
    <div style="overflow-y: scroll; height: 500px; ">
      <template v-for="(item, index) in items" :key="index">
        <MyCorso2 style=" position: relative; margin:30px; left:300px;" :item="item"/>
      </template>
    </div>
  </div>
</template>

<script>
import MyCorso2 from '../assets/My-Corso2.vue'
import axios from 'axios'

export default {
  data() {
    return {
      searchTerm: "",
      items: []
    };
  },
  methods: {
    async lista_corsi(){
      let base_api = 'http://localhost:8080/api/';
      const jokeee = await axios.get(base_api+'courses/');//lista corsi
      this.items = jokeee.data
      
    }
  },
  beforeMount(){
    this.lista_corsi()
  },
  components: { MyCorso2 }
};
</script>
