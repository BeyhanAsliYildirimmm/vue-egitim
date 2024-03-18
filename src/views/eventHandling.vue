<script setup lang="ts">
import { onMounted, ref } from 'vue'

const count = ref(0)

function clickMe(e: Event) {
  console.log(e.target)
}
function handleFromSubmit(e: Event) {
  alert(1)
}
//not:igili component html yerleşirken mounted adinda bir event oluşur.(onMounted)
onMounted(() => {
  console.log('on mounted')
})
</script>
<template>
  <div class="container">
    <button @click="clickMe">Click Me !</button>
    <!--Formlar varsayılan olarak post işlemini gerçekleştirirler.
    prevent---- özelliği action (istek) atıldıktan sonra sayfa yenilenmiyor-->
    <form @submit.prevent="handleFromSubmit">
      <input type="text" />
    </form>
  </div>
</template>

<style></style>
