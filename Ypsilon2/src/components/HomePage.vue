<template>
  <div style="overflow: hidden">
   
    
   
    <img src="../assets/profilepic.png" style="width: 60px; height: 60px; position: absolute; left: 1350px; top:20px; border-radius: 60px; ">
    <p style="position: absolute; left: 1230px; top:25px;" >NOME PROFILO</p>
    <p></p>
    
    
    <p style="position: absolute; left: 360px; top:130px;font-size: x-large; font-weight: bold;" >I tuoi Corsi preferiti:</p>
    
    <template v-for="(item, index) in corsi_favoriti" :key="index">
      <template v-if="index < 3">
        <Corso :style="{ position: 'absolute', left: `${400 + (index * 300)}px`, top: '200px' }" :item="item"/>
      </template>
    </template>
    
    <p style="position: absolute; left: 360px; top:430px;font-size: x-large; font-weight: bold;" >I Corsi più votati:</p>
    <template v-for="(item, index) in corsi" :key="index">
      <template v-if="index < 3">
        <Corso :style="{ position: 'absolute', left: `${400 + (index * 300)}px`, top: '500px' }" :item="item"/>
      </template>
    </template>
    
    
    
  </div>

 

</template>


<script>



import axios from 'axios'
import Corso from '../assets/My-Corso.vue'

export default {
  components: {
    Corso
  },
  data(){
    return {
      corsi: [],
      corsi_favoriti: []
    }
  },
  methods: {
    async lista_corsi(){
      let base_api = 'http://localhost:8080/api/';
      const jokeee = await axios.get(base_api+'users/'+"63a5c5989075ad6f17d16b99/courses/");//lista corsi
      this.corsi = jokeee.data
    },
    async favoriti(){
      let base_api = 'http://localhost:8080/api/';
      const jokeee = await axios.get(base_api+'users/'+ "63a5c5989075ad6f17d16b99/fav_courses/");//lista corsi
      this.corsi_favoriti = jokeee.data
    }
  },
  beforeMount(){
    this.lista_corsi()
    this.favoriti()
  }
}
</script>