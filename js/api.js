// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

/* function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
} */

// function displayUser(data) {
//     const ul = document.getElementById('users');
//     for (const user of data) {
//         const li = document.createElement('li')
//         li.innerText = `Name: ${user.name}. Email: ${user.email.toLowerCase()}`
//         ul.appendChild(li)
//     }
// }

// function displayUser(data) {
//     const ul = document.getElementById('users')
//     for (const user of data) {
//         const li = document.createElement('li')
//         li.classList.add('user-list')
//         li.innerText = `Name: ${user.name}. Email Address: ${user.email.toLowerCase()}`
//         ul.appendChild(li)
//     }
// }

function displayUser(users) {
    const ul = document.getElementById('users');
    document.getElementById('all-user').style.display = 'block';
    for (const user of users) {
        const li = document.createElement('li');
        li.classList.add('user-list')
        li.innerHTML = `
            <h4 class="name">Name: ${user.name}</h4>
            <h5 class="user-name">User Name: ${user.username} </h5>
            <p class="email">Email Address: ${user.email.toLowerCase()} </p>
            <p class="phone">Phone Number: ${user.phone} </p>
            <p class="text">Website: ${user.website} </p>
            <p class="text">Address: <br>
                Street: ${user.address.street} <br> Suite: ${user.address.suite} <br> City: ${user.address.city} <br> 
                Zip Code: ${user.address.zipcode} <br> 
            </p>
            <span>Company: ${user.company.name} </span>
        `
        ul.appendChild(li)
    }
};


function displayPosts(posts) {
    const blogContainer = document.getElementById('blog-container')
    document.getElementById('title').style.display = 'block'
    for (const post of posts) {
        const div = document.createElement('div');
        console.log(post.title);
        div.innerHTML = `
            <h3>${post.title}</h3> 
            <p>${post.body}</p>
        `
        blogContainer.appendChild(div)
    }
}