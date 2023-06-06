import { useRouter, NextRouter } from "next/router";

function BlogPosts(): JSX.Element {
  const router: NextRouter = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
}

export default BlogPosts;
