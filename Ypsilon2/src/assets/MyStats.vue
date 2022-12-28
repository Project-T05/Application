<template>
    <table class="gray-table" style="border-radius: 10px; width: 250px; height: 190px;">
      <tr>
        <td style="border-radius: 10px; text-align: center; font-size: large; ">{{ testo }}</td>
      </tr>
      <tr>
        <td class="red-bg" style="border-radius: 10px; text-align: center; font-size: large; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; color: white;">{{numero}}</td>
      </tr>
    </table>
  </template>
  
  <style>
    .gray-table {
      background-color: #D9D9D9;
      border: 2px solid gray;
    }
  
    .gray-table td {
      border: 2px solid white;
    }
  
    .red-bg {
      background-color: #E24343;
    }
  </style>
  
  <script>
  export default {
    props: {
      testo: {
        type: String,
        required: true
      },
      numero: {
        type: String,
        required: true
      }
    }
  }
  </script>
  