(function () {
  const posts = window.BLOG_POSTS || [];
  const slug = new URLSearchParams(window.location.search).get('slug');
  const post = posts.find((item) => item.slug === slug) || posts[0];
  if (!post) return;

  document.title = `${post.title} | Insights`;
  const current = document.querySelector('.mxd-article__breadcrumbs .current-item');
  const title = document.querySelector('.mxd-article__title h1');
  const date = document.querySelector('.mxd-article__data .meta-date');
  const time = document.querySelector('.mxd-article__data .meta-time');
  const tags = document.querySelector('.mxd-article__tags');
  const image = document.querySelector('.mxd-article__thumb img');
  const content = document.querySelector('.mxd-article__content');
  if (current) current.firstChild.nodeValue = post.title;
  if (title) title.textContent = post.title;
  if (date) date.firstChild.nodeValue = `${post.date} `;
  if (time) time.textContent = post.readTime;
  if (tags) tags.innerHTML = post.tags.map((tag) => `<span class="tag tag-default tag-outline tag-link-outline"><a href="blog-standard.html">${tag}</a></span>`).join('');
  if (image) { image.src = post.image; image.alt = post.alt; }
  if (content) content.innerHTML = post.body;
})();
