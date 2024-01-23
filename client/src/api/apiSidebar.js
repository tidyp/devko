const API_URL = "http://localhost:3000/api";

// 인기 태그
export async function getPoptags() {
  try {
    const res = await fetch(`${API_URL}/dailystat/tag`);
    console.log(res)
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data)
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
    console.log(res)
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
}
