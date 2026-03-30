'use client'
import { useRouter } from "next/navigation";
export default function User() {
  const router = useRouter();
  const redirectUser = () => {
    router.push("/");
  };

  return (
    <>
      <h1>User Profile</h1>
      <p>Welcome to your profile page!</p>
      <button onClick={redirectUser}>
        go home
      </button>
      
    </>
  );
}
