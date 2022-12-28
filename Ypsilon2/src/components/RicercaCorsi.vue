<template>
    <div id="app">
      <input type="text" v-model="searchTerm" placeholder="Cerca..." style="position: absolute; top: 100px; left: 350px; height: 30px; width: 500px; background-color: #D8D8D8; font-weight: bold; border-radius: 20px;">
      <img src="../assets/profilepic.png" style="width: 60px; height: 60px; position: absolute; left: 1250px; top:60px; border-radius: 60px; ">
      <p style="position: absolute; left: 1130px; top:65px;" >NOME PROFILO</p>
      <MyCorso2 style=" position: absolute; top:200px; left:350px;"/>
      <MyCorso2 style=" position: absolute; top:330px; left:350px;"/>
      <MyCorso2 style=" position: absolute; top:460px; left:350px;"/>
      <MyCorso2 style=" position: absolute; top:590px; left:350px;"/>
    </div>

  </template>
  
  <script>
import MyCorso2 from '../assets/My-Corso2.vue';

  export default {
    data() {
        return {
            searchTerm: ""
        };
    },
    components: { MyCorso2 }
}
  </script>
  
