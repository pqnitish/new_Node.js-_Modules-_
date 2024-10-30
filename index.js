const crypto = require("crypto");
const { v4: uuidv4} = require("uuid");

// encryption setting
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
// encrypt function
function encrypt(text){
    let cipher = crypto.createCipheriv(algorithm,key,iv);
    let encrypted = cipher.update(text,'utf8','hex');
    encrypted +=cipher.final('hex');
    return encrypted;
}
// decrypt function
function decrypt(encryptedText){
    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText,'utf8','hex');
    decrypted += decipher.final('utf8');
}
const textToBeEncrypted = "Hello, Good Morning";
const encryptedText = encrypt(textToBeEncrypted);
console.log(`Encrpted Text ${encryptedText}`);

//Decryption
let decryptedText = decrypt(encryptedText);
console.log(`decrypted Text ${decryptedText}`);
// generate UUID
let randomUUID = uuidv4();
console.log("Random UUID:", randomUUID)





