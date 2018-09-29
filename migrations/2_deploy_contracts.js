


var LoonieCrowdsale = artifacts.require("./LoonieCrowdsale.sol");
var LoonieToken = artifacts.require("./LoonieToken.sol");

module.exports =async function(deployer,network, accounts) {
 
    const _rate = 25000; // rate of conversion
    const _name = "LoonieToken";
	const _symbol = "LNI";
	const _decimals = 18;
	const _wallet = accounts[0];
	

  deployer.deploy(LoonieToken, _name, _symbol, _decimals, {gas: 2000000}).then(async() =>{
  	const depTok = await LoonieToken.deployed();
  	await deployer.deploy(LoonieCrowdsale,
              _rate,
              wallet, // wallet for sending the funds
              depTok,            
              {gas: 2000000});
  });
 
return true;
};


  
    
    

 