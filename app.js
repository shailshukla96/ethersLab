
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
        console.log('this is the latest block\'s Info = ', block);
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
const transactionResponse = async () => {
    const txResponse = await provider.getTransaction('0x425b74ff4090bad9dacd972f96646f1f136b7dee39be06910463c245761ad493');
    console.log('my transaction reasponse = ', txResponse);
}

const transactionRecipt = async () => {
    const txRecipt = await provider.getTransactionReceipt('0x425b74ff4090bad9dacd972f96646f1f136b7dee39be06910463c245761ad493');
    console.log('my transaction recipt = ', txRecipt);
}


//get balanceof this address in ethers
//0x42EB768f2244C8811C63729A21A3569731535f06
const getBalance = () => {
    provider.getBalance('0x42EB768f2244C8811C63729A21A3569731535f06').then((balance) => {
        console.log('this is the balance = ', balance);
    });
}

//get Nonce of same address
const getNonce = () => {
    provider.getTransactionCount('0x42EB768f2244C8811C63729A21A3569731535f06').then((nonce) => {
        console.log("this is the nonce", nonce);
    });
}

//create an account and use the account in the next functions
const createAccount = () => {
    wallet = ethers.Wallet.createRandom();
    walletAddr = wallet;
    console.log('this is my wallet there are many like it but this one is mine', wallet);
}

//take the mneumonic of the account and generate a wallet object, from the object list the address and privatekey
const accountFromMneumonic = () => {
    let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
    console.log('this is the address of the mneumonic', mnemonicWallet.signingKey.address);
    console.log('this is the private key of the mneumonic', mnemonicWallet.signingKey.privateKey);
}


//encrypt the wallet with a password, bonus points if you have a progress
async function encrypt() {
    let wallet = ethers.Wallet.fromMnemonic(mnemonic);
    let password = 'abcde12345';
    const encrypted = await wallet.encrypt(password);
    encryptedWallet = encrypted;
    console.log(encrypted);
}

//decrypt the encrypted wallet 
async function decrypt() {
    let password = 'abcde12345';
    console.log(encryptedWallet);
    const wallet = await ethers.Wallet.fromEncryptedJson(encryptedWallet, password);
    console.log('decrypted wallet', wallet);
}


/**
 * bonus signing and verifying messages, and send a transaction to a neighbor
 */ 

//sign a message 
const sign = async() => {
    let wallet = ethers.Wallet.fromMnemonic(mnemonic);
    signedMessage = await wallet.signMessage("life");
    sig = signedMessage;
    console.log('this is me signing my life away', signedMessage);
    
}

//recover the signed message
const recoverSignature = async() => {
    let signingAddress = ethers.utils.verifyMessage("life", sig);
    console.log('signing address', signingAddress);
}