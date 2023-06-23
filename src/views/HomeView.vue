<script setup>
import { onMounted } from "vue";
import IconStar from "..//components/icons/IconStar.vue";
import anime from "animejs/lib/anime.es.js";

onMounted(() => {
  anime({
    targets: ".text-hero .el",
    translateY: 270,
    delay: anime.stagger(100, { from: "center" }),
  });

  anime({
    targets: ".text-hero-2 .el",
    translateY: 500,
    delay: anime.stagger(100, { from: "center" }),
  });
});
</script>

<template>
  <!-- marquee component -->
  <marquee
    class="font-inria font-bold text-[30px] border-black border-b-4 py-3"
    scrollamount="5"
    behavior="alternate">
    <div class="flex flex-row">
      <span class="mx-8 self-center"><IconStar /></span>
      <p>AFG</p>
      <span class="mx-8 self-center"><IconStar /></span>
      <p>Advanced for Further Generation</p>
      <span class="mx-8 self-center"><IconStar /></span>
      <p>DNCC</p>
      <span class="mx-8 self-center"><IconStar /></span>
      <p>Dian Nuswantoro Computer Club</p>
      <span class="mx-8 self-center"><IconStar /></span>
      <p>AFG</p>
      <span class="mx-8 self-center"><IconStar /></span>
      <p>Advanced for Further Generation</p>
      <span class="mx-8 self-center"><IconStar /></span>
      <p>DNCC</p>
      <span class="mx-8 self-center"><IconStar /></span>
    </div>
  </marquee>

  <div
    id="main"
    class="bg-[#FEE9CE] min-h-[800px] -mt-2 px-5 lg:px-20 relative">
    <div
      class="text-hero text-[4em] lg:text-[8em] font-libre font-bold pt-10 flex flex-row relative -top-[2em]">
      <div class="el pr-5">Discover </div>
      <div class="el pr-5">the </div>
      <div class="el pr-5">Best </div>
    </div>
    <div
      class="text-hero-2 text-[4em] lg:text-[8em] font-libre font-bold pt-10 flex flex-row relative -top-[4em]">
      <div class="el pr-5">Potential </div>
      <div class="el pr-5">Within </div>
      <div class="el pr-5">You ! </div>
    </div>

    <div class="mt-20 relative">
      <div class="flex relative">
        <button
          class="px-14 py-5 border-2 border-black bg-white text-[22px] font-inria font-bold z-10">
          Let's Join
        </button>
        <button
          class="px-14 py-5 border-2 border-black bg-white text-[22px] font-inria font-bold text-white absolute top-2 left-2">
          Let's Join
        </button>
      </div>
      <img
        class="hidden lg:block transform -scale-x-100 absolute -top-14 left-40 rotate-[30deg]"
        src="../components/icons/arrow.gif"
        width="350" />
    </div>
  </div>
  <marquee
    class="font-inria font-bold text-[30px] bg-[#814CFB] text-white border-black border-y-4 py-3"
    scrollamount="5"
    direction="right"
    behavior="alternate">
    <div class="flex flex-row">
      <span class="mx-8 self-center"><IconStar fill="white" /></span>
      <p>WEB DEVELOPER</p>
      <span class="mx-8 self-center"><IconStar fill="white" /></span>
      <p>MOBILE DEVELOPER</p>
      <span class="mx-8 self-center"><IconStar fill="white" /></span>
      <p>GAME DEVELOPER</p>
      <span class="mx-8 self-center"><IconStar fill="white" /></span>
      <p>DATA ANALYST (MACHINE LEARNING)</p>
      <span class="mx-8 self-center"><IconStar fill="white" /></span>
      <p>MULTIMEDIA</p>
      <span class="mx-8 self-center"><IconStar fill="white" /></span>
      <p>NETWORKING (IOT)</p>
      <span class="mx-8 self-center"><IconStar fill="white" /></span>
    </div>
  </marquee>
</template>
