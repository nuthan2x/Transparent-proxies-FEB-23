require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks : {
  
      goerli: {
        url: `https://rpc.ankr.com/eth_goerli`,
        accounts: [""]
      }
  }
};
