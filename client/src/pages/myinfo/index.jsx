import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { readUserinfo } from "../../api/apiDevko";
import cookie from "react-cookies";

const index = () => {

  const data = useLoaderData();

  const [userInfo, setUserInfo] = useState({
    username: data.userrows[0].userName,
    email: "",
    password: "",
    // 다른 필요한 정보들을 추가할 수 있습니다.
  });

  // 입력 필드가 변경될 때 호출되는 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  // 회원정보 수정
  const handleEditSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Edit User Profile</h2>
      <form onSubmit={handleEditSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default index;

export async function loader({ params }) {
  const useruuid = cookie.load("uuid");
  try {
    const data = await readUserinfo(useruuid);
    return data;
  } catch (error) {
    return "연결실패";
  }
}
