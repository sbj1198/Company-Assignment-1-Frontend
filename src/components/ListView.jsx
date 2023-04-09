import {
  Box,
  Center,
  Flex,
  Stack,
  StackDivider,
  Text,
  IconButton,
} from "@chakra-ui/react";
import * as React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { LoaderSpinner } from "./LoaderSpinner";

export const ListView = ({ users }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (users.length) {
      setIsLoading(false);
    }
  }, [users]);

  return (
    <>
      <Center
        maxW="sm"
        mx="auto"
        py={{
          base: "4",
          md: "8",
        }}
      >
        {!isLoading ? (
          <Box
            bg="bg-surface"
            py="4"
            minW="300px"
            boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
          >
            <Stack divider={<StackDivider />} spacing="4">
              {users.map((user) => (
                <Stack key={user.id} fontSize="sm" px="4" spacing="0.5">
                  <Box>
                    <Text fontWeight="medium" color="emphasized">
                      {user.name}
                    </Text>
                    <Text color="subtle">Email: {user.email}</Text>
                  </Box>
                  <Text
                    color="muted"
                    sx={{
                      "-webkit-box-orient": "vertical",
                      "-webkit-line-clamp": "2",
                      overflow: "hidden",
                      display: "-webkit-box",
                    }}
                  >
                    {user.bio}
                  </Text>
                  <Flex pt="10px">
                    <IconButton
                      mr="8px"
                      variant="outline"
                      colorScheme="teal"
                      aria-label="Delete user"
                      size="sm"
                      icon={<DeleteIcon />}
                    />
                    <IconButton
                      variant="outline"
                      colorScheme="teal"
                      aria-label="Delete user"
                      size="sm"
                      icon={<EditIcon />}
                    />
                  </Flex>
                </Stack>
              ))}
            </Stack>
          </Box>
        ) : (
          <LoaderSpinner />
        )}
      </Center>
    </>
  );
};
