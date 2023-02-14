import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function CustomTooltip({totalKills, totalDeads, children}) {
    return (
        <Tooltip title={
            <div>
              kills: {totalKills}
              deads: {totalDeads}
              <Button variant="contained">Add friend</Button>
            </div>
          } arrow>
        {children}
        </Tooltip>
    )
}