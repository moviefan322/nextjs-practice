import { useRouter, NextRouter } from "next/router";

function PortfolioProjectPage() {
  const router: NextRouter = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // Send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectId

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
