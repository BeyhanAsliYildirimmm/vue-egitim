<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const name = ref()
const plaka = ref(-1)
const cocuk = ref([])
</script>
<template>
  <div>
    <!--to data biding yapısı  --- input da değer değiştiği zaman name'in value otomatik değişir. (bilgi iki yönliü değişim değişir.)-->
    <label for="">
      <input type="text" v-model="name" />
    </label>

    <label for="">
      <!--vue bizim için checkbox tıklandığı zaman v-model'deki değişkenin value'sunu true tıklı değilse false yapıyor -->
      <input type="checkbox" v-model="name" />
    </label>

    <label for="">
      <input type="radio" v-model="name" value="1noluradiosecilidi" />
      1 nolu radio
    </label>

    <label for="">
      <!--vue bizim için checkbox tıklandığı zaman v-model'deki değişkenin value'sunu true tıklı değilse false yapıyor -->
      <input type="checkbox" v-model="name" value="2noluradiosecilidi" />
      2 nolu radio
    </label>
    <h1>{{ name }}</h1>

    <select v-model="plaka">
      <option value="-1">Seçiniz</option>
      <option value="35">İzmir</option>
      <option value="60">Tokat</option>
    </select>
    <h1>{{ plaka == 34 ? 'plaka istabul' : 'bilimyorum' }}</h1>
    <br />
    <div>
      <label>
        <input type="checkbox" value="ömer" v-model="cocuk" />Ömer
        <input type="checkbox" value="hasan" v-model="cocuk" />Hasan
        <input type="checkbox" value="ali" v-model="cocuk" />Ali
      </label>
      <h1>{{ cocuk }}</h1>
    </div>
  </div>
</template>
