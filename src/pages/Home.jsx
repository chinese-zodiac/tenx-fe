import React, { useState } from 'react';
import { useAccount, useBalance, useContractRead } from 'wagmi';
import ConnectWallet from '../components/elements/ConnectWallet';
import { Typography, Box, Stack, TextField, Slider } from '@mui/material';
import FooterArea from '../components/layouts/FooterArea';
import { LINK_TELEGRAM } from '../constants/links';
import ButtonPrimary from '../components/styled/ButtonPrimary';
import { ADDRESS_TENXLAUNCH, ADDRESS_ZERO } from '../constants/addresses';
import { parseEther } from 'viem';
import TenXLaunchAbi from '../abi/TenXLaunch.json';
import DialogTransaction from '../components/styled/DialogTransaction';
import TenXToken from '../components/styled/TenXToken';
import useTenXToken from '../hooks/useTenXToken';
import SliderPercentagePicker from '../components/styled/SliderPercentagePicker';
import TextFieldStyled from '../components/styled/TextFieldStyled';
import TenXTokenList from '../components/elements/TenXTokenList';

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [name, setName] = useState('TokenX');
  const [symbol, setSymbol] = useState('TKX');
  const [buyTax, setBuyTax] = useState(125);
  const [buyBurn, setBuyBurn] = useState(50);
  const [sellTax, setSellTax] = useState(175);
  const [sellBurn, setSellBurn] = useState(75);

  return (
    <>
      <ConnectWallet />
      <Box
        as="img"
        src="./logo.png"
        sx={{
          width: '10em',
          height: '10em',
          marginTop: '1em',
        }}
      />
      <Typography as="h1" sx={{ fontSize: '2em' }}>
        10X Launchpad
      </Typography>
      <Typography
        as="p"
        sx={{
          maxWidth: '360px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1em',
          lineHeight: '1.2em',
        }}
      >
        10X Your Token With A $10,000 Locked Liquidity Grant With The TenX
        Launchpad Powered By Pancakeswap.
        <br />
        <br />
        Ask Questions On Telegram:
        <br />
        <Typography
          as="a"
          href={LINK_TELEGRAM}
          target="_blank"
          rel="noreferrer"
          sx={{ color: '#f0eeed' }}
        >
          {LINK_TELEGRAM}
        </Typography>
      </Typography>
      <br />
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        rowGap={2}
      >
        <TextFieldStyled
          text={name}
          setText={setName}
          maxChar={10}
          width="8em"
          label="Token Name"
        />
        <TextFieldStyled
          text={symbol}
          setText={setSymbol}
          maxChar={5}
          width="5em"
          label="Ticker"
        />
        <SliderPercentagePicker
          pct={buyTax}
          setPct={setBuyTax}
          label="Buy Tax"
        />
        <SliderPercentagePicker
          pct={buyBurn}
          setPct={setBuyBurn}
          label="Buy Burn"
        />
        <SliderPercentagePicker
          pct={sellTax}
          setPct={setSellTax}
          label="Sell Tax"
        />
        <SliderPercentagePicker
          pct={sellBurn}
          setPct={setSellBurn}
          label="Sell Burn"
        />
      </Stack>
      <br />
      {!!address ? (
        <DialogTransaction
          title={'LAUNCH ' + symbol}
          address={ADDRESS_TENXLAUNCH}
          abi={TenXLaunchAbi}
          functionName="launchToken"
          args={[
            name, //name
            symbol, //symbol
            parseEther('5000'), //czusdWad
            address, //taxReceiver
            buyTax, //buyTax
            buyBurn, //buyBurn
            sellTax, //sellTax
            sellBurn, //sellburn
          ]}
          btn={
            <ButtonPrimary
              onClick={() => {
                handleConfirmed();
              }}
              sx={{
                width: '9em',
                marginTop: '0.66em',
                fontSize: '1.5em',
                position: 'relative',
                fontWeight: 'bold',
                textTransform: 'none',
                color: '#e16b31',
                borderRadius: '1.5em',
                border: 'solid 5px #e16b31',
                backgroundColor: '#f3f3f3',
                '&:hover': {
                  backgroundColor: '#080830',
                },
              }}
            >
              LAUNCH NOW 🚀
            </ButtonPrimary>
          }
        >
          <Typography sx={{ fontSize: '1.25em', lineHeight: '1em' }}>
            Send the Launch transaction to your wallet that will immediately
            launch your new token with the parameters below. The Launch
            transaction costs approximately 0.015 BNB. Taxes will be sent to
            your currently connected wallet.
            <br />
            <br />
            Name: {name}
            <br />
            Symbol: {symbol}
            <br />
            Liquidity: $10,000
            <br />
            Supply: 5,000 {symbol}
            <br />
            Buy Tax: {(buyTax / 100).toFixed(2)}%<br />
            Buy Burn: {(buyBurn / 100).toFixed(2)}%<br />
            Sell Tax: {(sellTax / 100).toFixed(2)}%<br />
            Sell Burn: {(sellBurn / 100).toFixed(2)}%
            <br />
            <br />
            Tax Receiver: {address.substring(0, 8)}...{address.substring(36)}
          </Typography>
        </DialogTransaction>
      ) : (
        <ButtonPrimary
          onClick={() => {
            alert('Connect your BSC (BNB Smart Chain) Wallet first.');
          }}
          sx={{
            width: '9em',
            marginTop: '0.66em',
            fontSize: '1.5em',
            position: 'relative',
            fontWeight: 'bold',
            textTransform: 'none',
            color: '#e16b31',
            borderRadius: '1.5em',
            border: 'solid 5px #e16b31',
            backgroundColor: '#f3f3f3',
            '&:hover': {
              backgroundColor: '#080830',
            },
          }}
        >
          LAUNCH NOW 🚀
        </ButtonPrimary>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography as="h1" sx={{ fontSize: '2em' }}>
        10X Tokens
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        flexWrap="wrap"
        rowGap={1}
      >
        <TenXTokenList start={0} count={50} />
      </Stack>
      <FooterArea />
    </>
  );
}
