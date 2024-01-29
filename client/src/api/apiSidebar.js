const API_URL = "http://localhost:3000/api";

// 인기 태그
export async function getPoptags() {
  try {
    const res = await fetch(`${API_URL}/dailystat/tag`);
    if (!res.ok) {
      const error = new Error(`Failed to fetch data. Status: ${res.status}`);
      throw error;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
}

// 인기 유저
export async function getTopWriters() {
  try {
    const res = await fetch(`${API_URL}/dailystat/user`);
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
