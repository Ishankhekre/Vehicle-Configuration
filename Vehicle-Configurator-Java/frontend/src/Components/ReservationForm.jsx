import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "../CSS/Footer2.css";  // Ensure this file includes styling

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    rentalDate: null,
    rentalTime: null,
    rentalTimePeriod: "AM",
    returnDate: null,
    returnTime: null,
    returnTimePeriod: "AM",
    pickupLocation: "",
    pickupCity: "",
    pickupState: "",
    returnToDifferentLocation: false,
    returnLocation: "",
    returnCity: "",
    returnState: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "pickupLocation"
        ? { pickupCity: "", pickupState: "" }
        : name === "pickupCity" || name === "pickupState"
        ? { pickupLocation: "" }
        : {}),
    }));
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Container
          maxWidth="md"
          sx={{
            mt: 4,
            p: 4,
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Ensures input visibility
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds a subtle shadow
            position: "relative",
            zIndex: 1,
          }}
        >                 
 <h1 
        style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#ff7f50",  // Brand color
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "2px",
            textTransform: "uppercase",
            margin: 0,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
        }}
    >
        Hire & Go
    </h1>
          <Typography color="#ff7f50" variant="h5" gutterBottom>
            Make Your Reservation Here
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={3}>
              {/* Rental Date and Time */}
              <Grid item xs={6}>
                <DatePicker
                  label="Rental Date"
                  value={formData.rentalDate}
                  onChange={(newValue) =>
                    setFormData({ ...formData, rentalDate: newValue })
                  }
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={6}>
                <TimePicker
                  label="Rental Time"
                  value={formData.rentalTime}
                  onChange={(newValue) =>
                    setFormData({ ...formData, rentalTime: newValue })
                  }
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              <RadioGroup
  row
  name="rentalTimePeriod"
  value={formData.rentalTimePeriod}
  onChange={handleChange}
  sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}
>
  <FormControlLabel 
    value="AM" 
    control={<Radio sx={{ color: "#ff7f50", "&.Mui-checked": { color: "#e66a3c" } }} />} 
    label={<span style={{ fontWeight: "bold", color: "#333" }}>AM</span>} 
  />
  <FormControlLabel 
    value="PM" 
    control={<Radio sx={{ color: "#ff7f50", "&.Mui-checked": { color: "#e66a3c" } }} />} 
    label={<span style={{ fontWeight: "bold", color: "#333" }}>PM</span>} 
  />
</RadioGroup>

              </Grid>

              {/* Return Date and Time */}
              <Grid item xs={6}>
                <DatePicker
                  label="Return Date"
                  value={formData.returnDate}
                  onChange={(newValue) =>
                    setFormData({ ...formData, returnDate: newValue })
                  }
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={6}>
                <TimePicker
                  label="Return Time"
                  value={formData.returnTime}
                  onChange={(newValue) =>
                    setFormData({ ...formData, returnTime: newValue })
                  }
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
               <RadioGroup
  row
  name="returnTimePeriod"
  value={formData.returnTimePeriod}
  onChange={handleChange}
  sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}
>
  <FormControlLabel 
    value="AM" 
    control={<Radio sx={{ color: "#ff7f50", "&.Mui-checked": { color: "#e66a3c" } }} />} 
    label={<span style={{ fontWeight: "bold", color: "#333" }}>AM</span>} 
  />
  <FormControlLabel 
    value="PM" 
    control={<Radio sx={{ color: "#ff7f50", "&.Mui-checked": { color: "#e66a3c" } }} />} 
    label={<span style={{ fontWeight: "bold", color: "#333" }}>PM</span>} 
  />
</RadioGroup>

              </Grid>

              {/* Pickup Location */}
              <Grid item xs={12}>
                <Typography variant="h6">Pick-up Location</Typography>
                <TextField
                  label="Enter Airport Code"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  fullWidth
                  disabled={!!formData.pickupCity || !!formData.pickupState}
                />
                <Link href="#" sx={{ mt: 1, display: "block" }}>
                  Find Airport
                </Link>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  OR
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="City"
                      name="pickupCity"
                      value={formData.pickupCity}
                      onChange={handleChange}
                      fullWidth
                      disabled={!!formData.pickupLocation}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="State"
                      name="pickupState"
                      value={formData.pickupState}
                      onChange={handleChange}
                      fullWidth
                      disabled={!!formData.pickupLocation}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Checkbox to Select Different Return Location */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.returnToDifferentLocation}
                      onChange={handleChange}
                      name="returnToDifferentLocation"
                    />
                  }
                  label="Return to a different location"
                />
              </Grid>

              {/* Conditionally Render Return Location Fields */}
              {formData.returnToDifferentLocation && (
                <Grid item xs={12}>
                  <Typography variant="h6">Return Location</Typography>
                  <TextField
                    label="Enter Airport Code"
                    name="returnLocation"
                    value={formData.returnLocation}
                    onChange={handleChange}
                    fullWidth
                    disabled={!!formData.returnCity || !!formData.returnState}
                  />
                  <Link href="#" sx={{ mt: 1, display: "block" }}>
                    Find Airport
                  </Link>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    OR
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="City"
                        name="returnCity"
                        value={formData.returnCity}
                        onChange={handleChange}
                        fullWidth
                        disabled={!!formData.returnLocation}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="State"
                        name="returnState"
                        value={formData.returnState}
                        onChange={handleChange}
                        fullWidth
                        disabled={!!formData.returnLocation}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )}

              {/* Search Button */}
              <Grid item xs={12}>
              <Button 
    variant="contained" 
    sx={{
        backgroundColor: "#ff7f50",
        color: "white",
        "&:hover": {
            backgroundColor: "#e66a3c", // Darker shade on hover
        },
        fontWeight: "bold",
        textTransform: "uppercase",
    }}
>
    Search
</Button>              </Grid>
            </Grid>
          </LocalizationProvider>
        </Container>
      </div>
    </div>
  );
};

export default ReservationForm;
