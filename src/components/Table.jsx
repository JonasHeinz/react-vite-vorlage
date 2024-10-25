import "./../styles.css";
import data from "./../data/tableData.json";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const DataTable = ({ service, kanton, search }) => {
  const filtered = data
    .filter((x) => x.service == service)
    .filter((y) => y.anbieter == kanton)
    .filter(
      (z) =>
        z.zusammenfassung.toLowerCase().includes(search.toLowerCase()) ||
        z.datensatz.includes(search)
    );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead class="tableHead">
          <TableRow>
            <TableCell>anbieter</TableCell>
            <TableCell>datensatz</TableCell>
            <TableCell>zusammenfassung </TableCell>
            <TableCell>service</TableCell>
            <TableCell>score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map((row, index) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={index}
            >
              <TableCell>{row.anbieter}</TableCell>
              <TableCell>{row.datensatz}</TableCell>
              <TableCell>{row.zusammenfassung}</TableCell>
              <TableCell>{row.service}</TableCell>
              <TableCell>{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
