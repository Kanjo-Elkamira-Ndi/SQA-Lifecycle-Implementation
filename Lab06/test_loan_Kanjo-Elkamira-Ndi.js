const assert = require("assert");

const loan = require("./loan_calculator_Kanjo-Elkamira-Ndi");

// 1 Normal Calculation
function test_normal_calculation() {

    const payment =
        loan.calculate_monthly_payment(5000000, 8, 24);

    assert(payment > 0);
}


// 2 Zero Interest
function test_zero_interest() {

    const payment =
        loan.calculate_monthly_payment(1200000, 0, 12);

    assert.strictEqual(payment, 100000);
}


// 3 Eligibility Boundary
function test_eligibility_boundary() {

    const result =
        loan.is_eligible(1000000, 330000);

    assert.strictEqual(result, true);
}


// 4 Eligibility Fail
function test_eligibility_fail() {

    const result =
        loan.is_eligible(1000000, 400000);

    assert.strictEqual(result, false);
}


// 5 Negative Principal
function test_negative_principal() {

    assert.throws(() => {
        loan.calculate_monthly_payment(-500000, 8, 12);
    });
}


// 6 Zero Months
function test_zero_months() {

    assert.throws(() => {
        loan.calculate_monthly_payment(500000, 8, 0);
    });
}


// 7 Amortization Final Balance
function test_amortization_balance() {

    const schedule =
        loan.generate_amortization_schedule(1000000, 5, 12);

    const final_balance =
        schedule[schedule.length - 1].remaining_balance;

    assert(Math.abs(final_balance) < 1);
}


// 8 Total Interest
function test_total_interest() {

    const interest =
        loan.calculate_total_interest(1000000, 5, 12);

    assert(interest > 0);
}


function runTests() {

    test_normal_calculation();
    test_zero_interest();
    test_eligibility_boundary();
    test_eligibility_fail();
    test_negative_principal();
    test_zero_months();
    test_amortization_balance();
    test_total_interest();

    console.log("✅ All unit tests passed");
}

runTests();