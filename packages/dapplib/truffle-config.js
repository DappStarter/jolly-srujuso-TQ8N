require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong rice stick exchange inflict kangaroo army gather'; 
let testAccounts = [
"0xf68c0243f0c2197a95c3a950b91922848b5060c7a52ea102cb3a881e1e275875",
"0xfad1b47cc0aa3e29177262864e2590301c53190c2ca924155b353025debe58c5",
"0x441da512158accb7a176ffb85537aba195b61bd7f59d42a3fc7ca8e3579a1c5e",
"0x6cf96d96e85899ba04103d7c998bca276a8eb970f8d5411a546e56d487dbbf51",
"0x1570a6e053b2eb62404fe833f99d4103bd393ccd19413342fa911fca1994cbe6",
"0xaf373a8d595d40d62bb8337db436bad93a8ca19472ec1ded18c4be12c180351c",
"0x55a61b923c54e728c153531b388cd22e2fef11b970305f864758b267b51bdd72",
"0xdc7f40bb1d9caeeb5d6f8f8011f590eb321c589816b749e06045926377f6af54",
"0xb27b21213d6a3df6557d1c84f6d9f1ea144b4625851c3be254d2b2ded6395424",
"0xc785238a85a49bf99b47c1dfee88d9ff8d00ba65b52f47b5c9d09ba5b4c12e1d"
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

