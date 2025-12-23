import { useMemo, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function compare(a, b, orderBy) {
  const va = a?.[orderBy];
  const vb = b?.[orderBy];

  // nombres
  if (typeof va === "number" && typeof vb === "number") return va - vb;

  // dates (YYYY-MM-DD)
  const da = Date.parse(va);
  const db = Date.parse(vb);
  if (!Number.isNaN(da) && !Number.isNaN(db)) return da - db;

  // strings
  return String(va ?? "").localeCompare(String(vb ?? ""), "fr", {
    sensitivity: "base",
  });
}

export default function DataTable({ columns, rows }) {
  const [query, setQuery] = useState("");
  const [orderBy, setOrderBy] = useState(columns?.[0]?.key || "id");
  const [order, setOrder] = useState("asc"); // asc | desc
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  // 1) filtre (recherche)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;

    return rows.filter((r) =>
      columns.some((c) =>
        String(r?.[c.key] ?? "")
          .toLowerCase()
          .includes(q)
      )
    );
  }, [query, rows, columns]);

  // 2) tri
  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const diff = compare(a, b, orderBy);
      return order === "asc" ? diff : -diff;
    });
    return arr;
  }, [filtered, orderBy, order]);

  // 3) pagination
  const paged = useMemo(() => {
    const start = page * rowsPerPage;
    return sorted.slice(start, start + rowsPerPage);
  }, [sorted, page, rowsPerPage]);

  const handleSort = (key) => {
    if (orderBy === key) {
      setOrder((o) => (o === "asc" ? "desc" : "asc"));
    } else {
      setOrderBy(key);
      setOrder("asc");
    }
    setPage(0);
  };

  return (
    <Paper className="table-card" elevation={2}>
      <Stack direction="row" sx={{ p: 2 }} justifyContent="space-between" gap={2}>
        <TextField
          size="small"
          label="Recherche"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(0);
          }}
          placeholder="Tapez pour filtrer…"
        />
      </Stack>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((c) => (
                <TableCell key={c.key} sx={{ fontWeight: "bold" }}>
                  <TableSortLabel
                    active={orderBy === c.key}
                    direction={orderBy === c.key ? order : "asc"}
                    onClick={() => handleSort(c.key)}
                  >
                    {c.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paged.map((r, idx) => (
              <TableRow key={r.id ?? idx} hover>
                {columns.map((c) => (
                  <TableCell key={c.key}>{r?.[c.key]}</TableCell>
                ))}
              </TableRow>
            ))}

            {paged.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" sx={{ py: 4 }}>
                  Aucun résultat
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={sorted.length}
        page={page}
        onPageChange={(_, p) => setPage(p)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(Number(e.target.value));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 8, 10, 15]}
      />
    </Paper>
  );
}
