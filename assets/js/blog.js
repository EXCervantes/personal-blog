// Retrieve posts from localStorage and reverse the values to post in most recent first
const storedPosts = JSON.parse(localStorage.getItem('storedPosts')).reverse() || []
console.log('StoredPosts', storedPosts);

const renderPosts = (posts) => {
    for (const post of posts) {
        const blogEl = createBlogElement(post)
        appendToMain(blogEl)
    }

}

// Create each respective element, place value, and append to <article> as a child element
const createBlogElement = ({ title, content, username }) => {
    const article = document.createElement('article');
    article.setAttribute('class', 'posted-blog')
    // Take title string and make into <h2> and append to <article>
    const h2El = document.createElement('h2')
    h2El.textContent = title
    article.appendChild(h2El)
    // Take content string and make into <p> and append as child of <article>
    const pEl = document.createElement('p')
    pEl.textContent = content
    article.appendChild(pEl)
    // Take username and make into <h4> and append as child of <article>
    const h4El = document.createElement('h4')
    h4El.textContent = 'Posted by: ' + username
    article.appendChild(h4El)
    return article;
}

// Append <article> to main body of html and call 'storedPosts'
const appendToMain = (article) => {
    const mainEl = document.querySelector('#articles');
    mainEl.appendChild(article)
}

renderPosts(storedPosts);