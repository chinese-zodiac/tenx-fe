import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { bsc } from 'viem/chains';
import { WagmiConfig } from 'wagmi';

//WAGMI + WALLETCONNECT
if (!import.meta.env.VITE_WALLETCONNECT_CLOUD_ID) {
  throw new Error('You need to provide WALLETCONNECT_CLOUD_ID env variable');
}
const projectId = import.meta.env.VITE_WALLETCONNECT_CLOUD_ID;
const chains = [bsc];
const metadata = {
  name: '10X Launchpad',
  description:
    '10X Your Token With A $10,000 Locked Liquidity Grant With The TenX Launchpad Powered By Pancakeswap.',
  url: 'https://10x.cz.cash',
  icons: ['https://10x.cz.cash/images/logo.png'],
};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

function App({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}

export default App;
