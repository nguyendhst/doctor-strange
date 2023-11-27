const nextJest = require("next/jest");

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jest-environment-jsdom",
    //transform: {
    //    "^.+\\.ts?$": "ts-jest",
    //},
    //transformIgnorePatterns: ["<rootDir>/node_modules/"],
    testPathIgnorePatterns: ["/node_modules/"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
//module.exports = createJestConfig(customJestConfig);

module.exports = async () => ({
    ...(await createJestConfig(customJestConfig)()),
    transformIgnorePatterns: [
        // The regex below is just a guess, you might tweak it
        "node_modules/(?!(react-markdown|rehype-raw|remark-gfm|ahooks)/)",
    ],
});
