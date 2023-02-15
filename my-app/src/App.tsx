import BasicTable from "./components/BasicTable/BasicTable";
import { teamElement } from "./utils/team";

function App({ team }: { team: Array<teamElement> }) {
  return (
    <>
      <BasicTable isDefeat team={team} />
      <BasicTable isDefeat={false} team={team} />
    </>
  );
}

export default App;
