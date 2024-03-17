import { Stack } from "@mui/material";
import { CardDetails } from "../Something/CardDetails";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import RiceBowlIcon from "@mui/icons-material/RiceBowl";

const CardData = [
  {
    icon: (
      <AutoStoriesOutlinedIcon sx={{ fontSize: "35px", color: "#18BA51" }} />
    ),
    title: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: "35px", color: "#18BA51" }} />,
    title: "Шуурхай хүргэлт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <RiceBowlIcon sx={{ fontSize: "35px", color: "#18BA51" }} />,
    title: "Эрүүл, баталгаат орц",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: "35px", color: "#18BA51" }} />,
    title: "Хоолны өргөн сонголт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

export default function CardMap() {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        width: "98%",
        height: "fit",
        alignItems: "center",
        gap: "82px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {CardData?.map((el, index) => (
        <Stack key={index}>
          <CardDetails icon={el.icon} title={el.title} text={el.text} />
        </Stack>
      ))}
    </Stack>
  );
}
