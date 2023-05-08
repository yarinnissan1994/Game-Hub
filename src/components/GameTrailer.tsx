import { Box } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <Box marginBottom={2}>
      <video src={first.data[480]} poster={first.preview} controls />
    </Box>
  ) : null;
};

export default GameTrailer;
