import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../page";
import { useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
    useSearchParams: jest.fn(),
}));

describe("Login", () => {
    it("renders without crashing", () => {
        // Mock the URL parameters
        const mockUseSearchParams = useSearchParams as jest.Mock;

        mockUseSearchParams.mockImplementation(() => new URLSearchParams(""));
        render(<Login />);
    });

    it("should render the component and respond to user interaction", () => {
        // Mock the URL parameters
        const mockUseSearchParams = useSearchParams as jest.Mock;

        mockUseSearchParams.mockImplementation(() => new URLSearchParams(""));
        render(<Login />);

        // Check if certain elements are in the document
        expect(screen.getByText("Welcome back")).toBeInTheDocument();
        expect(
            screen.getByText("Enter username & password to login")
        ).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();

        // Simulate user event
        userEvent.type(screen.getByLabelText("Email"), "test@example.com");
        userEvent.type(screen.getByLabelText("Password"), "password");
        userEvent.click(screen.getByText("Sign In"));

        // Add your assertions here based on the expected behavior after clicking the Sign In button
        // TODO
    });

    it("should display an error message when incorrect login credentials are entered", () => {
        // Mock the URL parameters
        const mockUseSearchParams = useSearchParams as jest.Mock;

        mockUseSearchParams.mockImplementation(
            () => new URLSearchParams("error=Invalid credentials")
        );

        // Render the Login component
        render(<Login />);

        // Simulate user interaction
        userEvent.type(screen.getByLabelText("Email"), "wrong@example.com");
        userEvent.type(screen.getByLabelText("Password"), "wrongpassword");
        userEvent.click(screen.getByText("Sign In"));

        // Check if the error message is displayed
        expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
    });
});
