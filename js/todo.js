function loadTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => showTodo(data))
}
loadTodo()

const showTodo = todos => {
    const todoContainer = document.getElementById('todos')
    let count = 0;
    for (const todo of todos) {
        const div = document.createElement('div');
        div.classList.add('todo-item')
        let task;
        count += 1;
        if (todo.completed == true) {
            task = '✅'
        } else {
            task = '❌'
        }
        div.innerHTML = `
            <h3> ${count}. Task: ${todo.title}</h3>
            <p>Completed = ${task}</p>
        `;
        todoContainer.appendChild(div)
    }
}