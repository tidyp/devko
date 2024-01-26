const API_URL = "http://localhost:3000/api";

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


export async function updateUserinfo(id) {
  try {
    const res = await fetch(`${API_URL}/user/${id}`);
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
