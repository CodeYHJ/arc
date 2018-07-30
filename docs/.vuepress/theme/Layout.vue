<template>
  <div id="theme-body" :class="'theme-container'  + (isHome?' home-page ':'') + (navPanelVisible?' navPanel-visible ':'')">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <Header @showNavPanel="showNavPanel"/>
    <div id="page-wrapper">
      <Home v-if="isHome"/>
      <Page v-else/>
      <Footer/>
    </div>
    <Sidebar/>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './partial/Header.vue'
import Home from './layout/Home.vue'
import Page from './layout/Page.vue'
import Sidebar from './layout/Sidebar.vue'
import Footer from './partial/Footer.vue'
import Utils from './layout/utils.js'

export default {
  data () {
      return {
          navPanelVisible: false
      }
  },
  created: function() {
    let classified = Utils.classified(this)
    Vue.prototype['$categories'] = classified.categories
    Vue.prototype['$currentPages'] = classified.currentPages
  },
  components: { Header, Home, Page, Sidebar, Footer },
  computed: {
    isHome: function() {
      let isHome = Utils.isHomePath(this.$page.path)
      if(window.innerWidth > 737) 
        this.navPanelVisible = !isHome
      return isHome
    }
  },
  methods: {
    showNavPanel: function () {
      this.navPanelVisible = !this.navPanelVisible
    }
  }
}
</script>

<style src="./assets/sass/main.scss" lang="scss"></style>