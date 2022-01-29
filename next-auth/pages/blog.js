// import React from "react";
// import { getSession, useSession } from "next-auth/react";

// const Blog = ({ data }) => {
//   return <div>Blog {data}</div>;
// };

// export default Blog;

// // server side authentication with getSession
// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
//         permanent: false, //temporary redirect
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//       data: session ? "autheticated" : "not authenticated",
//     },
//   };
// }

import { useSession, getSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </>
    );
  }
  return <p>Access Denied</p>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
