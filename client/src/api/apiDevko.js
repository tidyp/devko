const API_URL = "http://localhost:3000/api";

// Reads: 게시글 조회
export async function readPosts() {
  try {
    const res = await fetch(`${API_URL}/post`);
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

// Read: 게시글 조회
export async function readPost(id) {
  try {
    const res = await fetch(`${API_URL}/post/${id}`);
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

// Create: 게시글 작성
export async function createPost(postData) {
  const res = await fetch(`${API_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  console.log(res);
  if (!res.ok) {
    throw new Error(`Failed to create post. Status: ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
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

// Read: user/:id
export async function readUser(id) {
  const res = await fetch(`${API_URL}/user/${id}`);
  const data = await res.json();
  return data;
}

// 검색결과

export async function searchResult(id) {
  try {
    const res = await fetch(`${API_URL}/search/${id}`);
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

// Reads: 댓글 조회

export async function readComments(id) {
  try {
    const res = await fetch(`${API_URL}/comment/${id}`);
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

// Create: 게시글 작성
export async function createComment({postId, userID}) {
  const res = await fetch(`${API_URL}/comment/${postId}/${userID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postId),
  });

  console.log(res);
  if (!res.ok) {
    throw new Error(`Failed to create post. Status: ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
  return data;
}

export async function updateComment() {
  const res = await fetch(`${API_URL}/comment/:id`);
  const data = await res.json();
  return data;
}
export async function deleteComment() {
  const res = await fetch(`${API_URL}/comment/:id`);
  const data = await res.json();
  return data;
}
