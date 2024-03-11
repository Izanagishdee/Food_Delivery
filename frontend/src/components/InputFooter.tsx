import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function InputFooter() {
  return (
    <Box
      sx={{
        width: "384px",
        height: "120px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <FormControlLabel
        required
        control={<Checkbox />}
        label="Үйлчилгээний нөхцөл зөвшөөрөх"
      />
      <Button
        variant="text"
        sx={{
          width: "384px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "600",
          border: 2,
        }}
      >
        Бүртгүүлэх
      </Button>
    </Box>
  );
}
