import { Stack, Box } from "@mui/material";

type PropsType = {
  icon: any;
  title: string;
  text: string;
};

export const CardDetails = (props: PropsType) => {
  const { icon, title, text } = props;

  return (
    <Stack
      sx={{
        width: "290px",
        height: "165px",

        flexBasis: 300,
        borderRadius: "16px",
        boxShadow: "5px 5px 25px #D6D8DB",
        padding: "20px 20px",
        gap: "50px",
      }}
    >
      <Stack
        sx={{
          color: "green",
          fontSize: "60px",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        {icon}
      </Stack>
      <Stack sx={{ gap: "10px" }}>
        <Box
          sx={{
            fontSize: "24px",
            fontFamily: "sans-serif",
            fontWeight: "semi-bold",
            display: "flex",
            gap: "40px",
          }}
        >
          {title}
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            fontFamily: "sans-serif",
            color: "gray",
            marginTop: "5px",
          }}
        >
          {text}
        </Box>
      </Stack>
    </Stack>
  );
};
