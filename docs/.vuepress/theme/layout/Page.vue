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
        <!-- <% if (!index){ %>
          <%- partial('post/nav') %>
        <% } %>
        <% if (post.comments && config.disqus_shortname){ %>
          <a href="<%- post.permalink %>#disqus_thread" class="article-comment-link"><%= __('comment') %></a>
        <% } %>
        <%- partial('post/tag') %> -->
      </footer>

      <!-- <% if (!index && post.comments && config.disqus_shortname){ %>
        <section id="comments">
          <div id="disqus_thread">
            <noscript>Please enable JavaScript to view the <a href="//disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
          </div>
        </section>
      <% } %> -->
    </div>
  </article>
</template>
