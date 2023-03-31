import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useGetPokemonDetailsQuery } from "../utils/apiSlice";
import CardMedia from '@mui/material/CardMedia';
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  setOpen: (open: number) => void;
};

export const BasicModal: FC<Props> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(0);
  const { postId } = useTypedSelector((store) => store.post);
  const { data } = useGetPokemonDetailsQuery(postId);
  console.log(data);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data?.name}
          </Typography>
          <CardMedia
            component="img"
            height="194"
            image={data?.sprites?.back_default}
            alt="Paella dish"
          />
        </Box>
      </Modal>
    </div>
  );
};
