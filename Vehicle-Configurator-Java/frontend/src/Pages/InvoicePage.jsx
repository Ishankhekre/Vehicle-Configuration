
  import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import logo from "../Content/logo3.png";
import API from '../Service/api';
import "jspdf-autotable";
//import logo from '../Content/logo3.png';




const InvoicePage = () => {
const location = useLocation();
const navigate = useNavigate();
const { username ,segment, model, manufacturer, selectedParts = {}, basePrice = 0, totalprice = 0, tax = 0, ftp = 0, quantity = 1 } = location.state || {};

const [transactionId, setTransactionId] = useState(null); // State to store transaction ID

useEffect(() => {
  const token = sessionStorage.getItem("authToken");
  if (!token) {
    navigate("/LoginPage");
    return; // Prevent further execution if user is not authenticated
  }

  if (transactionId) {
    sendInvoiceData();
  }
}, [transactionId, navigate]); // Runs when transactionId or navigate changes


console.log("++++++++++++++>>>",{
  model,
  manufacturer,
  selectedParts,
  basePrice,
  totalprice,
  tax,
  ftp,
  quantity,
  username,
  segment
});
const invoiceData = {
    invoiceNumber : transactionId,
  modelName: model.name,
  username: username,
  components: Object.values(selectedParts).map(part => part.comp_name),
  basePrice: basePrice,
  tax: tax,
  totalPrice: totalprice,
  finalTotalPrice: ftp,
  quantity: quantity,
  segment: segment.name,
  manufacturer : manufacturer.name
};

console.log("invice data for pratik",invoiceData);

const orderDate = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
}


);

const generatePDF = () => {
  const doc = new jsPDF();

  // Set font and size
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);

  // Add Invoice title
  doc.setFontSize(16);
  doc.text('INVOICE', 105, 20, { align: 'center' });
  const textWidth = doc.getTextWidth('INVOICE'); // Get width of text
  doc.setLineWidth(0.5);
  doc.line(105 - textWidth / 2, 22, 105 + textWidth / 2, 22);

  // Add Invoice details
  doc.setFontSize(12);
  doc.text(`Invoice Number: ${invoiceDetails.invoiceNumber}`, 20, 30);
  doc.text(`Date: ${new Date().toLocaleDateString("en-GB")}`, 20, 40);

  // Align "To" and "Issued By" in the same row
  const leftX = 20;  // Left side (Customer Details)
  const rightX = 120; // Right side (Issued By)

  doc.setFontSize(14);
  doc.text('To:', leftX, 50);
  doc.text('Issued By:', rightX, 50);

  doc.setFontSize(12);
  doc.text(`${invoiceDetails.user.companyName}`, leftX, 60);
  doc.text('VConfig Solutions', rightX, 60);

  doc.text(`GST: ${invoiceDetails.user.gstNumber}`, leftX, 70);
  doc.text('9876548765', rightX, 70);

  doc.text(`Contact: ${invoiceDetails.user.contactNumber}`, leftX, 80);
  doc.text('VConfig@gmail.com', rightX, 80);

  doc.text(`Email: ${invoiceDetails.user.email}`, leftX, 90);

  // Add a line separator
  doc.setLineWidth(0.5);
  doc.line(20, 100, 190, 100);

  // Add Car details properly spaced
  doc.setFontSize(14);
  doc.text(`Segment: ${invoiceDetails.segment}`, 20, 110);
  doc.text(`Manufacturer: ${invoiceDetails.manufacturer}`, 20, 120);
  doc.text(`Model: ${invoiceDetails.modelName}`, 20, 130);

  // Add Purchased Components table
  doc.autoTable({
    startY: 140, // Start below the car details
    head: [['Purchased Components']],
    body: invoiceDetails.components.map(part => [part]), // Convert each part into an array
    theme: 'grid', // Adds borders to the table
    styles: { fontSize: 12, cellPadding: 5 },
    headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] }, // No background color for header
    margin: { left: 20 } // Align table to the left
  });

  let finalY = doc.autoTable.previous.finalY + 10; // Position after the table

  // Add pricing details with proper spacing
  doc.setFontSize(12);
  doc.text('Base Price:', 20, finalY);
  doc.text(`${invoiceDetails.basePrice}/-`, 80, finalY);
  doc.text('GST (18%):', 20, finalY + 10);
  doc.text(`${invoiceDetails.tax}/-`, 80, finalY + 10);

  // Add total price
  doc.setFontSize(14);
  doc.text('Total Price (Incl. GST):', 20, finalY + 20);
  doc.text(`${invoiceDetails.totalPrice}/-`, 80, finalY + 20);

  // Add quantity and final total price
  doc.setFontSize(12);
  doc.text('Quantity Purchased:', 20, finalY + 30);
  doc.text(`${invoiceDetails.quantity}`, 80, finalY + 30);
  doc.text('Final Total Price:', 20, finalY + 40);
  doc.text(`${invoiceDetails.finalTotalPrice}/-`, 80, finalY + 40);

  // Add thank you message
  doc.setFontSize(12);
  doc.text('Thank you for your business!', 105, finalY + 60, { align: 'center' });
  doc.text('VConfig Solutions', 105, finalY + 70, { align: 'center' });

  // Save the PDF
  doc.save(`${invoiceDetails.invoiceNumber}.pdf`);
};




