import { TempleWallet } from '@temple-wallet/dapp';
import React from 'react';

import './App.css';
import logo from './logo.svg';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      wallet: undefined,
      tezos: undefined,
      accountPkh: undefined,
    };
  }

  connectWallet = async () => {
    const available = await TempleWallet.isAvailable();
    if (!available) {
      console.error('Temple Wallet not installed');
    }
    const wallet = new TempleWallet('Create Tezos Dapp');
    await wallet.connect('ghostnet');
    const tezos = wallet.toTezos();
    const accountPkh = await tezos.wallet.pkh();
    this.setState({
      ...this.state,
      wallet,
      tezos,
      accountPkh,
    });
  };

  mintTokens = async () => {
    this.setState({
      ...this.state,
      loading: true,
    });

    const counter = await this.state.tezos.wallet.at(
      'KT1Quos8JNLs94SCTiyN6GdrqeT77yCATS6M'
    );
    const operation = await counter.methods
      .mint(this.state.accountPkh, 1000)
      .send();
    await operation.confirmation();

    this.setState({
      ...this.state,
      loading: false,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.accountPkh ? (
            <div className="App-connected">
              <div className="App-address">
                Connected with {this.state.accountPkh}
              </div>
              <button
                className="App-button"
                disabled={this.state.loading}
                onClick={() => this.mintTokens()}
              >
                {this.state.loading ? 'Loading...' : 'Mint some tokens'}
              </button>
            </div>
          ) : (
            <div className="App-not-connected">
              <button
                className="App-button"
                onClick={() => this.connectWallet()}
              >
                Connect Wallet
              </button>
            </div>
          )}
        </header>
      </div>
    );
  }
}
