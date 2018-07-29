<template>
  <div>
    <header id="header">
      <h1 id="logo">
        <a :href="$localePath">{{ $site.title }}</a>
      </h1>
      <nav id="nav">
        <ul>
          <li class="dropdown">
            <a><font-awesome-icon :icon="['fas', 'globe']"/> {{ $localeConfig.selectText}}</a>
            <div class="dropdown-margin"></div>
            <ul class="dropdown-content level-0 right">
              <li v-for="(val, key) in $site.locales" >
                <a :href="langURL(key)">{{ val.label }}</a>
              </li>
            </ul>
          </li>
          <li><a class="button special" @click="$emit('showNavPanel')">{{ $localeConfig.categories}}</a></li>
        </ul>
      </nav>
    </header>
    <div id="titleBar">
      <a href="#" class="toggle" @click="$emit('showNavPanel')"><font-awesome-icon :icon="['fas', 'bars']" class="icon alt"/></a>
      <span class="title"><a :href="$site.base">{{ $site.title }}</a></span>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    langURL: function(path) {
      return encodeURI(this.$route.path.replace(this.$localePath, path))
    }
  }
}
</script>