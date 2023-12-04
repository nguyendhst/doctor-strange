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
        // Check if the button is enabled
        const nextButton = getByRole("button", { name: /next/i });
        expect(nextButton).toBeEnabled();
        // Check if the previous button is disabled
        const previousButton = getByRole("button", { name: /previous/i });
        expect(previousButton).toBeDisabled();
    });
});

describe("AppointmentForm Step 1", () => {
    it("when no value is entered, clicking the Next button will prompt errors in each missing fields", async () => {
        const mockUseRouter = useRouter as jest.Mock;
        mockUseRouter.mockImplementation(() => ({
            push: jest.fn(),
        }));

        const { getByText, getByRole } = render(
            <QueryClientProvider client={queryClient}>
                <AppointmentForm />
            </QueryClientProvider>
        );

        // Simulate user event
        fireEvent.click(getByText("Next"));

        // Check if the error message is displayed
        const nameError = await screen.findByText("Your name is required!");
        expect(nameError).toBeInTheDocument();

        const genderError = await screen.findByText(
            "Please choose your gender!"
        );
        expect(genderError).toBeInTheDocument();

        const dobError = await screen.findByText(
            "Please fill in your date of birth!"
        );
        expect(dobError).toBeInTheDocument();

        const contactError = await screen.findByText(
            "Please provide us with your contact number!"
        );
        expect(contactError).toBeInTheDocument();
    });

    it("when invalid name is entered, clicking the Next button will prompt errors in the respective fields", async () => {
        const mockUseRouter = useRouter as jest.Mock;
        mockUseRouter.mockImplementation(() => ({
            push: jest.fn(),
        }));

        const { getByText, getByRole } = render(
            <QueryClientProvider client={queryClient}>
                <AppointmentForm />
            </QueryClientProvider>
        );

        fireEvent.input(screen.getByLabelText("Your Name"), {
            target: { value: "123" },
        });

        fireEvent.click(getByText("Next"));

        // Check if the error message is displayed

        const nameError = await screen.findByText(
            "Your name must be a valid email!"
        );
        expect(nameError).toBeInTheDocument();
    });

    it("when valid values are entered, clicking the Next button will proceed to the next step", async () => {
        const mockUseRouter = useRouter as jest.Mock;
        mockUseRouter.mockImplementation(() => ({
            push: jest.fn(),
        }));

        const { getByText, getByRole } = render(
            <QueryClientProvider client={queryClient}>
                <AppointmentForm />
            </QueryClientProvider>
        );

        // Simulate user event
        fireEvent.input(screen.getByLabelText("Name"), {
            target: { value: "John Doe" },
        });
        fireEvent.input(screen.getByLabelText("Contact Number"), {
            target: { value: "12345678" },
        });
        fireEvent.input(screen.getByLabelText("Email"), {
            target: { value: "test@gmail.com" },
        });

        fireEvent.click(getByText("Next"));

        // Check if the error message is displayed
        const nameError = await screen.queryByText(
            "Your name must be a valid name!"
        );
        expect(nameError).not.toBeInTheDocument();

        const contactError = await screen.queryByText(
            "Your contact number must be a valid number!"
        );
        expect(contactError).not.toBeInTheDocument();

        const emailError = await screen.queryByText(
            "Your email must be a valid email!"
        );
        expect(emailError).not.toBeInTheDocument();

        // Check if the button is enabled
        const nextButton = getByRole("button", { name: /next/i });
        expect(nextButton).toBeEnabled();

        // Check if the previous button is enabled
        const previousButton = getByRole("button", { name: /previous/i });
        expect(previousButton).toBeEnabled();

        // Check if the current step is 2
        const currentStep = screen.getByText("Step 2");
        expect(currentStep).toBeInTheDocument();

        // Check if the form is rendered
        const form = screen.getByText(
            "Please choose your preferred date and time"
        );
        expect(form).toBeInTheDocument();
    });
});
