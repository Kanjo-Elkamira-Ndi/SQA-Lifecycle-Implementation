// feeCalculator_kanjo_elkamira_ndi.test.js
// Author: Kanjo Elkamira Ndi

const {calculateFee} = require("./feeCalculator_kanjo_elkamira_ndi.js");

describe("Banking Fee Calculator Tests", () => {

    // Author: Kanjo Elkamira Ndi
    test("Mobile Money low range normal case", () => {
        expect(calculateFee("MOBILE_MONEY", 10000)).toBe(50);
    });

    // Author: Kanjo Elkamira Ndi
    test("Mobile Money low range above minimum", () => {
        expect(calculateFee("MOBILE_MONEY", 20000)).toBe(100);
    });

    // Author: Kanjo Elkamira Ndi
    test("Mobile Money boundary 50,000", () => {
        expect(calculateFee("MOBILE_MONEY", 50000)).toBe(250);
    });

    // Author: Kanjo Elkamira Ndi
    test("Mobile Money high range normal case", () => {
        expect(calculateFee("MOBILE_MONEY", 100000)).toBe(300);
    });

    // Author: Kanjo Elkamira Ndi
    test("Mobile Money high range capped at 1500", () => {
        expect(calculateFee("MOBILE_MONEY", 500000)).toBe(1500);
    });

    // Author: Kanjo Elkamira Ndi
    test("SWIFT normal case", () => {
        expect(calculateFee("SWIFT", 1000000)).toBe(4500);
    });

    // Author: Kanjo Elkamira Ndi
    test("SWIFT capped at 25,000", () => {
        expect(calculateFee("SWIFT", 50000000)).toBe(25000);
    });

    // Author: Kanjo Elkamira Ndi
    test("ATM own bank is free", () => {
        expect(calculateFee("ATM_OWN", 100000)).toBe(0);
    });

    // Author: Kanjo Elkamira Ndi
    test("ATM other bank flat 150", () => {
        expect(calculateFee("ATM_OTHER", 100000)).toBe(150);
    });

    // Author: Kanjo Elkamira Ndi
    test("Amount = 1 FCFA Mobile Money", () => {
        expect(calculateFee("MOBILE_MONEY", 1)).toBe(50);
    });

    // Author: Kanjo Elkamira Ndi
    test("Negative amount throws error", () => {
        expect(() => calculateFee("MOBILE_MONEY", -100)).toThrow();
    });

    // Author: Kanjo Elkamira Ndi
    test("Zero amount throws error", () => {
        expect(() => calculateFee("SWIFT", 0)).toThrow();
    });

    // Author: Kanjo Elkamira Ndi
    test("Invalid transaction type throws error", () => {
        expect(() => calculateFee("UNKNOWN", 1000)).toThrow();
    });

});