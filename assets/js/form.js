// Query selectors for HTML elements
const submitEl = document.querySelector('#submit');
const nameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentElInput = document.querySelector('#content');
const blogFormEl = document.querySelector('#submission');

// Prompt to warn user for blank form entry
const checkBlogText = () => {
    if (nameInput.value.trim() === '') {
        alert('Please enter a username')
        return false;
    }
    if (titleInput.value.trim() === '') {
        alert('Please enter a blog title')
        return false;
    }
    if (contentElInput.value.trim() === '') {
        alert('Please enter a blog post')
        return false;
    } else {
        return true;
    }
}

// EventListener to run on user clicking 'Submit' preventing page reload and storing form values into an object
blogFormEl.addEventListener('submit', function (event) {
    event.preventDefault();
    if (checkBlogText() === false) {
        return
    }

    const blogPost = {
        username: nameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentElInput.value.trim(),
    };

    // Store form values into localStorage into JSON and load into 'blog.html' 
    const storedPosts = JSON.parse(localStorage.getItem('storedPosts')) || []

    storedPosts.push(blogPost)

    localStorage.setItem('storedPosts', JSON.stringify(storedPosts));
    window.location.replace('blog.html')
});
