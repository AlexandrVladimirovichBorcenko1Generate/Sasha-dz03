function getSmallerNumber(a, b) {
    return a < b ? a : b;
}

var result1 = getSmallerNumber(10, 5);
console.log(result1);
var result2 = getSmallerNumber(-3, 2);
console.log(result2);

//////////////////////////////////////////////////////

function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

var result3 = calculatePower(2, 3);
console.log(result3);
var result4 = calculatePower(3, 4);
console.log(result4);

//////////////////////////////////////////////////////

const sendSMS = (phone, message) => {
    if (message) {
        console.log(`Отправка SMS на номер ${phone}: "${message}".`);
    } else {
        console.log(`Отправка SMS на номер ${phone}: "Пустое сообщение."`);
    }
};

const phoneNumber = "0990057595";
const message = "Привет,";
sendSMS(phoneNumber, message);

//////////////////////////////////////////////////////////

const bankAccount = {
    accountNumber: "129490240",
    balance: 200,

    sendTransfer: function(recipient, Amount) {
        setTimeout(() => {
            if (this.balance >= Amount) {
                console.log(`с вашего аккаунта сняты средства ${Amount} и переведены на счет ${recipient}.`);
                this.balance -= Amount;
                console.log(`Ваш баланс: ${this.balance}.`);
            } else {
                console.log(`На вашем счете недостаточно средств.`);
            }
        }, 2000);
    }
};

const recipient = "87078087097";
const amount = 100;
bankAccount.sendTransfer(recipient, amount );

const recipient2 = "5555555555";
const Amount2 = 250;
bankAccount.sendTransfer(recipient2, Amount2);
