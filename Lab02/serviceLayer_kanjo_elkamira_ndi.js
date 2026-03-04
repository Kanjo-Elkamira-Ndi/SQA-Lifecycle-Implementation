// serviceLayer_kanjo_elkamira_ndi.js
// Author: Kanjo Elkamira Ndi
// Description: This module implements the service layer for managing customer information, including validation and business logic.

class ServiceLayer {
    constructor(dataLayer) {
        this.dataLayer = dataLayer;
    }

    validateCustomer(customer) {
        const idRegex = /^CAM\d{6}$/;
        const phoneRegex = /^[62]\d{8}$/;
        const validAccounts = ["Savings", "Current", "Fixed Deposit"];

        if (!idRegex.test(customer.customer_id)) {
            throw new Error("Invalid customer ID format");
        }

        if (!phoneRegex.test(customer.phone)) {
            throw new Error("Invalid phone number");
        }

        if (!validAccounts.includes(customer.account_type)) {
            throw new Error("Invalid account type");
        }

        if (this.dataLayer.getCustomer(customer.customer_id)) {
            throw new Error("Duplicate customer ID");
        }
    }

    addCustomer(customer) {
        this.validateCustomer(customer);
        this.dataLayer.addCustomer(customer);
    }

    updateCustomer(customer_id, updatedData) {
        return this.dataLayer.updateCustomer(customer_id, updatedData);
    }

    deleteCustomer(customer_id) {
        return this.dataLayer.deleteCustomer(customer_id);
    }

    getCustomer(customer_id) {
        return this.dataLayer.getCustomer(customer_id);
    }

    listCustomers() {
        return this.dataLayer.listCustomers();
    }
}

module.exports = ServiceLayer;