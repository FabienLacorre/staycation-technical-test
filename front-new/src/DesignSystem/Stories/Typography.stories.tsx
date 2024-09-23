// Libs

// Components
import { Typography } from "../Atoms/Typography";

export default {
  title: "Design System/Atom/Typography",
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

export const Template = () => {
  return (
    <div>
      <Typography>this is a test</Typography>
    </div>
  );
};

export const Primary = Template.bind({});
