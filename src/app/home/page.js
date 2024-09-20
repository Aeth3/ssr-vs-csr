import { fetchData } from "../api/getProfile";
export default async function Page() {
  const user = await fetchData();

  return (
    <>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Age: {user.age}</div>
    </>
  );
}
