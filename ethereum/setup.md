geth account new --datadir /data/keystore 


Public address of the key:   0x30b6e5Bf08e60fFfdf3F16B44abFeD9c58295eba
Path of the secret key file: /data/keystore/keystore/UTC--2022-12-02T23-35-14.897547026Z--30b6e5bf08e60fffdf3f16b44abfed9c58295eba




geth --datadir /data --goerli --syncmode snap

sudo resize2fs /dev/vda1


geth --dev --http --http.api eth,web3,personal,net --http.corsdomain "http://remix.ethereum.org" --datadir /data

---THIS IS IT
geth --http --http.addr=0.0.0.0 --http.api=eth,net,web3,personal --ws --ws.addr=0.0.0.0 --datadir=/data

eth.accounts
eth.coinbase
eth.getBalance(eth.accounts[0])
web3.fromWei(eth.getBalance(eth.coinbase))
personal.newAccount()
eth.sendTransaction({from: eth.coinbase, to: eth.accounts[1], value: web3.toWei(50, "ether")})

eth.getTransaction("0x9d2c1b7cbad420a0a29122e91bffeb744e63172dab0f1d4a95b1c312b3ba8251")



geth attach http://10.98.25.58:8545
geth attach http://10.108.11.16:8545

geth attach http://10.106.207.143:8545


geth –identity “restrike” init /tmp/genesis.json –datadir /data/restrikeprivatechain
geth --datadir /data --networkid 1114 console 2 --rpc --rpcport 8543 --rpcaddr 127.0.0.1

geth -http --http.api eth,web3,personal,net --http.corsdomain "http://remix.ethereum.org" --datadir /data


     #     "--http",
          #     "--http.addr=0.0.0.0",
          #     "--http.vhosts=geth-mainnet-full",
          #     "--http.api=eth,net,web3,txpool",
          #     "--ws",
          #     "--ws.addr=0.0.0.0",
          #     "--datadir=/data",


EOA (Externally Owned Account) -> Private Key
Contract Account -> Code controlled


Ethereum Transaction 
(Transfer Value)
(Create a new smart contract : send transaction that includes the contract's code)
(Trigger Contract: Example (Money to ICO contract account address, Activates contract that sends you tokens in return. ))

ICO : Initial Coin Offering

Eth wallet
transfer value
Initialize smart contract.

Wallet is sometimes called client or node.
full node 
light node

Full
Geth
Mist
Parity

Light

Hardwallet
Not smart conract wallets

upcode


ERC 721 -  (NFT)
ERC 20 - (FT) -> ERC 777
ERC 1155 - (Multiple Token Standard) (Fungible, Non Fungible, Semi Fungible all in one)


zero-knowledge proof



