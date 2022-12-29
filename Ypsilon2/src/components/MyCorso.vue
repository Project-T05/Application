<template>
    <div style="overflow: hidden">
      <img src="../assets/profilepic.png" style="width: 60px; height: 60px; position: absolute; left: 1350px; top:20px; border-radius: 60px; ">
    <p style="position: absolute; left: 1230px; top:25px;" >NOME PROFILO</p>

    

    <div style="overflow-y: scroll; height: 620px; position: relative; left:200px;">
      <Corso v-if="corso" style="position:absolute; left:100px;" :item="corso"/>
    <td colspan="5" style="text-align: center; font-weight: bold; position:absolute; left: 100px; top:200px; font-size:150%">Statistiche del corso</td>
        <img src="../assets/statistiche1.png" style="width: 350px;height:230px; position:absolute; left: 100px; top:250px; border-radius:20px;" >
        <img src="../assets/Statistiche2.png" style="width: 350px;height:230px; position:absolute; left: 700px; top:250px; border-radius:20px;">
        <img src="../assets/Statistiche3.png" style="width: 350px;height:230px; position:absolute; left: 100px; top:500px; border-radius:20px;">
        <img src="../assets/statistiche4.png" style="width: 350px;height:230px; position:absolute; left: 700px; top:500px; border-radius:20px;">
    
    <div>
      <p style="position: absolute; left:250px; top:770px; font-weight: bolder; font-family:Arial, Helvetica, sans-serif ; font-size: larger; ">AREA COMMENTI</p>
      <p style="position: absolute; left:830px; top:770px; font-weight: bolder; font-family:Arial, Helvetica, sans-serif ; font-size: larger; ">AREA Q&A</p>

      <Rating style="position: absolute; left:500px; top:50px;" />
      <Commenti style="position: absolute; left:100px; top:850px;"/>
      <Commenti style="position: absolute; left:650px; top:850px;"/>
            
        
        </div> 
    </div>

    </div>
</template>


<script>
import axios from 'axios'

import Rating from '../assets/My-RatingCourse.vue'
import Commenti from '../assets/My-Comments.vue'
import Corso from '../assets/My-Corso.vue'

export default {
  components: {
     Rating, Commenti, Corso
  },
  data(){
    return {
      corso_id: this.$route.params.id,
      corso: null
    }
  },
  methods: {
    handleClick() {
    let base_api = 'http://localhost:8080/api/';

    const data={
      corso_id: this.corso.id,
      utente_id:'63a5c5989075ad6f17d16b99'
        }
          
      if (!this.corso.is_favourite) {
        axios.post(base_api+'favourite_courses/', data);//lista users
      } else {
        axios.delete(base_api+'favourite_courses/63a5c5989075ad6f17d16b99/'+this.corso_id);//lista corsi
      }
      location.reload();
    },
    async get_corso(){
      let base_api = 'http://localhost:8080/api/';
      const jokeee = await axios.get(base_api+'courses/'+this.corso_id+'/63a5c5989075ad6f17d16b99/');//lista corsi
      this.corso = jokeee.data
    },
  },
  beforeMount(){
    this.get_corso()
  }
}
</script>