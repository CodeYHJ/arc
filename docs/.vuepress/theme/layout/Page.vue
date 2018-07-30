<template>
  <article class="wrapper style1 article " itemscope itemprop="blogPost">
    <div class="container">
      <header class="article-header major">
        <h3>{{ $page.title }}</h3>
        <p>{{ new Date($page.lastUpdated).toLocaleDateString($lang) }}</p>
        <p>{{ $page.frontmatter.category }}</p>
      </header>

      <section id="content">
        <Content/>
      </section>

      <footer class="article-footer">
        <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
      </footer>

    </div>
  </article>
</template>
<script>
export default {
    mounted: function () {
      let v = this
      var disqus_config = function () {
        this.page.url = v.$page.path;
        this.page.identifier = v.$page.key;
      };

      (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://https-arkceajin-github-io.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
    }
}
</script>
