console.log("GeneratingHashes")

const ethWallet = require('ethereumjs-wallet');
for(let index=0; index < 100; index++) {
    let addressData = ethWallet['default'].generate();
    console.log(addressData.getPrivateKeyString());
};
