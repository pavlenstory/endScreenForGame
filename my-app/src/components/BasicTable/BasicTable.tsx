import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CustomTooltip from "../Tooltip/Tooltip";
import { TeamElement } from "../../utils/types";
import {
  StyledTableContainer,
  StyledTableCell,
  StyledTableRow,
} from "./BasicTable.module";
import { TableHead } from "@mui/material";

type Props = {
  isDefeat: boolean;
  team: Array<TeamElement>;
};

export default function BasicTable({ isDefeat, team }: Props) {
  return (
    <StyledTableContainer>
      <Table stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              isDefeat={isDefeat}
              align="right"
            ></StyledTableCell>
            <StyledTableCell isDefeat={isDefeat} align="right">
              Nickname
            </StyledTableCell>
            <StyledTableCell isDefeat={isDefeat} align="right">
              Score
            </StyledTableCell>
            <StyledTableCell isDefeat={isDefeat} align="right">
              Status
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {team.map((row, index) => (
            <CustomTooltip
              totalKills={row.totalKills}
              totalDeads={row.totalDeads}
              key={row.id}
            >
              <StyledTableRow>
                <TableCell align="right">{index + 1}</TableCell>
                <TableCell align="right">{row.nickname}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">
                  {row.isAlive ? "alive" : "dead"}
                </TableCell>
              </StyledTableRow>
            </CustomTooltip>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
