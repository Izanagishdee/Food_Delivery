import { Box, Stack, Typography } from "@mui/material";

type Propstype = {
  icon: any;
  title: string;
  text: string;
};

export const CardDetails = (props: Propstype) => {
  const { icon, title, text } = props;
  return (
    <Stack
      sx={{
        width: "265px",
        height: "155px",
        borderRadius: "16px",
        border: "1px",
        gap: "15px",
        padding: "16px",
        boxShadow: "5px 5px 25px #D6D8DB",
      }}
    >
      <Box sx={{ width: "60px", height: "60px" }}>{icon}</Box>
      <Box
        flexDirection={"column"}
        sx={{ width: "233px", height: "48px", gap: "4px" }}
      >
        <Typography
          sx={{
            width: "fit",
            height: "27px",
            fontFamily: "sans-serif",
            fontSize: "18px",
            lineHeight: "27px",
            fontWeight: "700",
            color: "#272727",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            width: "fit",
            height: "17px",
            fontFamily: "sans-serif",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#272727",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Stack>
  );
};
