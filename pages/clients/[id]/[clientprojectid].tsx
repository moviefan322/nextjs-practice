import { useRouter, NextRouter } from "next/router";

function SelectedClientProjectPage(): JSX.Element {
  const router: NextRouter = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  
  return (
    <div>
      <h1>Project Page for a Specific Project for a Specific Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
