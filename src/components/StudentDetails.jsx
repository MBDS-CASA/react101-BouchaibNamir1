import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = useMemo(() => {
    const sid = Number(id);

    const found = data.find((n) => n.student?.id === sid);
    if (!found) return null;

    const info = {
      id: found.student.id,
      firstname: found.student.firstname,
      lastname: found.student.lastname,
    };

    const notes = data
      .filter((n) => n.student?.id === sid)
      .map((n) => ({
        unique_id: n.unique_id,
        course: n.course,
        date: n.date,
        grade: n.grade,
      }));

    return { info, notes };
  }, [id]);

  if (!student) {
    return (
      <main className="main">
        <div className="page-wrap">
          <div className="page-header">
            <h1 className="app-title">Détails étudiant</h1>
            <Button variant="contained" color="success" onClick={() => navigate("/etudiants")}>
              Retour
            </Button>
          </div>

          <Paper className="card-pro" elevation={2}>
            <p className="empty-text">Aucun étudiant trouvé pour l'ID {id}.</p>
          </Paper>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="page-wrap">
        <div className="page-header">
          <h1 className="app-title">
            {student.info.firstname} {student.info.lastname}
          </h1>

          <Button variant="contained" color="success" onClick={() => navigate("/etudiants")}>
            Retour
          </Button>
        </div>

        {/* ✅ INFOS (petit tableau) */}
        <Paper className="card-pro" elevation={2}>
          <h3 className="section-title">Informations</h3>

          <TableContainer component={Paper} className="mui-table-card" elevation={0}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell className="th-cell">ID</TableCell>
                  <TableCell>{student.info.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="th-cell">Nom complet</TableCell>
                  <TableCell>
                    {student.info.firstname} {student.info.lastname}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* ✅ NOTES (vrai tableau) */}
        <Paper className="card-pro" elevation={2}>
          <h3 className="section-title">Notes / Cours</h3>

          {student.notes.length === 0 ? (
            <p className="empty-text">Aucune note trouvée.</p>
          ) : (
            <TableContainer component={Paper} className="mui-table-card" elevation={0}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="head-cell">Unique ID</TableCell>
                    <TableCell className="head-cell">Cours</TableCell>
                    <TableCell className="head-cell">Date</TableCell>
                    <TableCell className="head-cell">Note</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {student.notes.map((n) => (
                    <TableRow key={n.unique_id} hover>
                      <TableCell>{n.unique_id}</TableCell>
                      <TableCell>{n.course}</TableCell>
                      <TableCell>{n.date}</TableCell>
                      <TableCell>{n.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </div>
    </main>
  );
}
