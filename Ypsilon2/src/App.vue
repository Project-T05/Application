<template>
  <div id="app">
    <router-link to="/">
      <button class="animated-button" style=" font-family:'Times New Roman', Times, serif; color: red; background-color: aliceblue; width: 150px; height: 60px; border-radius: 15px; font-size: large; position: absolute; top:300px; left:50px;">HOME PAGE</button>
    </router-link>
    <div class="navbar-nav mr-auto">
        <router-link to="/tutorials">
          <button class="animated-button" style=" font-family:'Times New Roman', Times, serif; color: red; background-color: aliceblue; width: 150px; height: 60px; border-radius: 15px; font-size: large; position: absolute; top:450px; left:50px;">RICERCA CORSI</button>
        </router-link>
        <router-link to="/add">
          <button class="animated-button" style=" font-family:'Times New Roman', Times, serif; color: red; background-color: aliceblue; width: 150px; height: 60px; border-radius: 15px; font-size: large;position: absolute; top:600px; left:50px;">RICERCA CORSI</button>
        </router-link>
    </div>

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
