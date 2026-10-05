```{=html}
<div class="featured-list">
<% for (const item of items.slice(0, 1)) { %>
  <article class="featured-card">
    <div class="featured-image">
      <img src="<%- item.image %>" alt="<%- item['image-alt'] || '' %>" class="featured-thumbnail" width="640" height="400" loading="lazy">
    </div>
    <div class="featured-body">
      <div class="featured-meta">
        <% for (const category of (item.categories || [])) { %>
        <span class="tag"><%- category %></span>
        <% } %>
        <% if (item.date) { %><span class="featured-date"><%- item.date %></span><% } %>
      </div>
      <h3><a href="<%- item.path %>"><%- item.title %></a></h3>
      <p><%- item.description %></p>
      <a class="article-link" href="<%- item.path %>">Leer artículo completo <span aria-hidden="true">→</span></a>
    </div>
  </article>
<% } %>
</div>
```
