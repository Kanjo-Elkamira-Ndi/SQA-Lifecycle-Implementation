// integrationTest_kanjo_elkamira_ndi.test.js
// Author: Kanjo Elkamira Ndi
// Description: This module contains integration tests for the customer onboarding process, validating the interaction between the service layer and data layer.

const DataLayer = require('./dataLayer_kanjo_elkamira_ndi');
const ServiceLayer = require('./serviceLayer_kanjo_elkamira_ndi');

describe("Customer Onboarding Integration Tests", () => {

    let dataLayer;
    let service;

    beforeEach(() => {
        dataLayer = new DataLayer();
        service = new ServiceLayer(dataLayer);
    });

    const validCustomer = {
        customer_id: "CAM123456",
        phone: "672345678",
        account_type: "Savings"
    };

    // Author: Kanjo Elkamira Ndi
    test("Create customer end-to-end", () => {
        service.addCustomer(validCustomer);
        const stored = service.getCustomer("CAM123456");
        expect(stored).toEqual(validCustomer);
    });

    // Author: Kanjo Elkamira Ndi
    test("Reject invalid customer ID and DB unchanged", () => {
        const invalid = { ...validCustomer, customer_id: "123456" };
        expect(() => service.addCustomer(invalid)).toThrow();
        expect(service.listCustomers().length).toBe(0);
    });

    // Author: Kanjo Elkamira Ndi
    test("Reject invalid phone and DB unchanged", () => {
        const invalid = { ...validCustomer, phone: "512345678" };
        expect(() => service.addCustomer(invalid)).toThrow();
        expect(service.listCustomers().length).toBe(0);
    });

    // Author: Kanjo Elkamira Ndi
    test("Reject invalid account type", () => {
        const invalid = { ...validCustomer, account_type: "Gold" };
        expect(() => service.addCustomer(invalid)).toThrow();
        expect(service.listCustomers().length).toBe(0);
    });

    // Author: Kanjo Elkamira Ndi
    test("Reject duplicate customer ID", () => {
        service.addCustomer(validCustomer);
        expect(() => service.addCustomer(validCustomer)).toThrow();
        expect(service.listCustomers().length).toBe(1);
    });

    // Author: Kanjo Elkamira Ndi
    test("Update customer phone and verify persistence", () => {
        service.addCustomer(validCustomer);
        service.updateCustomer("CAM123456", { phone: "679403530" });
        const updated = service.getCustomer("CAM123456");
        expect(updated.phone).toBe("679403530");
    });

    // Author: Kanjo Elkamira Ndi
    test("Delete customer and confirm removal", () => {
        service.addCustomer(validCustomer);
        service.deleteCustomer("CAM123456");
        expect(service.getCustomer("CAM123456")).toBeNull();
    });

    // Author: Kanjo Elkamira Ndi
    test("Retrieve non-existent customer returns null", () => {
        expect(service.getCustomer("CAM999999")).toBeNull();
    });

    // Author: Kanjo Elkamira Ndi
    test("List customers after 3 insertions", () => {
        service.addCustomer(validCustomer);
        service.addCustomer({
            customer_id: "CAM654321",
            phone: "672345679",
            account_type: "Current"
        });
        service.addCustomer({
            customer_id: "CAM111111",
            phone: "679403530",
            account_type: "Fixed Deposit"
        });

        expect(service.listCustomers().length).toBe(3);
    });

    // Author: Kanjo Elkamira Ndi
    test("Mixed scenario validation", () => {
        service.addCustomer(validCustomer);
        service.addCustomer({
            customer_id: "CAM654321",
            phone: "672345679",
            account_type: "Current"
        });

        service.deleteCustomer("CAM654321");
        service.updateCustomer("CAM123456", { phone: "679403530" });

        const customers = service.listCustomers();
        expect(customers.length).toBe(1);
        expect(customers[0].phone).toBe("679403530");
    });

});