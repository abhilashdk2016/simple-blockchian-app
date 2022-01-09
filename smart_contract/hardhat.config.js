// https://eth-ropsten.alchemyapi.io/v2/8X8AgZZFEhwYDYpAeJ8xXR7fVLo_-xwq

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8X8AgZZFEhwYDYpAeJ8xXR7fVLo_-xwq',
      accounts: [ 'e039232d9700167bdd0378da9b5b36241e1c52de7f93473b71474f49918aae69']
    }
  }
}