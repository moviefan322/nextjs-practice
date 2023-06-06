import { useRouter, NextRouter } from "next/router";

function ClientProjectsPage(): JSX.Element {
  const router: NextRouter = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  
  return (
    <div>
      <h1>Projects of A Given Client</h1>
    </div>
  );
}

export default ClientProjectsPage;
