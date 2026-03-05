const assert = require("assert");

const loan = require("./loan_calculator_Kanjo-Elkamira-Ndi");


// 1 Full Pipeline Test
function test_full_pipeline() {

    const payment =
        loan.calculate_monthly_payment(2000000, 7, 12);

    const eligible =
        loan.is_eligible(1000000, payment);

    const schedule =
        loan.generate_amortization_schedule(2000000, 7, 12);

    assert(schedule.length === 12);
}


// 2 Payment Consistency
function test_payment_consistency() {

    const payment =
        loan.calculate_monthly_payment(1000000, 5, 12);

    const schedule =
        loan.generate_amortization_schedule(1000000, 5, 12);

    assert(Math.abs(schedule[0].payment - payment) < 1);
}


// 3 Principal Sum Verification
function test_principal_sum() {

    const principal = 1000000;

    const schedule =
        loan.generate_amortization_schedule(principal, 5, 12);

    const total_principal =
        schedule.reduce((sum, row) => sum + row.principal_part, 0);

    assert(Math.abs(total_principal - principal) < 1);
}


function runIntegrationTests() {

    test_full_pipeline();
    test_payment_consistency();
    test_principal_sum();

    console.log("✅ All integration tests passed");
}

runIntegrationTests();