import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  totalKills: number;
  totalDeads: number;
  children: JSX.Element;
};
export default function CustomTooltip({
  totalKills,
  totalDeads,
  children,
}: Props) {
  return (
    <Tooltip
      title={
        <>
          <p>Total kills: {totalKills}</p>
          <p>Total deaths: {totalDeads}</p>
          <Button variant="contained" color="success">
            Add friend
          </Button>
        </>
      }
      arrow
    >
      {children}
    </Tooltip>
  );
}
