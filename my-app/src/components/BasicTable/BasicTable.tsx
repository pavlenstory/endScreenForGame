import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomTooltip from '../Tooltip/Tooltip';

function createData(
  nickname: string,
  score: number,
  isAlive: boolean,
  id: number,
  totalKills: number,
  totalDeads: number
) {
  return { nickname, score, isAlive, id, totalKills, totalDeads };
}

const rows = [
  createData('nickname  yoghurt', 159, true, 1, 100, 98),
  createData('Ice cream sandwich', 237, false, 2, 43, 453),
  createData('Eclair', 262, true, 3, 4343, 43),
  createData('Cupcake', 305, true, 4, 34, 23),
  createData('Gingerbread', 356, false, 5, 67, 34),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Nickname</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <CustomTooltip totalKills = {row.totalKills} totalDeads = {row.totalDeads}>
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{index+1}</TableCell>
              <TableCell align="right">{row.nickname}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.isAlive ? 'alive' : 'dead'}</TableCell>
            </TableRow>
            </CustomTooltip>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
