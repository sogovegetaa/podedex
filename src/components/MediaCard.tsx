import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BasicModal } from "./Modal";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { setPostId } from "../utils/postSlice";
interface Props {
  name: string;
  item: string;
  index: number;
}
export default function MediaCard({ item, index }: any) {
  const [open, setOpen] = React.useState(false);
  const { setPostId } = useActions();
  const handleOpen = () => {
    setPostId(index)
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{ cursor: "pointer" }} onClick={handleOpen}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {item?.name}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
