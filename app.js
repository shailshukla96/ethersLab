
//get rinkeby provider
let provider = ethers.getDefaultProvider('rinkeby');
let latestBlock;
let walletAddr = '0x0B5e91D571848fdd0b9991357085FbC4aCCf9D97';
let mnemonic = 'result future boss nuclear cross flee inch olive youth pride seminar jeans';
let encryptedWallet;
let sig;
//get latest block number
const getBlock = () => {
    provider.getBlock(latestBlock).then((block) => {
        console.log('this is the latest block\'s Info = ', block)
    });
}

//get the current blockNumber
const blockNumber = async () => {
    const blockNumber = await provider.getBlockNumber();
    latestBlock = blockNumber;
    console.log('this is the block number = ', blockNumber);
}

// get the gas price and convert it to decimal
const gasPrice = async () => {
    const gasPrice = await provider.getGasPrice();
    console.log('this is the current gas price =', gasPrice.toString());
}

//get Response then Recipt of this transaction Hash 
//0x425b74ff4090bad9dacd972f96646f1f136b7dee39be06910463c245761ad493

const transactionReasponse = async () => {
    console.log('my transaction reasponse = ', txReasponse)
}


const transactionRecipt = async () => {
    console.log('my transaction recipt = ', txRecipt)
}


// of this address in ethers
//0x42EB768f2244C8811C63729A21A3569731535f06
const getBalance = () => {
    console.log('this is the balance = ', balance)
}

//get Nonce of same address
const getNonce = () => {
    console.log("this is the nonce", nonce)
}

//create an account and use the account in the next functions
const createAccount = () => {
    console.log('this is my wallet there are many like it but this one is mine', wallet)
}

//take the mneumonic of the account and generate a wallet object, from the object list the address and privatekey
const accountFromMneumonic = () => {
    console.log('this is the address of the mneumonic')
    console.log('this is the private key of the pneumonic')
}


//encrypt the wallet with a password, bonus points if you have a progress
const encrypt = () => {
    console.log('encrypted wallet', encrypted)


}

//decrypt the encrypted wallet 
const decrypt = () => {
    console.log('decrypted wallet', wallet)

}


/// bonus signing and verifying messages, and send a transaction to a neighbor

// use this endpoint


//sign a message 
const sign = () => {
    console.log('this is me signing my life away', signedMessage)
}

//recover the signed message
const recoverSignature = () => {
    console.log('signing address', signingAddress)

}