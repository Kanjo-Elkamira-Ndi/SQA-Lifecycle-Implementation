// Loan Calculator - [Kanjo Elkamira Ndi]

// Calculate Monthly Payment
function calculate_monthly_payment(principal, annual_rate, months) {

    if (principal <= 0 || annual_rate < 0 || months <= 0) {
        throw new Error("Invalid loan parameters");
    }

    const r = annual_rate / 12 / 100;

    if (r === 0) {
        return principal / months;
    }

    const payment =
        principal *
        (r * Math.pow(1 + r, months)) /
        (Math.pow(1 + r, months) - 1);

    return payment;
}


// Calculate Total Interest
function calculate_total_interest(principal, annual_rate, months) {

    const monthly_payment =
        calculate_monthly_payment(principal, annual_rate, months);

    return (monthly_payment * months) - principal;
}


// Check Loan Eligibility
function is_eligible(monthly_income, monthly_payment) {

    return monthly_payment <= (0.33 * monthly_income);
}


// Generate Amortization Schedule
function generate_amortization_schedule(principal, annual_rate, months) {

    const r = annual_rate / 12 / 100;
    const payment = calculate_monthly_payment(principal, annual_rate, months);

    let balance = principal;
    const schedule = [];

    for (let month = 1; month <= months; month++) {

        const interest_part = balance * r;
        const principal_part = payment - interest_part;

        balance -= principal_part;

        schedule.push({
            month,
            payment,
            principal_part,
            interest_part,
            remaining_balance: Math.max(balance, 0)
        });
    }

    return schedule;
}

module.exports = {
    calculate_monthly_payment,
    calculate_total_interest,
    is_eligible,
    generate_amortization_schedule
};