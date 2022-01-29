import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

// const Dashboard = () => {
//   const { data } = getSession();
//   console.log(data);
//   return <div>Dashboard</div>;
// };
// export default Dashboard;

export default function Component() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <div>Dashboard</div>;
  }

  return (
    <Link href="/api/auth/signin">
      <a>Sign in</a>
    </Link>
  );
}
