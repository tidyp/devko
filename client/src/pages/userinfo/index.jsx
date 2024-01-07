import { useLoaderData } from "react-router-dom";
import { readUser } from "../../api/apiDevko";

import UserTab from "./UserTab";
import ProfileBox from "../../components/ProfileBox";

const index = () => {
  const user = useLoaderData();

  return (
    <>
      <div className="box-border flex justify-center">
        <div className="box-border flex w-[80rem]  gap-4">
          <div className="flex flex-col gap-2">
            <ProfileBox user={user} />
          </div>
          <UserTab />
        </div>
      </div>
    </>
  );
};

export default index;

export async function loader({ params }) {
  const user = await readUser(params.id);
  return user;
}
