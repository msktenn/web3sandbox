geth account new --datadir /data/keystore 


Public address of the key:   0x30b6e5Bf08e60fFfdf3F16B44abFeD9c58295eba
Path of the secret key file: /data/keystore/keystore/UTC--2022-12-02T23-35-14.897547026Z--30b6e5bf08e60fffdf3f16b44abfed9c58295eba




geth --datadir /data --goerli --syncmode snap

sudo resize2fs /dev/vda1


geth --dev --http --http.api eth,web3,personal,net --http.corsdomain "http://remix.ethereum.org" --datadir /data


eth.accounts
eth.coinbase
eth.getBalance(eth.accounts[0])
web3.fromWei(eth.getBalance(eth.coinbase))
personal.newAccount()
eth.sendTransaction({from: eth.coinbase, to: eth.accounts[1], value: web3.toWei(50, "ether")})

eth.getTransaction("0x9d2c1b7cbad420a0a29122e91bffeb744e63172dab0f1d4a95b1c312b3ba8251")



geth attach http://10.108.11.16:8545

geth attach http://10.106.207.143:8545