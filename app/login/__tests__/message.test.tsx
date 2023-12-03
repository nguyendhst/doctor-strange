import { useSearchParams } from "next/navigation";
import { render, screen } from "@testing-library/react";
import Messages from "../messages";

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
