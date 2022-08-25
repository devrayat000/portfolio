import {
  Group,
  Stack,
  Container,
  SimpleGrid,
  Grid,
  Progress,
  Image,
  Timeline,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { m } from "framer-motion";
import { Fragment } from "react";

export const MotionGroup = m(Group);
export const MotionStack = m(Stack);
export const MotionContainer = m(Container);
export const MotionSimpleGrid = m(SimpleGrid);
export const MotionGrid = m(Grid);
export const MotionFragment = m(Fragment);
export const MotionImage = m(Image);
export const MotionTimeline = m(Timeline);
export const MotionTimelineItem = m(Timeline.Item);
export const MotionLink = m(Link);

export const MotionProgress = m(Progress);
