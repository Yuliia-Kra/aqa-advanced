
class ToDo {
    async fetchToDo() {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      }
}

class User {
    async fetchUser() {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      }
}

new ToDo().fetchToDo().then(console.log)
new User().fetchUser().then(console.log)