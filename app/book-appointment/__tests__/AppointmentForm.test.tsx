import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import AppointmentForm from "../component/AppointmentForm";
import { useRouter } from "next/navigation";

const queryClient = new QueryClient();

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

// Mock the window.matchMedia() method
window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {},
        };
    };

describe("AppointmentForm Buttons", () => {
    it("should render the buttons", async () => {
        const mockUseRouter = useRouter as jest.Mock;
        mockUseRouter.mockImplementation(() => ({
            push: jest.fn(),
        }));

        const { getByText, getByRole } = render(
            <QueryClientProvider client={queryClient}>
                <AppointmentForm />
            </QueryClientProvider>
        );

        // Check if certain elements are in the document
        expect(screen.getByText("Previous")).toBeInTheDocument();
        expect(screen.getByText("Next")).toBeInTheDocument();

        // Simulate user event
        fireEvent.click(getByText("Next"));
        // Check if the button is disabled
        expect(screen.getByText("Next")).toBeDisabled();
        // Check if the previous button is disabled
        expect(screen.getByText("Previous")).toBeDisabled();
    });
});



