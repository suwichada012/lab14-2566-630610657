"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" color="yellow"></Rating>
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        mt="xs"
        minRows={3}
      />
      <Button color="orange" mt="xs">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating size="sm" color="yellow" defaultValue={5}></Rating>
      </Group>
      <Text align="center" fz="md" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating size="sm" color="yellow" defaultValue={4}></Rating>
      </Group>
      <Text align="center" fz="md" color="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination
        total={20}
        color="orange"
        position="center"
        mt="md"
      ></Pagination>
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Suwichada pongkanmoon 630610657
      </Text>
    </Container>
  );
}
