import BasicTable from "./components/BasicTable/BasicTable";
import firstTeam from "./mockData/firstTeam";
import secondTeam from "./mockData/secondTeam";

function App() {
  return (
    <>
      <BasicTable isDefeat={false} team={firstTeam} />
      <BasicTable isDefeat team={secondTeam} />
    </>
  );
}

export default App;
