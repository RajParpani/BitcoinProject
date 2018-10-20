const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'cereal life olympic desert vanish over gorilla also garlic coil stay treat',
  'https://rinkeby.infura.io/v3/299bad4aa38e4088ac6d5d24b3df98bf'
  );

  const web3 = new Web3(provider);

  const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

     const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '5000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
  };
  deploy();
