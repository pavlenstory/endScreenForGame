import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  totalKills: number;
  totalDeaths: number;
  children: JSX.Element;
};
export default function CustomTooltip({
  totalKills,
  totalDeaths,
  children,
}: Props) {
  return (
    <Tooltip
      title={
        <>
          <p>Total kills: {totalKills}</p>
          <p>Total deaths: {totalDeaths}</p>
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
