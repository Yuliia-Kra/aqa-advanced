async function fetchToDo() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

async function fetchUser() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  fetchToDo().then(console.log)
  fetchUser().then(console.log)