import { useLoaderData } from "react-router-dom";
import { readUser } from "../../api/apiDevko";

const index = () => {
  const user = useLoaderData();

  return (
    <div>
      <p>USER INFO</p>
      <p>{user.userName}</p>
      <p>{user.googleEmail}</p>
      <p>{user.naverEmail}</p>
      <p>{user.workPosition}</p>
    </div>
  );
};

export default index;

export async function loader({ params }) {
  const user = await readUser(params.id);
  return user;
}
