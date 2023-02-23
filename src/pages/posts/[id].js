import React from "react";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {/* <h1>Post: {id}</h1> */}
      {/* <h1>Post: {JSON.stringify(router.query)}</h1> */}
      <h1>Post: {JSON.stringify(id)}</h1>
    </div>
  );
}
