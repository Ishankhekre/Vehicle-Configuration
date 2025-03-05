import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../CSS/Business.css";
import { Modal, Box, Button, Typography, List, ListItem, ListItemText } from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useNavigate, useLocation } from "react-router-dom";
import API from '../Service/api';
import { Fade } from "react-awesome-reveal";
import bg1 from '../Content/bg6.jpg';


const Business = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { quantity, segment, manufacturer, model ,username} = location.state || {};
  const modelId = model ? model.id : null;
  console.log("Model -----:", model);
  console.log("--", quantity);
  console.log("--", username);


  const [selectedPart, setSelectedPart] = useState("Core");
  const [configurableParts, setConfigurableParts] = useState([]);
  const [selectedPartForAlternates, setSelectedPartForAlternates] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedParts, setSelectedParts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice to 0
  const [parts, setParts] = useState({
    Core: [],
    Standard: [],
    Interior: [],
    Exterior: [],
  });
  const [alternateParts, setAlternateParts] = useState([]);
  const [basePrice, setBasePrice] = useState(model.price);

  useEffect(() => {

    console.log("-=-=-=-=",model.url);
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/loginPage");
    } else {
      if (!sessionStorage.getItem("hasSeenSnackbar")) {
        sessionStorage.setItem("hasSeenSnackbar", "true");
      }
    }
    if (modelId) {
      API
        .get(`http://localhost:8080/api/vehicle/vehicleBymodelId/${modelId}`)
        .then((response) => {
          const data = response.data;
          console.log("API Response:", data);

          if (!data || !Array.isArray(data)) {
            console.error("Parts data is missing or incorrect.");
            return;
          }

          const categorizedParts = {
            Core: [],
            Standard: [],
            Interior: [],
            Exterior: [],
          };

          const initialSelectedParts = {};

          data.forEach((part) => {
            const partObject = { comp_id: part.comp_id, comp_name: part.comp_name };

            switch (part.comp_type) {
              case "C":
                categorizedParts.Core.push(partObject);
                break;
              case "S":
                categorizedParts.Standard.push(partObject);
                break;
              case "I":
                categorizedParts.Interior.push(partObject);
                break;
              case "E":
                categorizedParts.Exterior.push(partObject);
                break;
              default:
                console.warn(`Unknown comp_type: ${part.comp_type}`);
            }

            // Initialize selectedParts with default values
            initialSelectedParts[part.comp_name] = {
              comp_name: part.comp_name,
              comp_id: part.comp_id,
            };
          });

          console.log("Categorized Parts:", categorizedParts);
          setParts(categorizedParts);
          setSelectedParts(initialSelectedParts);

          const configurable = data
            .filter((part) => part.is_configrable === "Y")
            .map((part) => part.comp_name);
          setConfigurableParts(configurable);
        })
        .catch((error) => {
          console.error("Error fetching parts data:", error);
        });
    }
  }, [modelId]);

  const handlePartClick = (part) => {
    console.log("Clicked Part:", part);
  
    if (configurableParts.includes(part.comp_name)) {
      setSelectedPartForAlternates(part.comp_name);
      setAlternateParts([]); // Clear old alternate parts before fetching new ones
  
      API
        .get(
          `http://localhost:8080/api/alternatecomponent/alternatecompBycomp_idAndmodelId/${part.comp_id}/${modelId}`
        )
        .then((response) => {
          let alternatePartsData = response.data.map((item) => ({
            comp_id: item.alt_comp_id.comp_id,
            comp_name: item.alt_comp_id.comp_name,
            delta_price: item.delta_price,
          }));
  
          // **Ensure the original part is included in the list**
          alternatePartsData.unshift({
            comp_id: part.comp_id, // Original part ID
            comp_name: part.comp_name, // Original part Name
            delta_price: 0, // No price change
          });
  
          console.log("Updated Alternate Parts List (Including Original):", alternatePartsData);
          setAlternateParts(alternatePartsData);
          setModalOpen(true); // Open modal after updating
        })
        .catch((error) => {
          console.error("Error fetching alternate parts:", error);
        });
    }
  };
  

  const handleReplacePart = (newPart) => {
    console.log("Selected Alternate Part:", newPart);
  
    // Get the previous part that is being replaced
    const previousPart = selectedParts[selectedPartForAlternates];
  
    // Update selectedParts state with the new alternate part
    setSelectedParts((prev) => ({
      ...prev,
      [selectedPartForAlternates]: {
        comp_name: newPart.comp_name,
        comp_id: newPart.comp_id,
        delta_price: newPart.delta_price, // Store new delta price
      },
    }));
  
    // Update the base price with the new part's delta price
    const previousDeltaPrice = previousPart?.delta_price || 0;
    const updatedBasePrice = basePrice - previousDeltaPrice + newPart.delta_price;
  
    console.log("Updated Base Price:", updatedBasePrice);
  
    // Recalculate total price
    const updatedTotalPrice = updatedBasePrice + updatedBasePrice * 0.18; // Adding tax to base price
    setBasePrice(updatedBasePrice); // Update the base price
    setTotalPrice(updatedTotalPrice); // Update total price
    
    // Recalculate the final total price based on quantity
    const updatedFinalTotalPrice = updatedTotalPrice * quantity;
  
    console.log("Updated Final Total Price:", updatedFinalTotalPrice);
  
    // Add the previous part back to alternateParts and remove the new part from it
    setAlternateParts((prev) => [
      ...prev.filter((part) => part.comp_id !== newPart.comp_id), // Remove newly selected part
      {
        comp_id: previousPart.comp_id,
        comp_name: previousPart.comp_name,
        delta_price: previousPart.delta_price,
      }, // Add previous part back
    ]);
  
    // Close the modal
    handleCloseModal();
  };
  
  
  
  

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPartForAlternates(null);
  };
  const handleConfirmOrder = () => {
    navigate("/InvoicePage", {
      state: { username , segment, model, manufacturer, selectedParts, basePrice, totalprice, tax, ftp, quantity },
    });
  };

