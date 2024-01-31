const API_URL = "http://localhost:3000/api";

// Reads: 전체 게시글 조회
export async function readPosts() {
  try {
    const res = await fetch(`${API_URL}/post`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    console.error(`Error: ${error.message}`);
    throw error;
  }
}

// Reads: Discuss 게시글 조회
export async function readDiscussPosts(id) {
  try {
    const res = await fetch(`${API_URL}/post/discuss/page/${id}`);
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
// Reads: Qna 게시글 조회
export async function readQnaPosts(id) {
  try {
    const res = await fetch(`${API_URL}/post/questions/page/${id}`);
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

// Reads: Article 게시글 조회
export async function readArticlePosts(id) {
  try {
    const res = await fetch(`${API_URL}/post/articles/page/${id}`);
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

// Reads: Event 게시글 조회
export async function readEventPosts(id) {
  try {
    const res = await fetch(`${API_URL}/post/event/page/${id}`);
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

// Reads: Event 게시글 조회
export async function readTeamsPosts(id) {
  try {
    const res = await fetch(`${API_URL}/post/group/page/${id}`);
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

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Read: 게시글 조회
export async function readPost(id) {
  try {
    const res = await fetch(`${API_URL}/post/discuss/${id}`);
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
export async function readComments(id) {
  try {
    const res = await fetch(`${API_URL}/post/discuss/${id}`);
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

// Read: Post detail 게시글 조회
export async function readDetailPost(catogory, id) {
  console.log(catogory, id);
  try {
    const [detailResponse, commentsResponse] = await Promise.all([
      fetch(`${API_URL}/post/${catogory}/${id}`),
      fetch(`${API_URL}/comment/${catogory}/${id}`),
    ]);
    if (!detailResponse.ok) {
      throw new Error(
        `Failed to fetch qna details. Status: ${detailResponse.status}`,
      );
    }
    if (!commentsResponse.ok) {
      throw new Error(
        `Failed to fetch comments. Status: ${commentsResponse.status}`,
      );
    }
    const detailData = await detailResponse.json();
    const commentsData = await commentsResponse.json();

    return { discussDetail: detailData, discussComments: commentsData };
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
}

// Read: Discuss 게시글 조회

export async function readDiscussComments(id) {
  try {
    const res = await fetch(`${API_URL}/comment/discuss/${id}`);
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

  if (!res.ok) {
    throw new Error(`Failed to create post. Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
// Create: 그룹 게시글 작성
export async function createGroupPost(postData) {
  const res = await fetch(`${API_URL}/team`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!res.ok) {
    throw new Error(`Failed to create post. Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

// Update: 게시글 수정
export async function updatePost(params) {
  console.log(params)
  console.log(params)
  console.log(params)
  const res = await fetch(`${API_URL}/post/${params.category}/${params.postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: params.userId,
      title: params.title,
      content: params.content,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create post. Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

// Delete: 게시글 삭제
export async function deletePost(category, id) {
  console.log(`${category}, ${id}`);

  const res = await fetch(`${API_URL}/post/${category}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // id: params.id,
      // title: params.title,
      // content: params.content,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create post. Status: ${res.status}`);
  }

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

// Create: 댓글 작성
export async function createComment({
  postId,
  userId,
  commentId,
  commentContent,
  category,
}) {
  console.log(postId, userId, commentId, commentContent);
  const res = await fetch(`${API_URL}/comment/${commentId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postId,
      userId,
      commentId,
      content: commentContent,
      category: category,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create post. Status: ${res.status}`);
  }

  const data = await res.json();
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

// READ: userinfo
// -----------------------------------------------------------------
export async function readUserinfo(id) {
  try {
    const res = await fetch(`${API_URL}/profile/${id}`);
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

// // READ: Event
// // -----------------------------------------------------------------
// export async function readEventPosts() {
//   try {
//     const res = await fetch(`${API_URL}/calendar`);
//     if (!res.ok) {
//       throw new Error(`Failed to fetch data. Status: ${res.status}`);
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     throw error;
//   }
// }
