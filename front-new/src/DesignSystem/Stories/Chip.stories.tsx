// Libs

// Components
import { Chip } from "../Atoms/Chip";
import { Typography } from "../Atoms/Typography";

export default {
  title: "Design System/Atom/Chip",
  component: Typography,
  args: {},
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};

const PrimaryVariant = () => {
  return (
    <Chip>
      <Typography size="XS" isBold>{`-10%`}</Typography>
    </Chip>
  );
};

export const Primary = PrimaryVariant.bind({});
