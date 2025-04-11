// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: 'Getting Started with JavaScript ES6+',
        category: 'javascript',
        image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500',
        excerpt: 'Learn about the modern features of JavaScript ES6+ and how to use them effectively in your projects.',
        content: `
            <h2>Introduction to ES6+</h2>
            <p>ECMAScript 2015, also known as ES6, brought significant improvements to JavaScript. Let's explore the key features that make modern JavaScript development more efficient and enjoyable.</p>
            
            <h3>1. Arrow Functions</h3>
            <p>Arrow functions provide a concise syntax for writing function expressions. They automatically bind the current scope, making them particularly useful for callbacks and methods.</p>
            <pre><code>// Traditional function
const add = function(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;</code></pre>

            <h3>2. Template Literals</h3>
            <p>Template literals allow you to write multi-line strings and embed expressions using \${} syntax.</p>
            <pre><code>const name = 'World';
const greeting = \`Hello \${name}!
This is a multi-line
string.\`;</code></pre>

            <h3>3. Destructuring</h3>
            <p>Destructuring makes it possible to unpack values from arrays or properties from objects into distinct variables.</p>
            <pre><code>// Array destructuring
const [first, second] = [1, 2];

// Object destructuring
const {name, age} = person;</code></pre>
        `,
        date: '2024-03-10',
        readTime: '5 min'
    },
    {
        id: 2,
        title: 'CSS Grid Layout Made Simple',
        category: 'css',
        image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=500',
        excerpt: 'Master CSS Grid Layout with this comprehensive guide to building responsive web layouts.',
        content: `
            <h2>Understanding CSS Grid</h2>
            <p>CSS Grid Layout is a powerful two-dimensional layout system that revolutionizes how we design web layouts. Let's dive into its core concepts and practical applications.</p>

            <h3>Basic Grid Structure</h3>
            <p>To create a grid container, simply set display: grid on an element. Then define your columns and rows using grid-template-columns and grid-template-rows.</p>
            <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
}</code></pre>

            <h3>Grid Areas</h3>
            <p>Grid areas allow you to name sections of your grid and place elements accordingly, making complex layouts more manageable.</p>
            <pre><code>.grid-container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}</code></pre>

            <h3>Responsive Grids</h3>
            <p>Use minmax() and auto-fit/auto-fill for flexible, responsive layouts that adapt to different screen sizes.</p>
        `,
        date: '2024-03-08',
        readTime: '4 min'
    },
    {
        id: 3,
        title: 'HTML5 Semantic Elements',
        category: 'html',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500',
        excerpt: 'Discover how to write better HTML with semantic elements and improve your site\'s accessibility.',
        content: `
            <h2>The Power of Semantic HTML</h2>
            <p>Semantic HTML elements clearly describe their meaning to both the browser and the developer. They improve accessibility, SEO, and code readability.</p>

            <h3>Key Semantic Elements</h3>
            <ul>
                <li><strong>&lt;header&gt;</strong> - Introductory content or navigational aids</li>
                <li><strong>&lt;nav&gt;</strong> - Navigation links</li>
                <li><strong>&lt;main&gt;</strong> - Main content of the document</li>
                <li><strong>&lt;article&gt;</strong> - Self-contained composition</li>
                <li><strong>&lt;section&gt;</strong> - Thematic grouping of content</li>
                <li><strong>&lt;aside&gt;</strong> - Content tangentially related to the content around it</li>
                <li><strong>&lt;footer&gt;</strong> - Footer for its nearest sectioning content</li>
            </ul>

            <h3>Benefits of Semantic HTML</h3>
            <p>Using semantic elements provides better accessibility for screen readers, improves SEO rankings, and makes your code more maintainable.</p>
        `,
        date: '2024-03-06',
        readTime: '3 min'
    },
    {
        id: 4,
        title: 'Mastering CSS Flexbox',
        category: 'css',
        image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=500',
        excerpt: 'A complete guide to CSS Flexbox layout model and its properties.',
        content: `
            <h2>CSS Flexbox Fundamentals</h2>
            <p>Flexbox is a one-dimensional layout method for arranging items in rows or columns. It provides a more efficient way to distribute space and align content in a container.</p>

            <h3>Flex Container Properties</h3>
            <pre><code>.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}</code></pre>

            <h3>Flex Item Properties</h3>
            <p>Control individual flex items using these properties:</p>
            <pre><code>.flex-item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    /* shorthand */
    flex: 1 1 auto;
}</code></pre>

            <h3>Common Use Cases</h3>
            <ul>
                <li>Navigation bars</li>
                <li>Card layouts</li>
                <li>Centering content</li>
                <li>Equal-height columns</li>
            </ul>
        `,
        date: '2024-03-04',
        readTime: '6 min'
    },
    {
        id: 5,
        title: 'JavaScript Async/Await',
        category: 'javascript',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500',
        excerpt: 'Learn how to handle asynchronous operations in JavaScript using async/await syntax.',
        content: `
            <h2>Understanding Async/Await</h2>
            <p>Async/await is a modern way to handle asynchronous operations in JavaScript. It makes asynchronous code look and behave more like synchronous code.</p>

            <h3>Basic Syntax</h3>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}</code></pre>

            <h3>Error Handling</h3>
            <p>Use try/catch blocks with async/await to handle errors elegantly:</p>
            <pre><code>async function handleErrors() {
    try {
        const result = await riskyOperation();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}</code></pre>

            <h3>Parallel Operations</h3>
            <p>Run multiple async operations in parallel using Promise.all():</p>
            <pre><code>async function parallel() {
    const [users, posts] = await Promise.all([
        fetchUsers(),
        fetchPosts()
    ]);
}</code></pre>
        `,
        date: '2024-03-02',
        readTime: '7 min'
    }
];

// DOM Elements
const blogPostsContainer = document.getElementById('blogPosts');
const categoryLinks = document.querySelectorAll('.nav-links a');

// Function to create a blog post card
function createBlogPostCard(post) {
    return `
        <article class="blog-post">
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-post-content">
                <span class="blog-post-category">${post.category}</span>
                <h2>${post.title}</h2>
                <p>${post.excerpt}</p>
                <div class="blog-post-meta">
                    <span>${post.date}</span>
                    <span>${post.readTime} read</span>
                </div>
                <button onclick="showFullPost(${post.id})" class="read-more-btn">Read More</button>
            </div>
        </article>
    `;
}

// Function to show full post content
function showFullPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h1>${post.title}</h1>
            <div class="post-meta">
                <span class="category">${post.category}</span>
                <span class="date">${post.date}</span>
                <span class="read-time">${post.readTime} read</span>
            </div>
            <img src="${post.image}" alt="${post.title}" class="full-width-img">
            <div class="post-content">
                ${post.content}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Close modal when clicking the close button or outside the modal
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Function to filter and display posts
function displayPosts(category = 'all') {
    const filteredPosts = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === category);
    
    blogPostsContainer.innerHTML = filteredPosts
        .map(post => createBlogPostCard(post))
        .join('');
}

// Event listeners for category filtering
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active state
        categoryLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Filter posts
        const category = link.dataset.category;
        displayPosts(category);
    });
});

// Initial display
displayPosts();