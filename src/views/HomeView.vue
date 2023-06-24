<script setup>
import { onMounted } from "vue";
import IconStar from "../components/icons/IconStar.vue";
import IconHeart from "../components/icons/IconHeart.vue";
import IconChain from "../components/icons/IconChain.vue";
import IconWeb from "../components/icons/IconWeb.vue";
import IconPhone from "../components/icons/IconPhone.vue";
import IconPhoto from "../components/icons/IconPhoto.vue";
import IconData from "../components/icons/IconData.vue";
import IconGame from "../components/icons/IconGame.vue";
import IconNetwork from "../components/icons/IconNetwork.vue";
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
  // anime({
  //   targets: ".text-join",
  //   keyframes: [
  //     {scale: 1.2},
  //     {scale: 1.1},
  //     {scale: 1.2},

  //   ],
  //   duration: 7000,
  //   easing: "easeInOutSine(1, .8)",
  //   loop: true,
  // });

  anime({
    targets: "#chain",
    keyframes: [
      { rotate: 100, translateX: 0 },
      { translateX: 100 },
      { translateY: -10, rotate: 0 },
      { rotate: 120 },
      { translateX: -100, rotate: 13 },
    ],

    duration: 15000,
    easing: "easeOutElastic(1, 1)",
    loop: true,
  });
  anime({
    targets: ".and",
    keyframes: [
      // {rotateX:100, translateX: 0},
      // {translateX: 100},
      // {translateY: -10, rotate: 0},
      { rotate: 10 },
      { rotate: -14 },
      // {translateX: -100, rotate: 13},
    ],

    duration: 10000,
    easing: "easeOutElastic(1, 1)",
    loop: true,
  });

  anime({
    targets: ".cling",
    translateX: function () {
      return anime.random(0, 270);
    },
    keyframes: [
      { rotate: 12 },
      { translateX: -12 },
      { rotate: -12 },
      { rotate: 12 },

      { translateX: 12 },
      { rotate: -12 },
      { translateY: 12 },
      { rotate: 0 },
      { rotate: -12 },
      { translateY: -12 },
    ],
    duration: 10000,
    easing: "easeOutElastic(1, 1)",
    loop: true,
  });
  anime({
    targets: ".card1",
    keyframes: [
      { rotate: 8 },
      { rotate: -8 },
      { rotate: 8 },
      { rotate: -8 },
      { rotate: 0 },
    ],
    duration: 15000,
    easing: "easeOutElastic(1, 1)",
    loop: true,
  });

  anime({
    targets: ".card2",
    keyframes: [
      { rotate: -8 },
      { rotate: 8 },
      { rotate: -8 },
      { rotate: 8 },
      { rotate: 0 },
      { rotate: -8 },
    ],
    duration: 15000,
    easing: "easeOutElastic(1, 1)",
    loop: true,
  });

  anime({
    targets: ".card3",
    keyframes: [
      { rotate: 8 },
      { rotate: -8 },
      { rotate: 8 },
      { rotate: 0 },
      { rotate: 8 },
      { rotate: -8 },
    ],
    duration: 15000,
    easing: "easeOutElastic(1, 1)",
    loop: true,
  });

  anime({
    targets: ".card4",
    keyframes: [
      { rotate: -8 },
      { rotate: 10 },
      { rotate: 0 },
      { rotate: 7 },
      { rotate: -8 },
      { rotate: 9 },
    ],
    duration: 15000,
    easing: "easeOutElastic(1, 1)",
    loop: true,
  });

  anime({
    targets: ".card5",
    keyframes: [
      { rotate: 4 },
      { rotate: -8 },
      { rotate: 8 },
      { rotate: -8 },
      { rotate: 0 },
      { rotate: 8 },
    ],
    duration: 15000,
    easing: "easeOutElastic(1, 1)",
    loop: true,
  });

  anime({
    targets: ".card6",
    keyframes: [
      { rotate: -7 },
      { rotate: 13 },
      { rotate: -8 },
      { rotate: 10 },
      { rotate: -8 },
      { rotate: 0 },
    ],
    duration: 15000,
    easing: "easeOutElastic(1, 1)",
    loop: true,
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
    class="bg-[#FEE9CE] h-full -mt-2 px-5 pb-20 lg:pb-32 lg:px-20 relative">
    <!-- <div class="hidden lg:block">
      <div
        class="text-hero md:text-[8em] md:text-red-200 lg:text-yellow-50 lg:text-[8em] font-libre font-bold pt-10 flex flex-col lg:flex-row relative -top-[2em]">
        <div class="el pr-8">Discover</div>
        <div class="el pr-8">the</div>
        <div class="el pr-8">Best</div>
      </div>
      <div
        class="text-hero-2 md:text-[8em] md:text-red-200 lg:text-yellow-50 lg:text-[8em] font-libre font-bold pt-10 flex flex-col lg:flex-row relative -top-[4em]">
        <div class="el pr-8">Potential</div>
        <div class="el pr-8">Within</div>
        <div class="el pr-8">You !</div>
      </div>
    </div> -->
    <div class="">
      <div
        class="text-hero-sm text-[4em] lg:text-[5em] xl:text-[9em] font-libre font-bold pt-10 relative -left-64">
        Discover the Best Potential Within You !
      </div>
    </div>

    <div class="mt-20 relative">
      <div class="flex relative">
        <a
          href="#register"
          class="btn-join px-20 py-7 border-2 border-black bg-white text-[30px] font-inria font-bold z-10 hover:translate-x-2 hover:translate-y-2 transition">
          <p class="text-join">Let's Join</p>
        </a>
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
  <div id="galleries" class="bg-[#A4E7C6] -mt-2 py-20 px-5 lg:px-20">
    <div
      class="gap-4 lg:gap-12 flex flex-col lg:flex-row overflow-x-auto justify-center">
      <div
        data-aos="fade-right"
        class="rounded-xl shadow-lg overflow-hidden mb-10 w-full lg:w-[620px] h-[360px] font-inria font-semibold bg-slate-900 sm:mb-0">
        <!-- src="https://user-images.githubusercontent.com/80609220/248239155-65b9c3f9-34d6-411d-82a5-5cedb546f8fc.jpg" -->
        <img
          src="https://user-images.githubusercontent.com/80609220/248463731-54637c74-18f7-40b5-a77b-34ecac2a80f3.JPG"
          class="w-full h-72 object-cover px-5 pt-5"
          alt="" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2 text-white">
            Basic Training For Next Generation
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        class="rounded-xl shadow-lg overflow-hidden mb-10 w-full lg:w-[620px] h-[360px] font-inria font-semibold bg-slate-900 sm:mb-0">
        <img
          src="https://user-images.githubusercontent.com/80609220/248464749-b0c9746c-ea28-417d-a009-d8a902d38186.JPG"
          class="w-full h-72 object-cover px-5 pt-5"
          alt="" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2 text-white">DINACOM 2023</div>
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
          <div class="font-bold text-xl mb-2 text-white">
            DNCC Goes to School
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-10 gap-4 lg:gap-12 flex flex-col lg:flex-row overflow-x-auto justify-center">
      <div
        data-aos="zoom-in-down"
        class="rounded-xl shadow-lg overflow-hidden mb-10 w-full lg:w-[620px] h-[360px] font-inria font-semibold bg-slate-900 sm:mb-0">
        <img
          src="https://user-images.githubusercontent.com/80609220/248464193-656e9a6e-f5fe-4ec7-930b-09ad0e5a282a.JPEG"
          class="w-full h-72 object-cover px-5 pt-5"
          alt="" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2 text-white">DNCC Berbagi</div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        class="rounded-xl shadow-lg overflow-hidden mb-10 w-full lg:w-[620px] h-[360px] font-inria font-semibold bg-slate-900 sm:mb-0">
        <img
          src="https://user-images.githubusercontent.com/80609220/248463737-1568cfa0-018c-47b0-a2ca-4a9163a52ba8.jpg"
          class="w-full h-72 object-cover px-5 pt-5"
          alt="" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2 text-white">Ultah DNCC ke-32</div>
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
    class="bg-[#F7D519] -mt-2 pt-16 pb-16 lg:pb-0 lg:pt-32 px-5 lg:px-20 border-b-4 border-black relative">
    <h1
      data-aos="fade-up"
      class="text-center font-bebas font-bold text-5xl lg:text-8xl text-[#1B1719] relative z-30">
      Connecting the dots for an engaging <br />
      collaboration experiences
    </h1>

    <div
      data-aos="fade-down-right"
      id="chain"
      class="absolute top-4 left-5 lg:left-10">
      <!-- <IconChain /> -->
      <img class="w-32 lg:w-72 opacity-25" src="../assets/Chain.svg" alt="" />
    </div>

    <div
      data-aos="fade-down-left"
      class="cling absolute top-10 lg:top-20 right-5 lg:right-48">
      <img class="w-16 lg:w-32 opacity-25" src="../assets/Cling.png" alt="" />
    </div>

    <div class="mt-10 lg:mt-20 lg:grid lg:grid-cols-3 lg:grid-flow-col">
      <div data-aos="fade-up" class="lg:relative lg:top-28">
        <img class="w-[500px] mx-auto" src="../assets/HandConnect.png" alt="" />
      </div>

      <p
        data-aos="fade-right"
        data-aos-delay="400"
        class="mt-5 lg:ml-7 lg:mt-0 text-center lg:text-left lg:leading-relaxed font-inria font-bold text-xl lg:text-[30px]">
        Together we build DNCC and become students who are more disciplined,
        accomplished, creative and have noble character.
        <br />
        <br />
        As well as optimizing the ability of members to become a useful
        generation.
      </p>

      <div class="hidden lg:block relative">
        <img class="ml-32" src="../assets/Dollar.svg" alt="" />
      </div>
    </div>
  </div>

  <!-- Devisi -->
  <div
    id="devisi"
    class="bg-[#8955FF] -mt-2 pt-10 lg:pt-44 pb-16 px-5 lg:px-20 border-b-4 border-black">
    <h1
      data-aos="fade-down"
      class="text-center font-bebas font-bold text-5xl lg:text-8xl text-white z-50">
      This is our Devision.
    </h1>

    <p
      data-aos="fade-down"
      data-aos-delay="200"
      class="font-inria text-center text-white font-thin lg:text-[27px] mt-10">
      “Pursue your passion, select a mission, and elevate your skills to new
      heights.”
    </p>

    <div
      data-aos="fade-down"
      data-aos-delay="300"
      class="mt-20 mx-auto px-5 flex flex-col lg:flex-row justify-center">
      <div
        class="card1 bg-yellow-200 mx-auto lg:mx-0 w-72 h-64 border-4 border-black relative rotate-6 shadow-lg shadow-black">
        <span>
          <IconWeb />
        </span>
        <p class="absolute font-inria font-bold text-3xl bottom-0 mb-10 ml-10">
          Web Dev
        </p>
      </div>

      <div
        class="card2 bg-orange-400 mx-auto lg:mx-0 w-72 h-64 border-4 border-black relative -rotate-6 lg:-ml-8 shadow-lg shadow-black">
        <div class="ml-5 mt-5">
          <IconPhone />
        </div>
        <p class="absolute font-inria font-bold text-3xl bottom-0 mb-10 ml-10">
          Mobile Dev
        </p>
      </div>
      <div
        class="card3 bg-sky-300 mx-auto lg:mx-0 w-72 h-64 border-4 border-black relative rotate-6 lg:-ml-8 shadow-lg shadow-black">
        <div class="ml-5 mt-5">
          <IconGame />
        </div>
        <p class="absolute font-inria font-bold text-3xl bottom-0 mb-10 ml-10">
          Game Dev
        </p>
      </div>
      <div
        class="card4 bg-teal-500 mx-auto lg:mx-0 w-72 h-64 border-4 border-black relative -rotate-6 lg:-ml-8 shadow-lg shadow-black">
        <div class="ml-5 mt-5">
          <IconData />
        </div>
        <p class="absolute font-inria font-bold text-3xl bottom-0 mb-10 ml-10">
          Data Analyst
        </p>
      </div>

      <div
        class="block lg:hidden card5 bg-purple-400 mx-auto lg:mx-0 w-72 h-64 border-4 border-black relative rotate-6 lg:-ml-8 shadow-lg shadow-black">
        <div class="ml-5 mt-5">
          <IconNetwork />
        </div>
        <p class="absolute font-inria font-bold text-3xl bottom-0 mb-10 ml-10">
          Networking
        </p>
      </div>
      <div
        class="block lg:hidden card6 bg-orange-200 mx-auto lg:mx-0 w-72 h-64 border-4 border-black relative -rotate-6 lg:-ml-8 shadow-lg shadow-black">
        <div class="ml-5 mt-5">
          <IconPhoto />
        </div>
        <p class="absolute font-inria font-bold text-3xl bottom-0 mb-10 ml-10">
          Multimedia
        </p>
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-delay="400"
      class="mt-20 lg:flex justify-center hidden">
      <div
        class="card5 bg-purple-400 w-72 h-64 border-4 border-black relative rotate-6 -ml-8 shadow-lg shadow-black">
        <div class="ml-5 mt-5">
          <IconNetwork />
        </div>
        <p class="absolute font-inria font-bold text-3xl bottom-0 mb-10 ml-10">
          Networking
        </p>
      </div>
      <div
        class="card6 bg-orange-200 w-72 h-64 border-4 border-black relative -rotate-6 -ml-8 shadow-lg shadow-black">
        <div class="ml-5 mt-5">
          <IconPhoto />
        </div>
        <p class="absolute font-inria font-bold text-3xl bottom-0 mb-10 ml-10">
          Multimedia
        </p>
      </div>
    </div>
  </div>

  <marquee
    class="font-inria font-bold text-[30px] border-black border-b-4 py-3"
    scrollamount="5"
    directives="right"
    behavior="alternate">
    <div class="flex flex-row">
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
      <span class="mx-8 self-center"><IconHeart color="black" /></span>
      <p>REGISTER NOW</p>
    </div>
  </marquee>

  <!-- Register Form -->

  <div
    id="register"
    class="-mt-2 bg-[#FEE9CE] pt-20 h-full pb-16 border-b-4 border-black">
    <h1
      data-aos="fade-down"
      class="text-center font-bebas font-bold text-5xl lg:text-8xl text-black z-50">
      REGISTER DROP YOUR PROFILE
    </h1>
    <div class="mt-16" id="ff-compose"></div>
  </div>

  <div id="" class="bg-[#59CB35] py-20 px-5 lg:px-20">
    <div class="lg:flex justify-center">
      <div class="hidden lg:block">
        <h1
          data-aos="fade-down"
          class="font-bebas font-bold text-8xl lg:text-[170px] xl:text-[19em] text-black z-50">
          LET'S JOIN
        </h1>
        <div class="flex justify-between">
          <h1
            data-aos="fade-right"
            data-aos-delay="300"
            class="hidden lg:block font-bebas font-bold text-8xl lg:text-[13em] xl:text-[28em] text-black z-50">
            👀
          </h1>
          <h1
            data-aos="fade-down"
            class="and font-bebas font-bold text-8xl lg:text-[13em] xl:text-[25em] text-black z-50">
            AND
          </h1>
        </div>
        <h1
          data-aos="fade-down"
          data-aos-delay="500"
          class="font-bebas font-bold text-8xl lg:text-[4em] xl:text-[8em] text-black z-50 tracking-wide">
          MAKE A CHANGE FOR YOU
        </h1>
      </div>
      <div class="block lg:hidden">
        <h1
          class="font-bebas font-bold text-8xl lg:text-[21em] text-black z-50"
          align="justify">
          LET'S JOIN AND MAKE A CHANGE FOR YOU
        </h1>
      </div>
      <div class="relative mt-10 lg:mt-0">
        <div
          class="text-center bg-white w-full h-full lg:ml-5 rounded-[40px] p-5 border-4 border-black relative z-10 lg:hover:translate-x-6 hover:translate-y-6 transition">
          <h1
            class="font-inria text-2xl lg:text-4xl font-bold leading-relaxed lg:mt-10 xl:mt-32">
            TALK WITH<br />
            CONTACT PERSON
          </h1>

          <p
            class="font-inria text-2xl lg:text-4xl leading-relaxed mt-10 lg:mt-20">
            ZIDAN <br />
            0812-2518-3356
          </p>
          <p
            class="font-inria text-2xl lg:text-4xl leading-relaxed mt-10 lg:mt-10">
            SHIVA <br />
            0895-3633-75272
          </p>
        </div>
        <div
          class="bg-[#A4E48F] w-full h-full lg:ml-5 rounded-[40px] p-20 border-4 border-black absolute lg:-right-11 top-6">
          <h1>
            TALK WITH<br />
            CONTACT PERSON
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
