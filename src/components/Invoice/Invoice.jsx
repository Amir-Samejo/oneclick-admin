// components/InvoicePage.js

import Image from "next/image";
import React from "react";
import invoiceLogo from "../../../public/images/logo/logo-dark.png"

const InvoicePage = () => {
    // Sample data for the invoice
    const invoiceData = {
        invoiceNumber: "INV-001234390437278293",
        date: "2024-02-09",
        customerName: "John Doe",
        items: [
            { id: 1, description: "Product 1", quantity: 2, price: 50 },
            { id: 2, description: "Product 2", quantity: 1, price: 30 },
            // Add more items as needed
        ],
    };

    // Calculate total amount
    const totalAmount = invoiceData.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );

    return (
        <div className="container mx-auto">
            <div className="bg-white shadow-md rounded my-6 p-8">
                <div className="px-4 py-4">
                    <div className="flex justify-between">
                        <Image src={invoiceLogo} className="w-40 h-25" />
                        <div className="text-xl text-black font-semibold">
                            <h2 className="text-title-xl text-black font-semibold">Invoice</h2>
                            <p className="py-2">Invoice Number: {invoiceData.invoiceNumber}</p>
                            <p>Date: {invoiceData.date}</p>
                        </div>
                    </div>

                    <div className="mt-4 text-black font-semibold">
                        <h4 className="text-title-md">Customer Name:</h4>
                        <p className="text-xl">{invoiceData.customerName}</p>
                    </div>

                    <table className="w-full mt-4 border">
                        <thead>
                            <tr className="bg-slate-200 text-title-sm text-black-2 text-left">
                                <th className="p-3 border">Description</th>
                                <th className="p-3 border">Quantity</th>
                                <th className="p-3 border">Price</th>
                                <th className="p-3 border">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceData.items.map((item) => (
                                <tr key={item.id} className="text-black-2 text-lg font-semibold">
                                    <td className="p-3 border">{item.description}</td>
                                    <td className="p-3 border">{item.quantity}</td>
                                    <td className="p-3 border">${item.price}</td>
                                    <td className="p-3 border">${item.quantity * item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-title-sm text-black-2 text-left p-3 font-semibold border">
                                    Total:
                                </td>
                                <td className="text-title-sm text-black-2 text-left p-3 font-semibold border">${totalAmount}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InvoicePage;
