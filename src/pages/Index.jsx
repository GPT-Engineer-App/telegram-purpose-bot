import React from "react";
import { Box, Container, Heading, Text, Button, VStack, HStack, Image, useColorModeValue, Icon, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { FaPaperPlane, FaRobot, FaTint } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={6} as="section" textAlign="center">
        <Heading as="h1" size="xl">
          Hydration Tracker Bot
        </Heading>
        <Text fontSize="lg">Stay hydrated with our Telegram bot that helps you track your daily water intake.</Text>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1534616042650-80f5c9b61f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGdsYXNzfGVufDB8fHx8MTcwOTk3NTYwOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Hydration Illustration" />
        </Box>
      </VStack>

      <VStack spacing={8} as="section" my={10}>
        <Heading as="h2" size="lg">
          How It Works
        </Heading>
        <HStack spacing={4} alignItems="center">
          <Icon as={FaRobot} w={10} h={10} color={color} />
          <Text fontSize="md">Add the Hydration Tracker Bot to your Telegram.</Text>
        </HStack>
        <HStack spacing={4} alignItems="center">
          <Icon as={FaTint} w={10} h={10} color={color} />
          <Text fontSize="md">Log your water intake by sending messages to the bot.</Text>
        </HStack>
        <HStack spacing={4} alignItems="center">
          <Icon as={FaPaperPlane} w={10} h={10} color={color} />
          <Text fontSize="md">Receive reminders and summaries of your daily hydration.</Text>
        </HStack>
      </VStack>

      <VStack as="section" bg={bg} p={8} borderRadius="md" boxShadow="md" spacing={6}>
        <Heading as="h3" size="md">
          Try It Out
        </Heading>
        <FormControl id="telegram-user" isRequired>
          <FormLabel>Enter your Telegram username</FormLabel>
          <Input placeholder="@username" />
        </FormControl>
        <Button leftIcon={<FaRobot />} colorScheme="teal" size="lg">
          Connect to Bot
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
