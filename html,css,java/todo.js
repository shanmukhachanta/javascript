let todoList = [];

function addit(){
    const task = document.querySelector('.inputt')
    const date = document.querySelector('.datee')
    const work = task.value;
    const duedate = date.value;
    todoList.push({work,duedate});
    showit();
}
function showit(){
    let tasks = '';
    for(let i = 0;i<todoList.length;i++){
        const todo = todoList[i];
        const html = `<p>${todo.work} ${todo.duedate} <button onclick="todoList.splice(${i},1); showit(); ">delete</button></p>`
        tasks+=html;
    }
    document.querySelector('.adding').innerHTML = tasks;
    console.log(tasks)
}