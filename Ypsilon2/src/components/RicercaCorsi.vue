<template>
  <div id="app" style="overflow: hidden">
    <input type="text" v-model="searchTerm" placeholder="Cerca..." style="position: absolute; top: 100px; left: 350px; height: 30px; width: 500px; background-color: #D8D8D8; font-weight: bold; border-radius: 20px;">
        <button  @click="search(searchTerm)" style="position: absolute; top: 105px; left: 870px;  height: 20px; width: 70px; border-radius: 20px;" type="submit">Cerca</button>

    <img src="../assets/profilepic.png" style="width: 60px; height: 60px; position: absolute; left: 1350px; top:20px; border-radius: 60px; ">
    <p style="position: absolute; left: 1230px; top:25px;" >NOME PROFILO</p>
    <p style="height: 50px;"></p>
    <div style="overflow-y: scroll; height: 500px; position: relative; left: 300px; ">
      <template v-for="(item, index) in items" :key="index">
        <MyCorso2 style=" position: relative; margin:30px; " :item="item"/>
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
      const jokeee = await axios.get(base_api+'users/'+"63a5c5989075ad6f17d16b99/courses/");//lista corsi
     this.items = jokeee.data
    },
    async search(searchTerm){
      let base_api = 'http://localhost:8080/api/';
      const jokeee = await axios.get(base_api+'users/'+"63a5c5989075ad6f17d16b99/courses/"+searchTerm);//lista corsi
     this.items = jokeee.data
    }
  },
  created(){
    this.lista_corsi()
  },
  components: { MyCorso2 }
};
</script>
