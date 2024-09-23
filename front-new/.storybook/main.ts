export default {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],

    addons: [
        "@storybook/addon-links",
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
            },
        },
        "@storybook/addon-interactions",
        "@storybook/addon-mdx-gfm",
    ],

    framework: {
        name: "@storybook/react-vite",
    },

    docs: {
        autodocs: true,
    },

    core: {
        builder: "@storybook/builder-vite",
    },
};
