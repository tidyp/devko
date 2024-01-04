// const API_URL = "http://localhost:3000/api";
const API_URL = "http://localhost:9000";

// Read: user/:id
export async function readUser(id) {
  const res = await fetch(`${API_URL}/user/${id}`);
  const data = await res.json();
  return data;
}

// Read: posts
export async function readPosts() {
  try {
    const res = await fetch(`${API_URL}/board`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
}

export async function createPost() {
  const res = await fetch(`${API_URL}/post`);
  const data = await res.json();
  return data;
}
export async function readPost() {
  const res = await fetch(`${API_URL}/post/:id`);
  const data = await res.json();
  return data;
}
export async function updatePost() {
  const res = await fetch(`${API_URL}/post/:id`);
  const data = await res.json();
  return data;
}
export async function deletePost() {
  const res = await fetch(`${API_URL}/post/:id`);
  const data = await res.json();
  return data;
}
