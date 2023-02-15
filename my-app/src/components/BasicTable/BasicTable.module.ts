import {
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(
  ({ isDefeat }: { isDefeat: boolean }) => ({
    [`&.${tableCellClasses.head}`]: {
      background: `${isDefeat ? "rgba(8,106,164,255)" : "rgba(130,33,12,255)"}`,
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  })
);

export const StyledTableContainer = styled(TableContainer)(() => ({
  display: "inline-block",
  width: "48%",
  margin: "1%",
  height: "600px",
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));