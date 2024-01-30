import { Button, DialogContent, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { BigNumber } from 'ethers';
import { cloneElement, useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import Tcu29SaleAbi from '../../abi/Tcu29Sale.json';
import { ADDRESS_TCU29SALE } from '../../constants/addresses';
import { bnToCompact } from '../../utils/bnToFixed';
import EtherTextField from '../elements/EtherTextField';
import DialogTransaction from '../styled/DialogTransaction';
import ButtonPrimary from '../styled/ButtonPrimary';

export default function DialogSetPrice({ btn, sx }) {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [open, setOpen] = useState(false);
  const [inputWad, setInputWad] = useState(1.0);

  const {
    data: dataPrice,
    isError: isErrorPrice,
    isLoading: isLoadingPrice,
  } = useContractRead({
    address: ADDRESS_TCU29SALE,
    abi: Tcu29SaleAbi,
    functionName: 'price',
    watch: true,
    enabled: !!address,
  });

  const priceTcu29 =
    !isLoadingPrice && !isErrorPrice && !!dataPrice
      ? dataPrice
      : BigNumber.from('1000');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {cloneElement(btn, {
        onClick: handleClickOpen,
      })}
      <Dialog onClose={handleClose} open={open} sx={sx}>
        <DialogContent
          sx={{
            padding: '1em',
            background: 'white',
            border: 'solid 4px #e16b31',
            borderRadius: '10px',
            color: 'black',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              border: 'solid 3px #e16b31',
              borderRadius: '8px 8px 0px 0px',
              textAlign: 'right',
              paddingBottom: '0.5em',
              maxWidth: '17em',
            }}
          >
            <EtherTextField
              decimals={3}
              onChange={setInputWad}
              value={inputWad?.toString()}
              placeholder="0.0"
              autofocus
              fullWidth
              renderInput={(props) => (
                <TextField
                  variant="standard"
                  sx={{
                    padding: '0.25em',
                    width: '90%',
                    '& .MuiInputBase-input': {
                      fontSize: '1.5em',
                      color: 'black',
                      textAlign: 'right',
                      width: '80%',
                      display: 'inline-block',
                    },
                  }}
                  {...props}
                />
              )}
            />
          </Box>
          <br />
          <Button
            onClick={handleClose}
            variant="text"
            sx={{
              backgroundColor: '#e16b31',
              borderRadius: '1em',
              border: 'solid 1px #f0eeed',
              color: '#f0eeed',
              display: 'inline-block',
              fontSize: '0.75em',
              width: '8em',
              padding: '0.4em 0.25em',
              lineHeight: '1.2em',
              margin: 0,
              marginRight: '1em',
              marginTop: '0.66em',
              '&:hover': {
                backgroundColor: '#080830',
              },
            }}
          >
            <Typography sx={{ fontSize: '2em', lineHeight: '1em' }}>
              EXIT
            </Typography>
          </Button>

          <DialogTransaction
            title="Purchase TCu29"
            btn={
              <ButtonPrimary
                onClick={() => {
                  handleConfirmed();
                }}
                variant="text"
                sx={{
                  backgroundColor: '#e16b31',
                  borderRadius: '1em',
                  border: 'solid 1px #f0eeed',
                  color: '#f0eeed',
                  display: 'inline-block',
                  fontSize: '0.75em',
                  width: '12em',
                  padding: '0.4em 0.25em',
                  lineHeight: '1.2em',
                  margin: 0,
                  marginLeft: '1em',
                  marginTop: '0.66em',
                  '&:hover': {
                    backgroundColor: '#080830',
                  },
                }}
              >
                <Typography sx={{ fontSize: '2em', lineHeight: '1em' }}>
                  SET PRICE
                </Typography>
              </ButtonPrimary>
            }
            address={ADDRESS_TCU29SALE}
            abi={Tcu29SaleAbi}
            functionName="managerSetPrice"
            args={[inputWad?.toString()]}
          >
            <Typography sx={{ fontSize: '1.25em', lineHeight: '1em' }}>
              <br />
              Old Price: ${bnToCompact(priceTcu29, 3, 5)}
              <br />
              New Price: ${bnToCompact(inputWad, 3, 5)}
            </Typography>
          </DialogTransaction>
        </DialogContent>
      </Dialog>
    </>
  );
}
