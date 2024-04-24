require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/-TvD4yfDsiwdaJOjBNC9GJ9XyqWcr3Hb",
      accounts: []
    }
  }
};
