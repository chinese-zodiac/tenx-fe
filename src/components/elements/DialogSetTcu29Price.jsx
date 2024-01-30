import {
  Button,
  DialogContent,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { BigNumber, ethers } from 'ethers';
import { parseEther } from 'ethers/lib/utils.js';
import { cloneElement, useState } from 'react';
import { useAccount, useBalance, useContractRead } from 'wagmi';
import IERC20Abi from '../../abi/IERC20.json';
import Tcu29SaleAbi from '../abi/Tcu29Sale.json';
import { bnToCompact } from '../../utils/bnToFixed';
import EtherTextField from '../elements/EtherTextField';
import DialogTransaction from './DialogTransaction';

export default function DialogSetTcu29Price({ btn, sx }) {
  const {
    data: dataPrice,
    isError: isErrorPrice,
    isLoading: isLoadingPrice,
  } = useContractRead({
    address: tokenAddress,
    abi: IERC20Abi,
    functionName: 'price',
    watch: true,
    args: [address, LOCATION_TOWN_SQUARE],
    enabled: !!address,
  });

  const price =
    !isLoadingPrice && !isErrorPrice && !!dataPrice
      ? dataPrice
      : parseEther('0');
}
