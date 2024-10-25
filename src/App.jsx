import "./styles.css";
import { Header } from "./components/Header";
import { DataTable } from "./components/Table";
import { useState } from "react";

function App() {
  const [kanton, setKanton] = useState("Aargau");
  const [service, setService] = useState("WMS");
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header
        kanton={kanton}
        setKanton={setKanton}
        service={service}
        setService={setService}
        setSearch={setSearch}
      />
      <DataTable kanton={kanton} service={service} search={search} />
    </div>
  );
}

export default App;
