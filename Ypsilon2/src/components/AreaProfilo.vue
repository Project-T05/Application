<template>
    <p></p>
    <div>
        <img src="../assets/profilepic.png" style="width: 90px; height: 90px; position: absolute; left: 350px; top:60px; border-radius: 60px; ">
        <p style="position: absolute; left: 450px; top:65px; font-size: x-large;" >NOME PROFILO</p>
        <select id="language-select" v-model="selectedLanguage" style="position: absolute; top: 200px; left: 400px; width: 150px; font-size: medium; background-color: lightgray;">
            <option v-for="language in languages" :key="language">{{ language }}</option>
        </select>
        <p style="position: absolute; left: 360px; top:330px;font-size: x-large; font-weight: bold;" >Le tue Statistiche:</p>
        <MyStats style="position: absolute; top:450px; left:350px; " testo="DOMANDE" numero="17"/>
        <MyStats style="position: absolute; top:450px; left:700px; " testo="COMMENTI" numero="9"/>
        <MyStats style="position: absolute; top:450px; left:1050px; " testo="LIKE COMMENTI" numero="137"/>

    </div>
</template>


<script>
import MyStats from "../assets/MyStats.vue"
export default {
    components: {
        MyStats
    },
    data() {
    return {
      selectedLanguage: 'Italiano',
      languages: ['Inglese', 'Italiano']
    }
  }
}
</script>