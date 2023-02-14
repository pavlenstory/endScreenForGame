import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

type Props = {
  totalKills: number,
  totalDeads: number,
  children: JSX.Element
}
export default function CustomTooltip({totalKills, totalDeads, children}: Props) {
    return (
        <Tooltip title={
          <>
<h1>Total</h1>
            <p>kills: {totalKills}</p>
            <p>deads: {totalDeads}</p>
              <Button variant="contained">Add friend</Button>
            </>
          } arrow>
        {children}
        </Tooltip>
    )
}