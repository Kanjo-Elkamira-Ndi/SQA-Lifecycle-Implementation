// dataLayer_kanjo_elkamira_ndi.js
// Author: Kanjo Elkamira Ndi 
// Description: This module implements a simple in-memory data layer(I did not use sqlite) for managing customer information.

class DataLayer {
    constructor() {
        this.customers = new Map();
    }

    addCustomer(customer) {
        this.customers.set(customer.customer_id, customer);
    }

    getCustomer(customer_id) {
        return this.customers.get(customer_id) || null;
    }

    updateCustomer(customer_id, updatedData) {
        if (!this.customers.has(customer_id)) return false;
        const existing = this.customers.get(customer_id);
        this.customers.set(customer_id, { ...existing, ...updatedData });
        return true;
    }

    deleteCustomer(customer_id) {
        return this.customers.delete(customer_id);
    }

    listCustomers() {
        return Array.from(this.customers.values());
    }

    clear() {
        this.customers.clear();
    }
}

module.exports = DataLayer;