//const baseprice = model.price;
const tax = basePrice * 0.18;
const totalprice = basePrice + tax;
const ftp = totalprice * quantity;


  return (
    <div className="business-container" style={{
          
      backgroundImage: `url(${bg1})`,
      backgroundSize: "cover",
      backgroundPosition: "center", backgroundRepeat: "no-repeat"
    }}>
      <Header />
      <div className="part-tabs" style={{ marginTop: "65px"}}>
        {Object.keys(parts).map((category) => (
          <button 
            key={category}
            className={`tab-button ${selectedPart === category ? "active" : ""}`}
            onClick={() => setSelectedPart(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="main-content">
        <div className="car-details">
        <img 
             src={model.url || "path/to/default-image.jpg"} 
              alt="Car" 
              className="car-image" 
         />          
      <h2 className="car-manufacturer">{manufacturer?.name || "Manufacturer Name"}</h2>
          <h3 className="car-model">{model ? model.name : "Model Name"}</h3>
        </div>
        <div className="part-details">
          <h2 className="part-heading">{selectedPart} Parts</h2>
          {parts[selectedPart] && parts[selectedPart].length > 0 ? (
            <List>
              {parts[selectedPart].map((partDetail, index) => (
               <Fade  cascade={false} delay={index * 1000} direction="up">
               <ListItem
                 key={index}
                 className="part-item"
                 onClick={() => handlePartClick(partDetail)}
                 style={{ cursor: configurableParts.includes(partDetail.comp_name) ? "pointer" : "default" }}
               >
                 {configurableParts.includes(partDetail.comp_name) && (
                   <ChangeCircleIcon sx={{ color: "green", marginRight: 1 }} />
                 )}
                 <ListItemText
                   primary={selectedParts[partDetail.comp_name]?.comp_name || partDetail.comp_name}
                 />
               </ListItem>
             </Fade>
              ))}
            </List>
          ) : (
            <p>No parts available for {selectedPart}</p>
          )}
        </div>
      </div>

      <div className="bottom-content">
      <div className="price-card">
  <h3 className="price-heading">Price Details</h3>
  <p className="price-detail">
  <strong>Base Price:</strong> ₹{basePrice.toLocaleString()}
</p>
<p className="price-detail">
  <strong>Taxes (18%):</strong> ₹{tax.toLocaleString()}
</p>
<p className="price-total">
  <strong>Total Price:</strong> ₹{totalprice.toLocaleString()} * {quantity}
</p>
<p className="price-total">
  <strong>Final Total Price:</strong> ₹{ftp.toLocaleString()}
</p>
</div>
        <div className="action-buttons">
<button className="btn-primary" onClick={handleConfirmOrder}>Confirm Order</button>
          {/* <button className="btn-outline">Configure</button> */}
          <button className="btn-outline-secondary" onClick={() => navigate("/SelectionPage")}>Modify</button>
        </div>
      </div>

      <Footer />

      {/* Modal for selecting alternate parts */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          className="modal-box"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 400,
          }}
        >
          <Typography variant="h6">Select an Alternate Part</Typography>
          {alternateParts.length > 0 ? (
            <List>
              {alternateParts.map((altPart, index) => (
                <ListItem button key={index} onClick={() => handleReplacePart(altPart)}>
                  <ListItemText
                    primary={altPart.comp_name}
                    secondary={`Price Change: ₹${altPart.delta_price}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>No alternate parts available.</Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Business; 