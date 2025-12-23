import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ columns = [], rows = [] }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 1100, margin: "20px auto", borderRadius: 2 }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((c) => (
              <TableCell key={c.key} sx={{ fontWeight: "bold" }}>
                {c.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={row.id ?? idx}>
              {columns.map((c) => (
                <TableCell key={c.key}>{row[c.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
