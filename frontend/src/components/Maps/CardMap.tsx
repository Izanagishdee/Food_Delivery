import { Box, Stack, Typography } from "@mui/material";
import { CardDetails } from "../Something/CardDetails";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export function CardMap() {
  const CardData = [
    {
      icon: <MenuBookIcon />,
      title: "Хүргэлтийн төлөв хянах",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <RamenDiningIcon />,
      title: "Шуурхай хүргэлт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AccessTimeIcon />,
      title: "Эрүүл, баталгаат орц",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AccessTimeIcon />,
      title: "Хоолны өргөн сонголт",
      text: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "1450px",
        height: "155px",
        justifyContent: "space-between",
      }}
    >
      {CardData.map((el, index) => (
        <div key={index}>
          <CardDetails icon={el.icon} title={el.title} text={el.text} />
        </div>
      ))}
    </Stack>
  );
}
