import { TempleWallet } from '@temple-wallet/dapp';
import React from 'react';

import './App.css';
import logo from './logo.svg';

type IProps = {};

type IState = {
  loading: boolean;
  wallet?: TempleWallet;
  tezos?: any;
  accountPkh?: string;
};

export class App extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      loading: false,
      wallet: undefined,
      tezos: undefined,
      accountPkh: undefined,
    };
  }

  connectWallet = async (): Promise<void> => {
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

  mintTokens = async (): Promise<void> => {
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

  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.accountPkh ? (
            <div className="App-connected">
              <div className="App-address">
                Connected with {this.state.accountPkh}
              </div>
              <div className="App-button" onClick={() => this.mintTokens()}>
                Mint some tokens
              </div>
            </div>
          ) : (
            <div className="App-not-connected">
              <div className="App-button" onClick={() => this.connectWallet()}>
                Connect Wallet
              </div>
            </div>
          )}
        </header>
      </div>
    );
  }
}
