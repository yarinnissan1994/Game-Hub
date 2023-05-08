import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const onSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem
            paddingY="5px"
            borderRadius="10px"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform .15s ease-in",
            }}
            key={genre.id}
          >
            <HStack paddingLeft={1}>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCropImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectedGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
