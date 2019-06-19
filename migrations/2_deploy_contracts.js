var trueLibra = artifacts.require("./trueLibra.sol");

    const name="True CLP token"
    const symbol="tCLP"
    const decimals = 0

module.exports = function (deployer) {


    deployer.deploy(trueLibra, name, symbol, decimals);
  // }).then(function () {
  //   return deployer.deploy(SocialPet, Petregistry.address, Vultur.address);
  // })
};

