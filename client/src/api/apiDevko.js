// const API_URL = "http://localhost:3000/api";
const API_URL = "http://localhost:9000";

export async function readUser(id) {
  const res = await fetch(`${API_URL}/user/${id}`);
  // const res = await fetch(`${API_URL}/user/${id}`).then(res => res.json())
  const data = await res.json();
  return data;
}