const displayRazorpay = async () => {

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("You are offline... Failed to load Razorpay SDK");
    return;
  }

  const options = {
    key: "rzp_test_k5f8UaRhMZ6s1L",
    currency: "INR",
    amount: 100 * 100, // Convert to paise (Razorpay expects amount in the smallest currency unit)
    name: "Vconfig",
    description: "Thanks for your order...",
    image: logo,
    handler: function (response) {
      setTransactionId(response.razorpay_payment_id); // This triggers useEffect
      alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
    },
    prefill: {
      name: "Vconfig",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
const [invoiceDetails, setInvoiceDetails] = useState(null); // Store API response

const sendInvoiceData = async () => {
try {
  const updatedInvoiceData = {
    invoiceNumber: transactionId, 
    modelName: model.name,
    username: username,
    components: Object.values(selectedParts).map(part => part.comp_name),
    basePrice: basePrice,
    tax: tax,
    totalPrice: totalprice,
    finalTotalPrice: ftp,
    quantity: quantity,
    segment: segment.name,
    manufacturer: manufacturer.name
  };

  console.log("Sending updated invoice data:", updatedInvoiceData);

  const response = await API.post("http://localhost:8080/generateInvoice", updatedInvoiceData);
  console.log("Full API Response:", response.data);

  setInvoiceDetails(response.data); // Store response in state
} catch (error) {
  console.error("Error sending invoice data:", error);
}
};



return (
  <div style={styles.container}>
    <h2 style={styles.title}>Invoice Preview</h2>
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Vconfig</h3>
      <p>
        <strong>Order Date:</strong> {orderDate}
      </p>
    </div>
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Product Details</h3>
      <p>
        <strong>Manufacturer:</strong> {manufacturer?.name || "N/A"}
      </p>
      <p>
        <strong>Model:</strong> {model?.name || "N/A"}
      </p>
      <p>
        <strong>Quantity:</strong> {quantity}
      </p>
    </div>
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Selected Parts</h3>
      <ul style={styles.list}>
        {Object.values(selectedParts).map((part, index) => (
          <li key={index} style={styles.listItem}>
            {part.comp_name}
          </li>
        ))}
      </ul>
    </div>
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Pricing Details</h3>
      <p>
        <strong>Base Price:</strong> ₹{basePrice.toLocaleString()}
      </p>
      <p>
        <strong>Tax (18%):</strong> ₹{tax.toLocaleString()}
      </p>
      <p>
        <strong>Total Price:</strong> ₹{totalprice.toLocaleString()}
      </p>
      <p>
        <strong>Final Total Price:</strong> ₹{ftp.toLocaleString()}
      </p>
    </div>
    <div style={styles.buttonContainer}>
      <button style={styles.button} onClick={displayRazorpay}>
        Proceed to Payment
      </button>
      <button style={styles.button} onClick={() => navigate("/SelectionPage")}>
        Cancel
      </button>
    </div>

    {/* Conditionally render the "Download Invoice" button */}
    {transactionId && (
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={generatePDF}>
          Download Invoice
        </button>
      </div>
    )}
  </div>
);
};

const styles = {
container: {
  maxWidth: "800px",
  margin: "auto",
  padding: "30px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
},
title: {
  textAlign: "center",
  color: "#333",
  marginBottom: "20px",
},
section: {
  marginBottom: "20px",
  padding: "15px",
  borderBottom: "1px solid #eee",
},
sectionTitle: {
  color: "#007bff",
  marginBottom: "10px",
},
list: {
  listStyleType: "none",
  padding: 0,
},
listItem: {
  padding: "8px 0",
  borderBottom: "1px solid #eee",
},
buttonContainer: {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "30px",
},
button: {
  padding: "12px 20px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
  borderRadius: "5px",
  fontSize: "14px",
  transition: "background-color 0.3s ease",
},
};

export default InvoicePage; 