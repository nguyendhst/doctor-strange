import { useSearchParams } from "next/navigation";
import { render, screen } from "@testing-library/react";
import Messages from "../messages";

// Mock the useSearchParams hook
// The useSearchParams hook is used to get the URL parameters.
// It is a custom hook provided by the next/navigation package.
// We need to mock this hook to test the Messages component.
jest.mock("next/navigation", () => ({
    useSearchParams: jest.fn(),
}));

describe("Messages", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render error message", () => {
        // Cast the function to jest.Mock or jest.MockedFunction before calling mockImplementation.
        // This will tell TypeScript that the function is a Jest mock function and should have the 
		// mockImplementation method.
        const mockUseSearchParams = useSearchParams as jest.Mock;
        mockUseSearchParams.mockImplementation(
            () => new URLSearchParams("error=mockedError")
        );

        render(<Messages />);

		// screen is a global variable exposed by the @testing-library/react library.
		// It is used to query the DOM for elements.

		// getByText is a query that returns the first matching node for a given query.
		// If no elements match the query, an error is thrown.
        expect(screen.getByText("mockedError")).toBeInTheDocument();
    });

    it("should render success message", () => {
        const mockUseSearchParams = useSearchParams as jest.Mock;
        mockUseSearchParams.mockImplementation(
            () => new URLSearchParams("message=mockedMessage")
        );

        render(<Messages />);

        expect(screen.getByText("mockedMessage")).toBeInTheDocument();
    });

    it("should not render any message", () => {
        const mockUseSearchParams = useSearchParams as jest.Mock;
        mockUseSearchParams.mockImplementation(() => new URLSearchParams(""));

        render(<Messages />);

        expect(screen.queryByText("mockedError")).not.toBeInTheDocument();
        expect(screen.queryByText("mockedMessage")).not.toBeInTheDocument();
    });
});
