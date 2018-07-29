<template>
  <div id="navPanel">
    <nav>
      <template v-for="(value, key, index) in $categories">
        <a class="link depth-0" @click="toggle($event)"><font-awesome-icon :icon="['fas', 'chevron-right']"/><span class="indent-0"></span>{{ key }}</a>
        <div>
          <a class="link depth-1" :href="page.path" v-for="page in value"><span class="indent-1"></span>{{ page.title }}</a>
        </div>
      </template>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    toggle(e) {
      let className = e.currentTarget.className
      e.currentTarget.className = className.includes(" hideSub")? className.replace(" hideSub", ""): className + " hideSub"
    }
  }
}
</script>