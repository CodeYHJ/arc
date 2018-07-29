<template>
  <div class="home">
    <section id="banner">
        <div class="content">
            <header>
            <h2>{{ $title }}</h2>
            <p>{{ $description }}</p>
            </header>
            <span class="symbol">
                <span class="arc">
                  <i v-for="value in 222"><b></b></i>
                </span>
            </span>
        </div>
        <a v-if="$site.pages.length > 1" v-scroll-to="'#post0'" class="goto-next scrolly">Next</a>
    </section>

    <section v-for="(value, key) in posts" :id="'post' + key" :class="'parallax spotlight style' + (key + 1) + ' ' + sides[key]">
        <!-- <img class="parallax-back" :src="value.frontmatter.cover" alt="" /> -->
        <div class="parallax-background" :style="'background-image: url(' + value.frontmatter.cover + ');'"></div>
        <div class="content">
            <div :class="{'container': (key == 0)}">
                <a :href="value.path">
                    <h2>{{ value.title }}</h2>
                    <p>{{ new Date(value.lastUpdated).toLocaleDateString($lang) }}</p>
                </a>
                <div v-html="value.excerpt"></div>
                <ul class="actions" v-if="value.excerpt">
                    <li>
                        <a class="button" :href="value.path + '#more'">Read More</a>
                    </li>
                </ul>
            </div>
        </div>
        <a v-scroll-to="(key == (posts.length - 1))? '#last': '#post' + (key + 1)" class="goto-next scrolly">Next</a>
    </section>

    <section id="last" class="wrapper style1 fade-up">
        <div class="container">
            <div class="row">
                <Content/>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Utils from './utils.js'

export default {
    data () {
        return {
            sides: ["bottom", "right", "left", "top"]
        }
    },
    computed: {
        posts () {
            return this.$currentPages.slice(0, 3)
        }
    },
    method: {
        
    },
    mounted: function () {
        var spotlights = document.getElementsByClassName('spotlight')

        for(var element of spotlights) {
            element.classList.add('inactive')
        }

        var handler = function() {
            for(var element of spotlights) {
                if(Utils.isElementPartiallyInViewport(element)) {
                    element.classList.remove('inactive');
                }
            }
        }

        // window.addEventListener('DOMContentLoaded', handler, false); 
        // window.addEventListener('load', handler, false); 
        window.addEventListener('scroll', handler, false); 
        window.addEventListener('resize', handler, false);
    }
}
</script>