import React, { useEffect, useState } from "react";
import {
  Card, CardContent, Typography, Box, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary,
  AccordionDetails, Grid, Modal
} from "@mui/material";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const PastOrders = () => {
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Hardcoded data (Replace with API call)
    const hardcodedOrders = [
      {
        id: 14,
        username: "pratik1234",
        manufacturer: "Toyota",
        modelName: "Toyota Prius",
        components: [
          "Hybrid Engine", "Electric Motor", "Battery Pack", "Fuel Tank",
          "Eco Mode", "Regenerative Braking", "Toyota Safety Sense", "Hybrid Engine", "Electric Motor", "Battery Pack", "Fuel Tank",
          "Eco Mode", "Regenerative Braking", "Toyota Safety Sense"
        ],
        segment: "Hybrid",
        basePrice: 33000.75,
        tax: 5940.135,
        quantity: 5,
        totalPrice: 38940.885,
        finalTotalPrice: 194704.42,
        user: {
          userName: "pratik1234",
          companyName: "Nagpur Moto",
          email: "jadhavpratik5654@gmail.com",
          gstNumber: "34CIPPS5925M1ZF",
          contactNumber: "9588612672"
        },
        invoiceNumber: "pay_Pu1pmXfjm0FjF6"
      },
      {
        id: 15,
        username: "pratik1234",
        manufacturer: "Honda",
        modelName: "Honda Civic",
        components: [
          "Turbocharged Engine", "Sunroof", "Leather Seats", "Blind Spot Monitor"
        ],
        segment: "Sedan",
        basePrice: 27000,
        tax: 4860,
        quantity: 2,
        totalPrice: 31860,
        finalTotalPrice: 63720,
        user: {
          userName: "pratik1234",
          companyName: "Nagpur Moto",
          email: "jadhavpratik5654@gmail.com",
          gstNumber: "34CIPPS5925M1ZF",
          contactNumber: "9588612672"
        },
        invoiceNumber: "pay_Abc123Xyz789"
      },
    ];

    setOrders(hardcodedOrders);
  }, []);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedOrder(null);
  };



return (
<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh" }}>
<Header />
    <Box sx={{ flexGrow: 1, maxWidth: 900, width: "100%", mt: 4 }}>
      {/* Centered and Responsive Heading */}
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 5, mb: 3 }}>
  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#223747" }}>
    Past Orders
  </Typography>
</Box>


      {orders.length === 0 ? (
        <Typography>No past orders found.</Typography>
      ) : (
        <Grid container spacing={3} justifyContent="flex-end" direction="row-reverse">
          {orders.map((order) => (
            <Grid item xs={12} sm={6} key={order.id}>
              <Accordion onClick={() => handleOpenModal(order)}>
                <AccordionSummary>
                  <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {order.modelName}
                    </Typography>
                    <Typography variant="body2">Invoice: {order.invoiceNumber}</Typography>
                    <Typography variant="body2">Total: ${order.finalTotalPrice.toFixed(2)}</Typography>
                  </Box>
                </AccordionSummary>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>

    {/* Modal for Order Details */}
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="order-details-modal"
      aria-describedby="order-details-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
      }}>
        {selectedOrder && (
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Invoice #{selectedOrder.invoiceNumber}
              </Typography>

              {/* Manufacturer & Model */}
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography variant="h6">
                  <strong>Manufacturer:</strong> {selectedOrder.manufacturer}
                </Typography>
                <Typography variant="h6">
                  <strong>Model:</strong> {selectedOrder.modelName}
                </Typography>
              </Box>

              {/* Pricing Details */}
              <Typography variant="body1">
                <strong>Base Price:</strong> ${selectedOrder.basePrice.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                <strong>Tax:</strong> ${selectedOrder.tax.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                <strong>Quantity:</strong> {selectedOrder.quantity}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                Total: ${selectedOrder.finalTotalPrice.toFixed(2)}
              </Typography>

              {/* User Info */}
              <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                Ordered By:
              </Typography>
              <Typography variant="body1">{selectedOrder.user.userName} ({selectedOrder.user.companyName})</Typography>
              <Typography variant="body1">Email: {selectedOrder.user.email}</Typography>
              <Typography variant="body1">Contact: {selectedOrder.user.contactNumber}</Typography>

              {/* Components Table */}
              <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                Components:
              </Typography>
              <Box sx={{ maxHeight: 200, overflowY: "auto", mt: 1 }}>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Component Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedOrder.components.map((component, index) => (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{component}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </CardContent>
          </Card>
        )}
      </Box>
    </Modal>

    <Footer />
  </Box>
);

  
  
};

export default PastOrders;