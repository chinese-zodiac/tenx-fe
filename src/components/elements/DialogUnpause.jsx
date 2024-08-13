import { Button, Typography } from '@mui/material';
import DialogTransaction from '../styled/DialogTransaction';
import Tcu29SaleAbi from '../../abi/Tcu29Sale.json';
import { ADDRESS_TCU29SALE } from '../../constants/addresses';

export default function DialogUnpause() {
  return (
    <>
      <DialogTransaction
        address={ADDRESS_TCU29SALE}
        abi={Tcu29SaleAbi}
        functionName="managerUnpause"
        title="UNPAUSE 10X Deployer"
        btn={
          <Button
            sx={{
              backgroundColor: '#e16b31',
              borderRadius: '1em',
              border: 'solid 1px #f0eeed',
              color: '#f0eeed',
              display: 'inline-block',
              fontSize: '1em',
              width: '8em',
              padding: '0.4em 0.25em',
              lineHeight: '1.2em',
              margin: 0,
              marginRight: '1em',
              '&:hover': {
                backgroundColor: '#080830',
              },
            }}
          >
            UNPAUSE
          </Button>
        }
      >
        <Typography sx={{ fontSize: '1.25em', lineHeight: '1.25em' }}>
          Unpauses the 10X Deployer, allowing anyone to purchase TCu29 if it is
          available in the dapp.
        </Typography>
      </DialogTransaction>
    </>
  );
}
