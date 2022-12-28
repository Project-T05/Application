<template>
    <div style="overflow: hidden">
        <img src="../assets/profilepic.png" style="width: 60px; height: 60px; position: absolute; left: 1250px; top:60px; border-radius: 60px; ">
    <p style="position: absolute; left: 1130px; top:65px;" >NOME PROFILO</p>
    <p></p>
    <div style="overflow-y: scroll; height: 700px; width: 1600px; position: absolute; left:100px; top:20px;">
    <td colspan="5" style="text-align: center; font-weight: bold; position:absolute; left: 300px; top:200px; font-size:150%">Statistiche del corso</td>
        <img src="../assets/statistiche1.png" style="width: 300px;height:200px; position:absolute; left: 300px; top:250px; border-radius:20px;" >
        <img src="../assets/Statistiche2.png" style="width: 300px;height:200px; position:absolute; left: 700px; top:250px; border-radius:20px;">
        <img src="../assets/Statistiche3.png" style="width: 300px;height:200px; position:absolute; left: 300px; top:500px; border-radius:20px;">
        <img src="../assets/statistiche4.png" style="width: 300px;height:200px; position:absolute; left: 700px; top:500px; border-radius:20px;">
    <Corso style="position: absolute; left:300px; top:20px;"/>
    <div>
        <Rating style="position: absolute; left:700px; top:50px;"/>
        
            <Commenti style="position: absolute; left:300px; top:250px;"/>
    
            
        
        </div> 
    </div>
    <div id="app" style="overflow: hidden">
    <router-link to="/">
      <button class="animated-button" style=" font-family:'Times New Roman', Times, serif; color: red; background-color: aliceblue; width: 150px; height: 60px; border-radius: 15px; font-size: large; position: absolute; top:300px; left:50px;">HOME PAGE</button>
    </router-link>
        <router-link to="/courses">
          <button class="animated-button" style=" font-family:'Times New Roman', Times, serif; color: red; background-color: aliceblue; width: 150px; height: 60px; border-radius: 15px; font-size: large; position: absolute; top:450px; left:50px;">RICERCA CORSI</button>
        </router-link>
        <router-link to="/profile">
          
          <button class="animated-button" style=" font-family:'Times New Roman', Times, serif; color: red; background-color: aliceblue; width: 150px; height: 60px; border-radius: 15px; font-size: large;position: absolute; top:600px; left:50px;">PROFILO</button>
        </router-link>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
    </div>
</template>


<script>
import axios from 'axios'
import Corso from '../assets/My-Corso.vue'
import Rating from '../assets/My-RatingCourse.vue'
import Commenti from '../assets/My-Comments.vue'

export default {
  components: {
    Corso, Rating, Commenti
  },
  data(){
    return {
      joke: ''
    }
  },
  methods: {
    async first_api(){
      let base_api = 'http://localhost:8080/api/';
      const joke = await axios.get(base_api+'users/'+'63a5c5989075ad6f17d16b99'+'/courses');//il numero in mezzo è l'id dello user collegato
      const jokee = await axios.get(base_api+'users/');//lista users
      const jokeee = await axios.get(base_api+'courses/');//lista corsi
      this.joke = joke.data
      this.joke = jokee.data
      this.joke = jokeee.data
    }
  }
}
</script>