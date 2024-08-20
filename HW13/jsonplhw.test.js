const axios = require('axios');
const AxiosLogger = require('axios-logger');
const instance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
});
instance.interceptors.request.use(AxiosLogger.requestLogger);
instance.interceptors.response.use(AxiosLogger.responseLogger);

describe("JSONPlaceholer suite", () => {
test("Get the post", async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
  console.log(response.data)
  expect(response.data).toBeTruthy()
  expect(response.status).toEqual(200)
})

test("Get comments with post id", async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=8`)
  console.log(response.data)
  expect(response.data).toBeTruthy()
  expect(response.status).toEqual(200)
})

test("Equal title of todo id", async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?id=7`)
  console.log(response.data)
  expect(response.data).toBeTruthy()
  expect(response.status).toEqual(200)
  expect(response.data[0].title).toEqual(expect.stringContaining('illo expedita'))
})

test("Create post", async () => {
  const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`,
    {
      title: "test",
      body: "New Test",
      userID: 300
    },
    {
      headers: {
          "Content-Type": "application/json",
      }
  })
  console.log(response.data)
  expect(response.data).toBeTruthy()
  expect(response.status).toEqual(201)
})

test("Create comment", async () => {
  const response = await axios.post(`https://jsonplaceholder.typicode.com/comments`,
    {
      postID: 100,
      id: 2,
      name: "Test Name",
      email: "Test@test.com",
      body: "This is a test body"
    },
    {
      headers: {
          "Content-Type": "application/json",
      }
  })
  console.log(response.data)
  expect(response.data).toBeTruthy()
  expect(response.status).toEqual(201)
})

test("Axios logging", async () => {
  const response = await instance.get(`/posts/1`)
})
})