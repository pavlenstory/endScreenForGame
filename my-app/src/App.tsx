import BasicTable from "./components/BasicTable/BasicTable";
import firstTeam from "./mockData/firstTeam";
import secondTeam from "./mockData/secondTeam";

function App() {
  return (
    <>
      <BasicTable isDefeat team={firstTeam} />
      <BasicTable isDefeat={false} team={secondTeam} />
    </>
  );
}

export default App;
