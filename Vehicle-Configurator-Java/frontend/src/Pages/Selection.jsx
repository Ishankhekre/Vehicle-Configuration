import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import bg2 from "../Content/bg2.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import API from '../Service/api';
import { toaster } from "../Service/toast";



const Selection = () => {
  const location = useLocation();
  const { username } = location.state || {};
  const navigate = useNavigate();

  // State for selected values
  const [segment, setSegment] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [minQty, setMinQty] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(() => !sessionStorage.getItem("hasSeenSnackbar"));

  // State for data from APIs
  const [segments, setSegments] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [models, setModels] = useState([]);

  // State for enabling/disabling dropdowns
  const [isManufacturerEnabled, setIsManufacturerEnabled] = useState(false);
  const [isModelEnabled, setIsModelEnabled] = useState(false);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  // Fetch segments when component mounts
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/loginPage");
    } else {
      if (!sessionStorage.getItem("hasSeenSnackbar")) {
        sessionStorage.setItem("hasSeenSnackbar", "true");
      }
    }

    // ✅ Update API call to use authenticated request
    API.get("/api/segment/segments")
      .then((response) => {
        setSegments(response.data.map((seg) => ({ id: String(seg.segId), name: seg.segName })));
      })
      .catch((error) => console.error("Error fetching segments:", error));
  }, [navigate]);

  // Handle segment selection
  const handleSegmentChange = (event) => {
    const selectedSegmentId = event.target.value;
    setSegment(selectedSegmentId);
    setIsManufacturerEnabled(true);
    setManufacturer("");
    setModel("");
    setIsModelEnabled(false);
    setIsSubmitEnabled(false);

    // ✅ Update API call
    API.get(`/api/manufacturer/manufacturerBysegId/${selectedSegmentId}`)
      .then((response) => {
        setManufacturers(response.data.map((mfg) => ({ id: String(mfg.mfg_id), name: mfg.mfg_name })));
      })
      .catch((error) => console.error("Error fetching manufacturers:", error));
  };

  // Handle manufacturer selection
  const handleManufacturerChange = (event) => {
    const selectedManufacturerId = event.target.value;
    setManufacturer(selectedManufacturerId);
    setIsModelEnabled(true);
    setModel("");
    setIsSubmitEnabled(false);

    // ✅ Update API call
    API.get(`/api/model/modelBySegIdAndMfgId/${segment}/${selectedManufacturerId}`)
      .then((response) => {
        setModels(response.data.map((mdl) => ({
          id: String(mdl.model_id),
          name: mdl.mdl_name,
          minQty: mdl.min_qty,
          price: mdl.price,
          url: mdl.image_path
        })));
      })
      .catch((error) => console.error("Error fetching models:", error));
  };

  // Handle model selection
  const handleModelChange = (event) => {
    const selectedModelId = event.target.value;
    setModel(selectedModelId);

    const selectedModelData = models.find((m) => m.id === selectedModelId);
    if (selectedModelData) {
      setMinQty(selectedModelData.minQty);
      setQuantity(selectedModelData.minQty);
    }
    setIsSubmitEnabled(true);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(Number(event.target.value), minQty);
    setQuantity(newQuantity);
  };

  const handleSubmit = () => {
    const selectedSegmentObject = segments.find((seg) => seg.id === segment);
    const selectedManufacturerObject = manufacturers.find((mfg) => mfg.id === manufacturer);
    const selectedModelObject = models.find((m) => m.id === model);

    if (selectedSegmentObject && selectedManufacturerObject && selectedModelObject) {
      toaster("info", "Selection submitted successfully!");

      navigate("/BusinessPage", {
        state: {
          username,
          segment: selectedSegmentObject,
          manufacturer: selectedManufacturerObject,
          model: {
            id: parseInt(selectedModelObject.id, 10),
            name: selectedModelObject.name,
            price: selectedModelObject.price,
            url: selectedModelObject.url,
          },
          quantity,
        },
      });
    }
  };

  return (
    <>
      <div style={{
        display: "flex", flexDirection: "row", minHeight: "85vh",
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center", backgroundRepeat: "no-repeat"
      }}>
        <Header />
        <Snackbar
        open={open}
        autoHideDuration={5000} 
        onClose={() => setOpen(false)}
        message={`Welcome, ${username}. You are successfully logged in.`}
        ContentProps={{
          style: {
            backgroundColor: "#4caf50", // Green background
            color: "white", // White text
          },
        }}
      />
        <div style={{
          maxWidth: "400px", width: "100%", padding: "20px", borderRadius: "8px",
          margin: "auto", marginTop: "80px", maxHeight: "80vh", overflow: "auto"
        }}>
          <h1 style={{ color: "white" }}>NEED A NEW CAR? YOUR NEXT RIDE IS ONLY CLICKS AWAY</h1>
        </div>

        <div style={{
          maxWidth: "400px", width: "100%", padding: "20px", borderRadius: "8px",
          backgroundColor: "white", margin: "auto", marginTop: "80px", maxHeight: "80vh", overflow: "auto"
        }}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="segment-label">Segment</InputLabel>
            <Select
              labelId="segment-label"
              value={segment || ""}
              onChange={handleSegmentChange}
              label="Segment"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              {segments.length > 0 ? (
                segments.map((seg) => (
                  <MenuItem key={seg.id} value={seg.id}>
                    {seg.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem key="no-segments" disabled>No Segments Available</MenuItem>
              )}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" disabled={!isManufacturerEnabled}>
            <InputLabel id="manufacturer-label">Manufacturer</InputLabel>
            <Select
              labelId="manufacturer-label"
              value={manufacturer || ""}
              onChange={handleManufacturerChange}
              label="Manufacturer"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              {manufacturers.length > 0 ? (
                manufacturers.map((man) => (
                  <MenuItem key={man.id} value={man.id}>
                    {man.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem key="no-manufacturers" disabled>No Manufacturers Available</MenuItem>
              )}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" disabled={!isModelEnabled}>
            <InputLabel id="model-label">Model</InputLabel>
            <Select
              labelId="model-label"
              value={model || ""}
              onChange={handleModelChange}
              label="Model"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              {models.length > 0 ? (
                models.map((mod) => (
                  <MenuItem key={mod.id} value={mod.id}>
                    {mod.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem key="no-models" disabled>No Models Available</MenuItem>
              )}
            </Select>
          </FormControl>

          {model && (
            <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              fullWidth
              margin="normal"
              helperText={`Minimum Quantity: ${minQty}`}
              />
          )}

          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!isSubmitEnabled}
            style={{ marginTop: "20px", width: "100%" }}
          >
            Submit
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Selection;