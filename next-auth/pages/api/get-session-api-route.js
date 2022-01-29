// Securing API Routes​
// Using getSession()​
// You can protect API routes using the getSession() method.

import { getSession } from "next-auth/react";

const ApiRoute = async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    // Signed in
    res.status(200).json({ message: "authenticated", session });
    console.log("Session", JSON.stringify(session, null, 2));
  } else {
    // Not Signed in
    res.status(401).json({ error: "not authenticated" });
  }
  res.end();
};

export default ApiRoute;
