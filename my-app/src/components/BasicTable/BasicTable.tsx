import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomTooltip from '../Tooltip/Tooltip';

function createData(
  id: number,
  nickname: string,
  score: number,
  isAlive: boolean,
  totalKills: number,
  totalDeads: number
) {
  return {id, nickname, score, isAlive, totalKills, totalDeads };
}

const rows = [
  createData(1, 'nickname  yoghurt', 159, true,  100, 98),
  createData(2, 'Ice cream sandwich', 237, true, 43, 453),
  createData(3, 'Eclair', 262, true,  4343, 43),
  createData(4, 'Cupcake', 305, false, 34, 23),
  createData(5, 'Gingerbread', 356, false, 67, 34),
  createData(6, 'Aleex3', 36, false,  467, 334),
  createData(7, 'Nam4ok', 16, false,  457, 4),
  createData(8, 'Cent', 134, true,  57, 23),
  createData(9, 'nickname  yoghurt', 159, true,  100, 98),
  createData(10, 'Ice cream sandwich', 237, false, 43, 453),
  createData(11, 'Eclair', 262, false,  4343, 43),
  createData(12, 'Cupcake', 305, true, 34, 23),
  createData(13, 'Gingerbread', 356, false, 67, 34),
  createData(14, 'Aleex3', 36, false,  467, 334),
  createData(15, 'Nam4ok', 16, false,  457, 4),
  createData(16, 'Cent', 134, true,  57, 23),
  createData(17, 'nickname  yoghurt', 159, true,  100, 98),
  createData(18, 'Ice cream sandwich', 237, false, 43, 453),
  createData(19, 'Eclair', 262, true,  4343, 43),
  createData(20, 'Cupcake', 305, true, 34, 23),
  createData(21, 'Gingerbread', 356, false, 67, 34),
  createData(22, 'Aleex3', 36, true,  467, 334),
  createData(23, 'Nam4ok', 16, true,  457, 4),
  createData(24, 'Cent', 134, true,  57, 23),
  createData(25, 'nickname  yoghurt', 159, true,  100, 98),
  createData(26, 'Ice cream sandwich', 237, false, 43, 453),
  createData(27, 'Eclair', 262, true,  4343, 43),
  createData(28, 'Cupcake', 305, true, 34, 23),
  createData(29, 'Gingerbread', 356, false, 67, 34),
  createData(30, 'Aleex3', 36, true,  467, 334),
  createData(31, 'Nam4ok', 16, true,  457, 4),
  createData(31, 'Cent', 134, false,  57, 23),
  createData(32, 'nickname  yoghurt', 159, true,  100, 98),
  createData(33, 'Ice cream sandwich', 237, false, 43, 453),
  createData(34, 'Eclair', 262, true,  443, 343),
  createData(35, 'Cupcake', 305, false, 34, 23),
  createData(36, 'Gingerbread', 356, false, 67, 34),
  createData(37, 'Aleex3', 36, false,  467, 3634),
  createData(38, 'Nam4ok', 16, false,  457, 54),
  createData(39, 'Cent', 134, false,  57, 263),
  createData(40, 'nickname  yoghurt', 15, false,  10, 96),
  createData(41, 'Ice cream sandwich', 37, false, 43, 453),
  createData(42, 'Eclair', 262, true,  343, 43),
  createData(43, 'Cupcake', 305, true, 34, 23),
  createData(44, 'Gingerbread', 356, false, 67, 34),
  createData(45, 'Aleex3', 36, true,  46, 334),
  createData(46, 'Nam4ok', 16, true,  57, 4),
  createData(47, 'Cent', 134, true,  57, 23),
  createData(47, 'nickname  yoghurt', 159, true,  100, 8),
  createData(49, 'Ice cream sandwich', 237, true, 43, 453),
];

type Props = {
  isDefeat: boolean
}

export default function BasicTable({isDefeat}: Props) {
  return (
    <TableContainer component={Paper} sx={{display: 'inline-block', width: '48%', margin: '1%'}}>
      <Table aria-label="simple table" >
        <TableHead sx={{background: isDefeat ? 'rgba(8,106,164,255)' : 'rgba(130,33,12,255)'}}>
          <TableRow sx={{color: 'white'}}>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Nickname</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <CustomTooltip totalKills = {row.totalKills} totalDeads = {row.totalDeads} key={row.id}>
            <TableRow>
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
