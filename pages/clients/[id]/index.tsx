import { useRouter, NextRouter } from "next/router";

function ClientProjectsPage(): JSX.Element {
  const router: NextRouter = useRouter();

  console.log(router.pathname);
  console.log(router.query.id);
  const query: string | string[] | undefined = router.query.id;

  function loadProjectHandler(): void {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: query, clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>Projects of {query}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
