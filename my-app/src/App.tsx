import BasicTable from "./components/BasicTable/BasicTable";
import { TeamElement } from "./utils/team";

function App({ team }: { team: Array<TeamElement> }) {
  return (
    <>
      <BasicTable isDefeat team={team} />
      <BasicTable isDefeat={false} team={team} />
    </>
  );
}

export default App;
