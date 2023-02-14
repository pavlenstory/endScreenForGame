import * as React from 'react';
import BasicTable from "./components/BasicTable/BasicTable";

function App() {
  return (
    <>
        <BasicTable isDefeat={true}/>
        <BasicTable isDefeat={false}/>
    </>
  );
}

export default App;
