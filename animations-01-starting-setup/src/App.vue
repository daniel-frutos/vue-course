<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
<!--  <div class="container">-->
<!--    <users-list></users-list>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <div class="block" :class="{animate: animatedBlock }"></div>-->
<!--    <button @click="animateBlock">Animate</button>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <transition name="para" @before-enter="beforeEnter" @before-leave="beforeLeave">-->
<!--      <p v-if="paraIsVisible">Visible sometimes</p>-->
<!--    </transition>-->
<!--      <button @click="toggleParagraph">Toggle Paragraph</button>-->
<!--  </div>-->
<!--  <div class="container">-->
<!--    <transition name="fade-button" mode="out-in">-->
<!--      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>-->
<!--      <button @click="hideUsers" v-else>Hide Users</button>-->
<!--    </transition>-->
<!--  </div>-->
<!--  <base-modal @close="hideDialog" :open="dialogIsVisible">-->
<!--    <p>This is a test dialog!</p>-->
<!--    <button @click="hideDialog">Close it!</button>-->
<!--  </base-modal>-->

<!--  <div class="container">-->
<!--    <button @click="showDialog">Show Dialog</button>-->
<!--  </div>-->
</template>  

<script>
// import UsersList from "./components/UsersList.vue";

export default {
  components: {
    // UsersList,
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("Before enter");
      console.log(el);
    },
    beforeLeave(el) {
      console.log("Before leave");
      console.log(el);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock(){
      this.animatedBlock = true;
    },
    toggleParagraph(){
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-in-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px);*/
  animation: slide-scale 0.3s ease-out forwards;
}

.para-enter-from {
  /*opacity: 0;
  transform: translateY(-30px);*/
}

.para-enter-active {
  animation: slice-scale 0.3s ease-out;
  /* transition: all 0.3s ease-out;*/
}

.para-enter-to {
  /*opacity: 1;
  transform: translateY(0);*/
}

.para-leave-from {
  /*opacity: 1;
  transform: translateY(0px);*/
}

.para-leave-active {
  /*transition: all 0.3s ease-out;*/
  animation: slide-scale 0.3s ease-out forwards;
}

.para-leave-to {
  /*opacity: 0;
  transform: translateY(-30px);*/
}

.route-enter-from{

}
.route-enter-active{
  animation: slide-scale 0.4s ease-out;
}
.route-enter-to{

}
.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.5) rotate(180deg);
  }
  100% {
    transform: translateX(-150px) scale(1) rotate(360deg);
  }
}
</style>