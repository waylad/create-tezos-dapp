import { TempleWallet } from '@temple-wallet/dapp';
// import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';

import './App.css';
import logo from './logo.svg';

function App() {
  // const [state, setState] = useState({
  //   wallet: undefined,
  //   tezos: undefined,
  //   accountPkh: undefined,
  // });

  const state = {
    wallet: undefined,
    tezos: undefined,
    accountPkh: undefined,
  };

  const connectWallet = async () => {
    const available = await TempleWallet.isAvailable();
    if (!available) {
      // toast.error('Temple Wallet not installed');
    }
    const wallet = new TempleWallet('Create Tezos Dapp');
    await wallet.connect('ghostnet');
    const tezos = wallet.toTezos();
    const accountPkh = await tezos.wallet.pkh();
    // toast.success('Connected to Ghostnet');
    // setState({
    //   ...state,
    //   wallet,
    //   tezos,
    //   accountPkh,
    // });
  };

  return (
    <div className="App">
      {/* <Toaster /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {state.accountPkh ? (
          <div>{state.accountPkh}</div>
        ) : (
          <div className="App-button-connect" onClick={() => connectWallet()}>
            Connect Wallet
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
