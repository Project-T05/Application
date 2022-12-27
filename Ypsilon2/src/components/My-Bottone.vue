<template>
  <button class="animated-button" style=" font-family:'Times New Roman', Times, serif; color: red; background-color: aliceblue; width: 150px; height: 60px; border-radius: 15px; font-size: large;">
    {{ label }} 
    
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
