import { useLoaderData } from "react-router-dom";
import { readUser } from "../../api/apiDevko";

import UserTab from "./UserTab";
import ProfileBox from "../../components/ProfileBox";

const index = () => {
  // const user = useLoaderData();
  const username = cookie.load("googleId");

  return (
    <>
      <div className="box-border flex justify-center">
        <div className="box-border flex w-[80rem]  gap-4">
          <div className="flex flex-col gap-2">
            <ProfileBox user={username} />
            <p>유저정보 페이지</p>
            <p>유저정보 페이지</p>
            <p>유저정보 페이지</p>
            <p>유저정보 페이지</p>
            <p>유저정보 페이지</p>
            <p>유저정보 페이지</p>
            <p>유저정보 페이지</p>
            <p>유저정보 페이지</p>
            <p>유저정보 페이지</p>
            <p>유저정보 페이지</p>
          </div>
          <UserTab />
        </div>
      </div>
    </>
  );
};

export default index;

export async function loader({username}) {
  const user = await readUser(username);
  return user;
}
// export async function loader({ params }) {
//   const user = await readUser(params.id);
//   return user;
// }
