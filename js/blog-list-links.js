(function () {
  const posts = window.BLOG_POSTS || [];
  const byTitle = new Map(posts.map((post) => [post.title, post]));

  document.querySelectorAll('a[href="blog-article.html"]').forEach((link) => {
    const card = link.closest('article, .mxd-blog-preview__item, .recent-post__item');
    const titleLink = card && Array.from(card.querySelectorAll('a[href="blog-article.html"]'))
      .find((item) => byTitle.has(item.textContent.replace(/\s+/g, ' ').trim()));
    const post = titleLink && byTitle.get(titleLink.textContent.replace(/\s+/g, ' ').trim());
    if (post) {
      card.querySelectorAll('a[href="blog-article.html"]').forEach((cardLink) => {
        cardLink.href = `blog-article.html?slug=${encodeURIComponent(post.slug)}`;
      });
    }
  });
})();
