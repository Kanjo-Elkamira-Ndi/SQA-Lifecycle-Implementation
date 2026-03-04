// integration.test_kanjo_elkamira_ndi.js
// Author: Kanjo Elkamira Ndi
// Description: This module contains integration tests for the customer onboarding process, validating the interaction between the service layer and data layer.

const DataLayer = require('./dataLayer_22M0456');
const ServiceLayer = require('./serviceLayer_22M0456');

describe("Customer Onboarding Integration Tests", () => {

    let dataLayer;
    let service;

    beforeEach(() => {
        dataLayer = new DataLayer();
        service = new ServiceLayer(dataLayer);
    });

    const validCustomer = {
        customer_id: "CAM123456",
        phone: "612345678",
        account_type: "Savings"
    };

    // Author: 22M0456
    test("Create customer end-to-end", () => {
        service.addCustomer(validCustomer);
        const stored = service.getCustomer("CAM123456");
        expect(stored).toEqual(validCustomer);
    });

    // Author: 22M0456
    test("Reject invalid customer ID and DB unchanged", () => {
        const invalid = { ...validCustomer, customer_id: "123456" };
        expect(() => service.addCustomer(invalid)).toThrow();
        expect(service.listCustomers().length).toBe(0);
    });

    // Author: 22M0456
    test("Reject invalid phone and DB unchanged", () => {
        const invalid = { ...validCustomer, phone: "512345678" };
        expect(() => service.addCustomer(invalid)).toThrow();
        expect(service.listCustomers().length).toBe(0);
    });

    // Author: 22M0456
    test("Reject invalid account type", () => {
        const invalid = { ...validCustomer, account_type: "Gold" };
        expect(() => service.addCustomer(invalid)).toThrow();
        expect(service.listCustomers().length).toBe(0);
    });

    // Author: 22M0456
    test("Reject duplicate customer ID", () => {
        service.addCustomer(validCustomer);
        expect(() => service.addCustomer(validCustomer)).toThrow();
        expect(service.listCustomers().length).toBe(1);
    });

    // Author: 22M0456
    test("Update customer phone and verify persistence", () => {
        service.addCustomer(validCustomer);
        service.updateCustomer("CAM123456", { phone: "622222222" });
        const updated = service.getCustomer("CAM123456");
        expect(updated.phone).toBe("622222222");
    });

    // Author: 22M0456
    test("Delete customer and confirm removal", () => {
        service.addCustomer(validCustomer);
        service.deleteCustomer("CAM123456");
        expect(service.getCustomer("CAM123456")).toBeNull();
    });

    // Author: 22M0456
    test("Retrieve non-existent customer returns null", () => {
        expect(service.getCustomer("CAM999999")).toBeNull();
    });

    // Author: 22M0456
    test("List customers after 3 insertions", () => {
        service.addCustomer(validCustomer);
        service.addCustomer({
            customer_id: "CAM654321",
            phone: "612345679",
            account_type: "Current"
        });
        service.addCustomer({
            customer_id: "CAM111111",
            phone: "622222222",
            account_type: "Fixed Deposit"
        });

        expect(service.listCustomers().length).toBe(3);
    });

    // Author: 22M0456
    test("Mixed scenario validation", () => {
        service.addCustomer(validCustomer);
        service.addCustomer({
            customer_id: "CAM654321",
            phone: "612345679",
            account_type: "Current"
        });

        service.deleteCustomer("CAM654321");
        service.updateCustomer("CAM123456", { phone: "622222222" });

        const customers = service.listCustomers();
        expect(customers.length).toBe(1);
        expect(customers[0].phone).toBe("622222222");
    });

});