import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MediaCard from "./MediaCard";
import { useGetAllPokemonsQuery, useGetPokemonDetailsQuery } from "../utils/apiSlice";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { BasicModal } from "./Modal";
export interface Root {
  count: number;
  next: string;
  previous: any;
  results: Result[];
}
export interface Result {
  name: string;
  url: string;
}
const Catalog = () => {
  const { data } = useGetAllPokemonsQuery({});
  const {data: Detail} = useGetPokemonDetailsQuery(35)
  const { setPostId } = useActions();
  const { postId } = useTypedSelector((store) => store.post);

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
        <Grid container spacing={2}>
          {data?.results?.map((item: any, i: number) => (
            <Grid item xs={3} key={i}>
              <MediaCard item={item} index={i + 1}  />
            </Grid>
          ))}
        </Grid>
      {postId && <BasicModal open={!!postId} setOpen={setPostId} />}
      </Box>
    </Container>
  );
};

export default Catalog;
