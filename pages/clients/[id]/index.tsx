import { useRouter, NextRouter } from "next/router";

function ClientProjectsPage(): JSX.Element {
  const router: NextRouter = useRouter();

  console.log(router.pathname);
  console.log(router.query.id);
  const query: string | string[] | undefined = router.query.id;

  return (
    <div>
      <h1>Projects of {query}</h1>
    </div>
  );
}

export default ClientProjectsPage;
