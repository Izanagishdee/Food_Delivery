"use client";
import { Box, Stack, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Divider } from "@mui/joy";

export default function Footer() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "2500px",
          height: "445px",
          position: "absolute",
          zIndex: "0",
        }}
      >
        <img src="Footer.png" alt="" width={2500} height={445} />
      </Box>
      <Stack
        sx={{
          width: "2100px",
          height: "422px",
          gap: "20px",
          position: "absolute",
          zIndex: "10",
          top: "284px",
          left: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ width: "212px", height: "41px", gap: "8px" }}>
          <img src="LogoFooter.png" alt="" width={212} height={41} />
        </Stack>
        <Stack
          sx={{
            width: "2100px",
            height: "22px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Link href="#" color="#FFFFFF">
            Нүүр
          </Link>
          <Link href="#" color="#FFFFFF">
            Холбоо барих
          </Link>
          <Link href="#" color="#FFFFFF">
            Хоолны цэс
          </Link>
          <Link href="#" color="#FFFFFF">
            Үйлчилгээний нөхцөл
          </Link>
          <Link href="#" color="#FFFFFF">
            Хүргэлтийн бүс
          </Link>
          <Link href="#" color="#FFFFFF">
            Нуууцлалын бодлого
          </Link>
        </Stack>
        <Stack
          sx={{
            width: "180px",
            height: "66px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <img src="facebook.png" alt="" width={40} height={46} />
          <img src="instagram.png" alt="" width={40} height={46} />
          <img src="twitter.png" alt="" width={40} height={46} />
        </Stack>
        <Divider orientation="horizontal" color="#FFFFFF" />
        <Stack
          sx={{
            width: "319px",
            height: "46px",
            display: "flex",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          <Typography>© 2024 Pinecone Foods LLC</Typography>
          <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
