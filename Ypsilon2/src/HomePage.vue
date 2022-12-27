// App.vue
<template>
  <div class="no-scroll">
    <MyRectangle style="z-index: -1;"/>
    
    <img src="./assets/logo.jpg" style="width: 120px; height: 120px; position: relative; left: 60px; top: 20px; border-radius: 15px; box-shadow: 0px 0px 10px 5px rgba(0, 0, 0,0.1);">
    <img src="./assets/profilepic.png" style="width: 60px; height: 60px; position: relative; left: 1200px; top:-50px; border-radius: 60px; ">
    <p style="position: relative; left: 1180px; top:-110px;" >NOME PROFILO</p>
    <p></p>
    <HomePage label="HomePage" style="margin-top:120px; margin-left: 45px;"  />
    <p></p>

    <RicercaCorsi label="Ricerca corsi" style="margin-top:70px;  margin-left: 45px;" />
    <p></p>
  
    <AreaProfilo label="Profilo Personale" style="margin-top:70px;  margin-left: 45px;" />

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

import HomePage from './components/My-Bottone.vue'
import RicercaCorsi from './components/My-Bottone.vue'
import AreaProfilo from './components/My-Bottone.vue'
import MyRectangle from './components/MyRectangle.vue'
import Corso from './components/My-Corso.vue'




export default {
  components: {
    HomePage, RicercaCorsi,AreaProfilo,MyRectangle,Corso
  }
}

</script>