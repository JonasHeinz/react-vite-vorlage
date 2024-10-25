import { MenuItem, Select, TextField } from "@mui/material";
import "./../styles.css";
import data from "./../data/tableData.json";

const getKantone = [...new Set(data.map((x) => x.anbieter))].sort();
const getServices = [...new Set(data.map((x) => x.service))].sort();

export const Header = ({
  service,
  setService,
  kanton,
  setKanton,
  setSearch,
}) => (
  <div class="header">
    <img id="logo" src={"./../geoharvester.png"} />
    <div class="titel">
      <b>Ein Katalog für Schweizer Geodienste</b>
    </div>
    <div>
      <TextField
        label="Search"
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select value={service} onChange={(e) => setService(e.target.value)}>
        {getServices.map((service) => (
          <MenuItem value={service} key={service}>
            {service}
          </MenuItem>
        ))}
      </Select>
      <Select value={kanton} onChange={(e) => setKanton(e.target.value)}>
        {getKantone.map((kanton) => (
          <MenuItem value={kanton} key={kanton}>
            {kanton}
          </MenuItem>
        ))}
      </Select>
    </div>
  </div>
);
