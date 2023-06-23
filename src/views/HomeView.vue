<script setup>
import { onMounted } from "vue";
import IconStar from "../components/icons/IconStar.vue";
import IconHeart from "../components/icons/IconHeart.vue";
import IconChain from "../components/icons/IconChain.vue";
import IconCling from "../components/icons/IconCling.vue";
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
  anime({
    targets: ".text-hero-sm",
    translateX: 255,
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
    class="bg-[#FEE9CE] min-h-[900px] -mt-2 px-5 lg:px-20 relative">
    <div class="hidden lg:block">
      <div
        class="text-hero text-[4em] lg:text-[8em] font-libre font-bold pt-10 flex flex-col lg:flex-row relative -top-[2em]">
        <div class="el pr-8">Discover</div>
        <div class="el pr-8">the</div>
        <div class="el pr-8">Best</div>
      </div>
      <div
        class="text-hero-2 text-[4em] lg:text-[8em] font-libre font-bold pt-10 flex flex-col lg:flex-row relative -top-[4em]">
        <div class="el pr-8">Potential</div>
        <div class="el pr-8">Within</div>
        <div class="el pr-8">You !</div>
      </div>
    </div>
    <div class="block lg:hidden">
      <div
        class="text-hero-sm text-[4em] lg:text-[8em] font-libre font-bold pt-10 relative -left-64">
        Discover the Best Potential Within You !
      </div>
    </div>

    <div class="mt-20 relative">
      <div class="flex relative">
        <button
          class="px-20 py-7 border-2 border-black bg-white text-[30px] font-inria font-bold z-10 hover:translate-x-2 hover:translate-y-2 transition">
          Let's Join
        </button>
        <button
          class="px-20 py-7 border-2 border-black bg-white text-[30px] font-inria font-bold text-white absolute top-2 left-2">
          Let's Join
        </button>
      </div>
      <img
        class="hidden lg:block transform -scale-x-100 absolute -top-12 left-60 rotate-[30deg]"
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

  <!-- photos galleries -->
  <div
    id="galleries"
    class="bg-[#A4E7C6] -mt-2 py-20 px-5 lg:px-20 gap-12 lg:flex overflow-x-auto">
    <div
      data-aos="fade-right"
      class="rounded-xl shadow-lg overflow-hidden mb-10 w-full lg:w-[620px] h-[360px] font-inria font-semibold bg-slate-900 sm:mb-0">
      <img
        src="https://user-images.githubusercontent.com/80609220/248239155-65b9c3f9-34d6-411d-82a5-5cedb546f8fc.jpg"
        class="w-full h-72 object-cover px-5 pt-5"
        alt="" />
      <div class="px-6 py-4 text-center">
        <div class="font-bold text-xl mb-2 text-white">
          Basic Training For Next Generation
        </div>
      </div>
    </div>
    <div
      data-aos="zoom-in-down"
      class="rounded-xl shadow-lg overflow-hidden mb-10 w-full lg:w-[620px] h-[360px] font-inria font-semibold bg-slate-900 sm:mb-0">
      <img
        src="https://user-images.githubusercontent.com/80609220/248238654-5dd990c2-e684-412d-8229-1b190f33a4a5.jpg"
        class="w-full h-72 object-cover px-5 pt-5"
        alt="" />
      <div class="px-6 py-4 text-center">
        <div class="font-bold text-xl mb-2 text-white">DNCC Goes to School</div>
      </div>
    </div>
    <div
      data-aos="fade-left"
      class="rounded-xl shadow-lg overflow-hidden mb-10 w-full lg:w-[620px] h-[360px] font-inria font-semibold bg-slate-900 sm:mb-0">
      <img
        src="https://user-images.githubusercontent.com/80609220/248237766-99960d7f-9e0e-471a-966f-e5a17bddb607.jpg"
        class="w-full h-72 object-cover px-5 pt-5"
        alt="" />
      <div class="px-6 py-4 text-center">
        <div class="font-bold text-xl mb-2 text-white">
          Developer Bootcamp DNCC X KodingWorks
        </div>
      </div>
    </div>
  </div>

  <marquee
    class="font-inria font-bold text-[30px] bg-white text-black border-black border-y-4 py-3"
    scrollamount="5"
    direction="left"
    behavior="alternate">
    <div class="flex flex-row">
      <span class="mx-8 self-center"><IconHeart fill="black" /></span>
      <p>Expand Relationships</p>
      <span class="mx-8 self-center"><IconHeart fill="black" /></span>
      <p>Studying Together</p>
      <span class="mx-8 self-center"><IconHeart fill="black" /></span>
      <p>Get a Mate if Destined</p>
      <span class="mx-8 self-center"><IconHeart fill="black" /></span>
      <p>No Gabut</p>
      <span class="mx-8 self-center"><IconHeart fill="black" /></span>
      <p>Crowded Community Group</p>
      <span class="mx-8 self-center"><IconHeart fill="black" /></span>
      <p>The Most Relaxed UKM</p>
      <span class="mx-8 self-center"><IconHeart fill="black" /></span>
    </div>
  </marquee>

  <!-- Connecting -->
  <div
    id="galleries"
    class="bg-[#F7D519] -mt-2 pt-14 lg:pt-32 px-20 border-b-4 border-black relative">
    <h1 class="text-center font-bebas font-bold text-5xl lg:text-8xl text-[#1B1719] z-50">
      Connecting the dots for an engaging <br />
      collaboration experiences
    </h1>

    <div id="chain" class="absolute top-4  left-5 lg:left-10">
      <!-- <IconChain /> -->
       <img class="w-32 lg:w-72 opacity-2 lg:opacity-100" src="../assets/Chain.svg" alt="">
    </div>

    <div id="cling" class="absolute top-10 lg:top-20 right-5 lg:right-48">
      <img class="w-16 lg:w-32" src="../assets/Cling.png" alt="">
    </div>

    <div class="mt-20">
      <img class="" src="../assets/HandConnect.png" alt="">
    </div>
    
  </div>
</template>
