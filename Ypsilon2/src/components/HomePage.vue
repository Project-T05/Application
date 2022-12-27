<template>
  <div class="no-scroll">
    <MyRectangle style="z-index: -1;"/>
    
    <img src="../assets/logo.jpg" style="width: 120px; height: 120px; position: relative; left: 60px; top: 20px; border-radius: 15px; box-shadow: 0px 0px 10px 5px rgba(0, 0, 0,0.1);">
    <img src="../assets/profilepic.png" style="width: 60px; height: 60px; position: relative; left: 1200px; top:-50px; border-radius: 60px; ">
    <p style="position: relative; left: 1180px; top:-110px;" >NOME PROFILO</p>
    <p></p>
   

    <p style="position: absolute; left: 360px; top:130px;font-size: x-large; font-weight: bold;" >I tuoi Corsi preferiti:</p>
    
    <Corso style="position: absolute; left:400px; top: 200px;"/>
    <Corso style="position: absolute; left:700px; top: 200px;"/>
    <Corso style="position: absolute; left:1000px; top: 200px;"/>

    
    <p style="position: absolute; left: 360px; top:430px;font-size: x-large; font-weight: bold;" >I Corsi più votati:</p>
    <Corso style="position: absolute; left:400px; top: 500px;"/>
    <Corso style="position: absolute; left:700px; top: 500px;"/>
    <Corso style="position: absolute; left:1000px; top: 500px;"/>

    
  </div>

 

</template>

<style>
.no-scroll {
  overflow: hidden;
}





</style>

<script>


import MyRectangle from './MyRectangle.vue'
import Corso from './My-Corso.vue'




export default {
  components: {
    MyRectangle,Corso
  }
}

</script>