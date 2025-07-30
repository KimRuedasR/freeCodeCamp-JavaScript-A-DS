let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];
let money = cid.reduce((sum, curr) => sum + curr[1], 0);

const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');

const checkPrice = (cashValue) => {
    if (isNaN(cashValue) || cashValue <= 0) {
        alert('Invalid payment amount');
    }
    else if (cashValue < price) {
        alert("Customer does not have enough money to purchase the item");
    }
    else if (cashValue === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
    }
    else {
        checkChange(cashValue);
    }
};


const checkChange = (cashValue) => {

    let change = Math.round((cashValue - price) * 100) / 100;
    let changeArr = [];
    let totalChangeGiven = 0;

    const DENOMINATIONS = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];

    for (let i = 0; i < DENOMINATIONS.length; i++) {
        let denomName = DENOMINATIONS[i][0];
        let denomValue = DENOMINATIONS[i][1];
        let drawerAmount = 0;

        for (let j = 0; j < cid.length; j++) {
            if (cid[j][0] === denomName) {
                drawerAmount = cid[j][1];
                break;
            }
        }
        let amountToGive = 0;

        while (change >= denomValue - 0.0001 && drawerAmount > 0) {
            change = Math.round((change - denomValue) * 100) / 100;
            drawerAmount = Math.round((drawerAmount - denomValue) * 100) / 100;
            amountToGive = Math.round((amountToGive + denomValue) * 100) / 100;
        }
        if (amountToGive > 0) {
            changeArr.push([denomName, amountToGive]);
            totalChangeGiven = Math.round((totalChangeGiven + amountToGive) * 100) / 100;
        }
    }

    if (change > 0) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    let totalLeft = 0;
    for (let i = 0; i < cid.length; i++) {
        let denomName = cid[i][0];
        let origAmount = cid[i][1];

        for (let k = 0; k < changeArr.length; k++) {
            if (changeArr[k][0] === denomName) {
                origAmount = Math.round((origAmount - changeArr[k][1]) * 100) / 100;
            }
        }
        totalLeft = Math.round((totalLeft + origAmount) * 100) / 100;
    }
let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];
let money = cid.reduce((sum, curr) => sum + curr[1], 0);

const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');

const checkPrice = (cashValue) => {
    if (isNaN(cashValue) || cashValue <= 0) {
        alert('Invalid payment amount');
    }
    else if (cashValue < price) {
        alert("Customer does not have enough money to purchase the item");
    }
    else if (cashValue === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
    }
    else {
        checkChange(cashValue);
    }
};


const checkChange = (cashValue) => {

    let change = Math.round((cashValue - price) * 100) / 100;
    let changeArr = [];
    let totalChangeGiven = 0;

    const DENOMINATIONS = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];

    for (let i = 0; i < DENOMINATIONS.length; i++) {
        let denomName = DENOMINATIONS[i][0];
        let denomValue = DENOMINATIONS[i][1];
        let drawerAmount = 0;

        for (let j = 0; j < cid.length; j++) {
            if (cid[j][0] === denomName) {
                drawerAmount = cid[j][1];
                break;
            }
        }
        let amountToGive = 0;

        while (change >= denomValue - 0.0001 && drawerAmount > 0) {
            change = Math.round((change - denomValue) * 100) / 100;
            drawerAmount = Math.round((drawerAmount - denomValue) * 100) / 100;
            amountToGive = Math.round((amountToGive + denomValue) * 100) / 100;
        }
        if (amountToGive > 0) {
            changeArr.push([denomName, amountToGive]);
            totalChangeGiven = Math.round((totalChangeGiven + amountToGive) * 100) / 100;
        }
    }

    if (change > 0) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    let totalLeft = 0;
    for (let i = 0; i < cid.length; i++) {
        let denomName = cid[i][0];
        let origAmount = cid[i][1];

        for (let k = 0; k < changeArr.length; k++) {
            if (changeArr[k][0] === denomName) {
                origAmount = Math.round((origAmount - changeArr[k][1]) * 100) / 100;
            }
        }
        totalLeft = Math.round((totalLeft + origAmount) * 100) / 100;
    }

    let changeString = changeArr.map(item => item[0] + ": $" + item[1].toFixed(2).replace(/\.00$/, "")).join(" ");

    if (totalLeft === 0) {
        changeDue.textContent = "Status: CLOSED" + (changeString ? " " + changeString : "");
        return;
    }

    changeDue.textContent = "Status: OPEN" + (changeString ? " " + changeString : "");
};

purchaseBtn.addEventListener('click', () => {
    checkPrice(Number(cash.value));
});

    let changeString = changeArr.map(item => item[0] + ": $" + item[1].toFixed(2).replace(/\.00$/, "")).join(" ");

    if (totalLeft === 0) {
        changeDue.textContent = "Status: CLOSED" + (changeString ? " " + changeString : "");
        return;
    }

    changeDue.textContent = "Status: OPEN" + (changeString ? " " + changeString : "");
};

purchaseBtn.addEventListener('click', () => {
    checkPrice(Number(cash.value));
});
