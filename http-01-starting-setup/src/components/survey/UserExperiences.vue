<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Start adding some results</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data(){
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  methods: {
    loadExperiences(){
      this.isLoading = true;
      this.error = null;
      fetch("https://vue-http-demo-b005c-default-rtdb.europe-west1.firebasedatabase.app/surveys.json").then((response) =>{
        if (response.ok){
          return response.json();
        }
      }).then((data) => {
        this.isLoading = false;
        const results = [];
        for (const id in data){
          results.push({ id: id, name: data[id].name, rating: data[id].rating})
        }
        this.results = results;
      }).catch((error) => {
        this.isLoading = false;
        console.log(error);
        this.error = "Failed to fetch data";
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>