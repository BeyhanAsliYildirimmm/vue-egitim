<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import {ref,reactive,watch} from 'vue'

const count =ref(0); //ref count fonksiyonu reactiv hale getiriyor. ve biz bu sayede template içinde count değişkenini kolaylıkla kullanıyoruz.

function updateCount(){
   count.value++;
}

const log=ref<string>()
//WATCH ile count adındaki değişkende bir değişiklik olduğunda algıla ve şu fonksiyonun ne yapmak istoyorsan omu yap.
watch( count ,(oldValue,newValue)=>{
log.value = `oldValue: ${oldValue} - newValue: ${newValue}`
})


//COMPUTED  ile reactivity zincirini kırmadan yazmak istiyorum
/*
const countViewModel = computed(() => {
  return count.value +'kalem'
})


//reactiv isre sadece içine obje alır.
/*
const reactive= reactive({
count:0

})

function updateCount2(){
  reactive.count++;
}*/



const members= ref(["ömer","yasin","halil"])
//obje tanımlayalım

const number = ref({
  name:"yasin",
  ago:23,
  city:"tokat"
})

</script>
<template>
  <!--views assında componnet'in aynısı sadece view sayfasını kendisini temisil ederken component sayfsnın paraçalrını temsil eder.
  view 'in altında componentler eklenebilir.-->
  <div>

    <!--Reactivity(ref,reactive,watch,computed) ne demek? 
    bir nesnem var buna bağlı olan diğer nesnelerin(teplate makenizması) vb. o nesnedeki güncellemelere göre tekrar hesaplanıp güncellenmesi demektir.

    vue bir değişkne güncelleniyor template içindeki html de ona göre günellenip render () ediliyor.
    -->

    <button @click="updateCount">{{ count }}</button>
  <!-- <button @click="updateCount2">{{ reactive }}</button>-->
<pre>
  {{ log }}
</pre>

<ul>
  <!--key'e verilecek değer  benzersiz olmalı
  key ne yapıyor? vue li 'leri render ederken veride bir değişiklik olduğunda gelip tekrar render etmesi gerektiği için benzersiz key olduğu için o key'e bakıp onu orda değiştiryor.
  -->
  <li v-for="(member ,index) in members" :key="index">
{{ index }}-{{ member }}</li>

</ul>

<ul>
 
  <li v-for="(value,key) in member" :key="value">
{{ key }} - {{ value }}</li>
</ul>
  </div>
</template>


