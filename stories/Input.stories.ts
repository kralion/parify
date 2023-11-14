import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;
export const Primary: Story = {
  args: {
    placeholder: "Insert your name",
  },
};

export const Warning: Story = {
  args: {
    placeholder: "Insert your name",
    backgroungColor: "yellow",
  },
};
