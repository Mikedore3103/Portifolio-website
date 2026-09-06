(function () {
  const posts = window.BLOG_POSTS || [];
  const byTitle = new Map(posts.map((post) => [post.title, post]));

  document.querySelectorAll('a[href="blog-article.html"]').forEach((link) => {
    const article = link.closest('article');
    const title = article && article.querySelector('h2 a, h3 a');
    const post = title && byTitle.get(title.textContent.trim());
    if (post) link.href = `blog-article.html?slug=${encodeURIComponent(post.slug)}`;
  });
})();
