// Step 1: Get blog ID from URL
const params = new URLSearchParams(window.location.search);
const blogId = parseInt(params.get("id")); // id number hona chahiye

// Step 2: Fetch JSON file
fetch("assets/json/blog-details.json")
  .then((res) => res.json())
  .then((data) => {
    const blogs = data.blogs; // JSON ke andar "blogs" array hona chahiye
    const blog = blogs.find(item => item.id === blogId);

    if (!blog) {
      document.getElementById('blogContent').innerHTML = `
        <div class="alert alert-danger" role="alert">
          Blog not found.
        </div>`;
      return;
    }

    // Step 3: Populate Blog Banner
    document.getElementById('blog-title').textContent = blog.title;
    document.getElementById('date').textContent = blog.date;
    document.getElementById('category').textContent = blog.category;
    document.getElementById('blog-description').textContent = blog.description;
    document.getElementById("blog-image").src = blog.image;

    // Step 4: Populate author (if available)
   const instructorSection = document.querySelector(".author-box").parentElement;

   if (blog.author) {
      document.getElementById("author-image").src = blog.author.image || "assets/images/default-instructor.jpg";
      document.getElementById("author-name").textContent = blog.author.name + " – " + blog.author.title;
      document.getElementById("author-bio").textContent = blog.author.bio || "";
    }  else {
      instructorSection.style.display = "none";
    }


    // Step 5: Render Tags
    const tagsContainer = document.getElementById('blogTags');
    tagsContainer.innerHTML = '';
    if (blog.tags && blog.tags.length > 0) {
      blog.tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        span.className = 'tag';
        tagsContainer.appendChild(span);
      });
    }

    // Step 6: Related Posts
    const relatedContainer = document.getElementById('relatedPosts');
    relatedContainer.innerHTML = '';
    if (blog.related && blog.related.length > 0) {
      blog.related.forEach(relatedId => {
        const relatedBlog = blogs.find(b => b.id === relatedId);
        if (relatedBlog) {
          const col = document.createElement('div');
          col.className = 'col-md-4 mb-4';
          col.innerHTML = `
            <div class="related-post">
              <img src="${relatedBlog.image}" alt="${relatedBlog.title}" class="related-post-img">
              <div class="p-4">
                <div class="text-primary mb-2"><i class="far fa-calendar me-2"></i>${relatedBlog.date}</div>
                <h5 class="related-post-title">${relatedBlog.title}</h5>
                <p>${relatedBlog.excerpt}</p>
                <a href="blogdetails.html?id=${relatedBlog.id}" class="btn btn-sm btn-primary">Read More</a>
              </div>
            </div>`;
          relatedContainer.appendChild(col);
        }
      });
    }
  })
  .catch((err) => {
    console.error("Error fetching blog data:", err);
  });
