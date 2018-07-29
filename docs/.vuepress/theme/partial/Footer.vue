<template>
  <footer id="footer">
    <ul class="icons">
        <li v-for="i in icons">
          <a class="icon alt" :href="i.href"><font-awesome-icon :icon="i.icon"/></a>
        </li>
    </ul>
    <ul class="copyright">
      <li>&copy; {{ $description }}</li>
      <li>Powered by: <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a></li>
      <li>Design: <a href="https://html5up.net/" target="_blank">HTML5UP</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  data: function() {
    return {
      icons: [
        { icon: ['fab', 'twitter'], href: 'https://twitter.com/intent/tweet?url='},
        { icon: ['fab', 'facebook'], href: 'https://www.facebook.com/sharer.php?u='},
        { icon: ['fab', 'github'], href: 'https://github.com/arkceajin'},
        { icon: ['fas', 'envelope'], href: 'mailto:arceajin@gmail.com'}
      ]
    }
  },
  computed: {
    site () {
      return this.$site
    }
  }
}
</script>
