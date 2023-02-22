// scripts/deploy.js
// npx hardhat run scripts/deploy.js

const { upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box...");
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  console.log("Box deployed to:", box.address);

  let getInplementationAddress = await upgrades.erc1967.getImplementationAddress(box.address);
  console.log('getInplementationAddress: ', getInplementationAddress);
  let getAdminAddress = await upgrades.erc1967.getAdminAddress(box.address)
  console.log('getAdminAddress: ', getAdminAddress);
  
  
  // console.log("getAdminAddress", await upgrades.erc1967.getBeaconAddress(box.address))

  // console.log(await upgrades.erc1967.getImplementationAddress(box.address), "getInplementationAddress")
  // console.log(await upgrades.erc1967.getAdminAddress(box.address), "getAdminAddress")}
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


  // npx hardhat verify --network goerli <address> <unlock time>
