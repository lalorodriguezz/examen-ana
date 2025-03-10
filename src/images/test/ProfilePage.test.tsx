import { render, screen, fireEvent } from "@testing-library/react";
import ProfilePage from "../../components/ui/ProfilePage";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

// filepath: c:\Users\Latitude 5490\Desktop\examen-e\src\components\ui\ProfilePage.test.tsx

describe("ProfilePage", () => {
  it("renders profile image", () => {
    render(<ProfilePage />);
    const profileImage = screen.getByAltText("Profile");
    expect(profileImage).toBeInTheDocument();
  });

  it("renders form fields", () => {
    render(<ProfilePage />);
    expect(screen.getByPlaceholderText("Nombre de pila")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Apellido")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Correo electrónico")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Selecciona tu fecha de nacimiento")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ubicación")).toBeInTheDocument();
  });

  it("renders gender selection buttons", () => {
    render(<ProfilePage />);
    expect(screen.getByText("Masculino")).toBeInTheDocument();
    expect(screen.getByText("Femenino")).toBeInTheDocument();
  });

  it("handles gender selection", () => {
    render(<ProfilePage />);
    const maleButton = screen.getByText("Masculino");
    const femaleButton = screen.getByText("Femenino");

    fireEvent.click(maleButton);
    expect(maleButton).toHaveClass("bg-blue-500 text-white");

    fireEvent.click(femaleButton);
    expect(femaleButton).toHaveClass("bg-blue-500 text-white");
  });

  it("handles form submission", () => {
    render(<ProfilePage />);
    const submitButton = screen.getByText("Guardar cambios");
    fireEvent.click(submitButton);
    // Add assertions to check form submission behavior
  });
});