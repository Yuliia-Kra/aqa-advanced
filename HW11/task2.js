function fetchToDo(){
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then(response => response.json())
    .catch(error => {
    console.error('Error:', error);
    });   
}
fetchToDo().then(todo => {
    console.log('Result is', todo);
})

function fetchUser(){
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(response => response.json())
    .catch(error => {
    console.error('Error:', error);
    });   
}
fetchUser().then(user => {
    console.log('Result is', user);
})

const todoPromise = [fetchToDo(), fetchUser()]
Promise.all(todoPromise)
.then(result => {
    console.log('Result from Promise all', result);
})
.catch(error => {
    console.error('Error in Promise.all:', error);
});

const todoPromise2 = [fetchToDo(), fetchUser()]
Promise.race(todoPromise2)
.then(result => {
    console.log('Result from Promise race', result);
})
.catch(error => {
    console.error('Error in Promise.race:', error);
});
