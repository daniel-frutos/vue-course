<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>
<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'The Vue 3 Guide',
          description: 'The official guide to Vue 3',
          link: 'https://vuejs.org/guide/introduction.html',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The official google',
          link: 'https://google.com',
        },
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addNewResource: this.addNewResource,
      deleteResource: this.removeResource,
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode(){
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(selectedTab) {
      this.selectedTab = selectedTab;
    },
    removeResource(resId){
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
    addNewResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    }
  }
}
</script>