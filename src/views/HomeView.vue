<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

const name = "abdullah-2";
const nameMe = "BEYHAN ASLI YILDIRIM";
///////////////////////////////BİNDİNG İŞLEMİ

//vue'da html kodunu derlemez olnun için geiştirilmiş bir fonksiyon vardır. (v-html)
const rawital="<h1 style='color:red'>Başlık</h1>"

//vue'da template de bulunan href'e link vermek istiyorsak (v-bind:) kullanmamız gerek veya href'in önünne (:) 'da koyabiliriz.'
const myHref = "https://google.com";
const myId="xclcvkc4"

//vue'da bir değer boş,undifund,0 vb gelire bue bunu falsa olarak kabul ediyor.
const myButton=false
//v-for directive(yönerge,direltif) bir döngü kurmamızı sağlar.
const items=["elma","armut","incir"]

function myFunction(){
  return name;
}
function myClick(){
 alert("me")
}
</script>

<template>
 <div>
      <!--Script içinde yazdığım fonksiyomlara ve değişkenlere template içerisinde nasıl erişiyorum-->
      <h1>{{ myFunction() }}</h1>
      <h1>{{ nameMe }}</h1>
      <p  v-html="rawital"></p>
      <a :href="myHref " :id="myId">click</a>
      <button :disabled="myButton">My Button</button>
      <!-- :disabled element'in aktif veya pasif olma durumunu kontrol eder.-->

      <!--for nasıl çalışır-->
    <ul>
      <li v-for="item in items" key:item>
        <!--if kullanımı-->
      <a  v-if="item== 'armut'">{{ item }}</a>
      <span v-else>{{ item }}</span>
      </li>
    </ul>
 </div>
 <div>
  <!--EVENTLER
  v-on:click --tıklandığında
  farklı biyr yöntem 
  @click
  -->
  <button v-on:click="myClick">mme</button>
  <button @click="myClick">me2</button>
 </div>
</template>
