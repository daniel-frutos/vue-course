<template>
  <ul>
    <li :class="{active: modelValue === 'poor'}"><button type="button" @click="activate('poor')">Poor</button></li>
    <li :class="{active: modelValue === 'average'}"><button type="button" @click="activate('average')">Average</button></li>
    <li :class="{active: modelValue === 'great'}"><button type="button" @click="activate('great')">Great</button></li>
  </ul>
</template>

<script>
  export default {
    props: ['modelValue'],
    emots: ['update:modelValue'],
    //data() {
    //  return {
    //    activeOption: null
    //  }
    //},
    methods: {
      activate(option) {
        this.$emit('update:modelValue', option);
      }
    }
  }
</script>

<style scoped>
ul{
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li{
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  align-items: center;
}

button{
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.active {
  border-color: #a00078;
}

.active button {
  background-color: #a00078;
}
</style>