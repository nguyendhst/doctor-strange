import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../page";
import { useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
    useSearchParams: jest.fn(),
}));

// This function is used for grouping together related tests. 
// The first argument is a string that describes the group, 
// and the second argument is a function that contains the tests. 
// This is useful for organizing your tests into logical sections 
// and can be nested.
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

        // Check if the Messages component is rendered
        expect(screen.getByText("Welcome back")).toBeInTheDocument();
        expect(
            screen.getByText("Enter username & password to login")
        ).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
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

    it("should display an error when the email is not valid", () => {
        // Mock the URL parameters
        const mockUseSearchParams = useSearchParams as jest.Mock;

        mockUseSearchParams.mockImplementation(
            () => new URLSearchParams("error=Invalid credentials")
        );

        // Render the Login component
        render(<Login />);

        // Simulate user interaction
        userEvent.type(screen.getByLabelText("Email"), "wrong@");
        userEvent.type(screen.getByLabelText("Password"), "wrongpassword");
        userEvent.click(screen.getByText("Sign In"));

        // Check if the error message is displayed
        expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
    });
});
