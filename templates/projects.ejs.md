```{=html}
<div class="cards project-cards">
<% for (const item of items) { %>
  <article class="card project">
    <div class="project-image">
      <img src="<%- item.image %>" alt="<%- item['image-alt'] || '' %>" class="project-thumbnail" width="640" height="400" loading="lazy">
      <span class="tag project-label"><%- item['project-label'] %></span>
    </div>
    <div class="card-body">
      <h3><%- item.title %></h3>
      <p><%- item.description %></p>
      <div class="card-footer">
        <% if (item.technologies) { %>
        <div class="technology-tags"><% for (const technology of item.technologies) { %><span class="tag"><%- technology %></span><% } %></div>
        <% } %>
        <a class="button secondary" href="<%- item.path %>">Ver proyecto <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>
<% } %>
</div>
```
