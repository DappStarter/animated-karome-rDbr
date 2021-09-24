require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember history include kiwi flock gentle'; 
let testAccounts = [
"0x5c895e29e300a1e419cf1bb3fa69f00a200e0fb3ed3bf396d00c826168385aa8",
"0x10aa01314e5599a5d2c5c19ee8e614f3978668dd9313cc2dd2052ba8abe3273e",
"0xaf30e4ec0b5ec5756e1b63f6b04cc1ef4e69c2c378f706e18520eac261ce5f56",
"0x7ef7b392b3db371756d84bbd539d6d000ab513f1bdc4453b01f2a81931af8f05",
"0xf29aa57d1e595d22d8841eb043f692a0481949402803451b0efe5b33fa5c8e4c",
"0xccb8825dac4aa58bc6c453322c2521faa898854b7e8b98a6c871a6fc97efa9c1",
"0x267f249a0c5b5835901ae1c73684380d0d2a72a84a870bb957fcd182f5681521",
"0xd59ee060e261b10054fe917e28bceb43db0758db6b6a43089d1fc24520b99cb5",
"0xf16402fcbc339dde7e2c64fcda62686a7a79429a6ffdc160b7e5dad6e7e60609",
"0xc9cc3962fc0a4b20f8e836c0cdfe3e53f7334504c4c2a0d6ac64b751deaacf52"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

