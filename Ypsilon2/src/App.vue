<template>
  <div id="app" style="overflow: hidden">
    <div style="width: 300px; height: 847px; background-color: #E24343 ; position: absolute; left:-50px; top:-50px"> </div>
    <img src="./assets/logo.jpg"  style="width: 120px; height: 120px; position: relative; left: 60px; top: 20px; border-radius: 15px; box-shadow: 0px 0px 10px 5px rgba(0, 0, 0,0.1);">
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
</template>



<script>


export default {
  name: "app"
};
</script>
