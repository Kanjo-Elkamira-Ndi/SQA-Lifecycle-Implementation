// feeCalculator_kanjo_elkamira_ndi.js
// Author: Kanjo Elkamira Ndi
// Description: This module calculates transaction fees based on the type of transaction and the amount involved.

function calculateFee(transactionType, amount) {
    if (amount <= 0) {
        throw new Error("Amount must be greater than zero");
    }

    switch (transactionType) {

        case "MOBILE_MONEY":
            if (amount <= 50000) {
                let fee = amount * 0.005;
                return fee < 50 ? 50 : fee;
            } else if (amount <= 500000) {
                let fee = amount * 0.003;
                return fee > 1500 ? 1500 : fee;
            } else {
                throw new Error("Amount exceeds Mobile Money limit");
            }

        case "SWIFT":
            let swiftFee = 3500 + (amount * 0.001);
            return swiftFee > 25000 ? 25000 : swiftFee;

        case "ATM_OWN":
            return 0;

        case "ATM_OTHER":
            return 150;

        default:
            throw new Error("Invalid transaction type");
    }
}
module.exports = { calculateFee };