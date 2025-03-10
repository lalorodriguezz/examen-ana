import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProfilePage: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<"masculino" | "femenino" | null>(null);
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const handleGenderSelect = (gender: "masculino" | "femenino") => {
    setSelectedGender(gender);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* Botón para volver */}
      <div className="self-start mb-6">
        <Button
          variant="ghost"
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
        >
          <span className="sr-only">Volver</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
      </div>

      {/* Tarjeta del perfil */}
      <Card className="w-full max-w-lg bg-white shadow-xl rounded-3xl">
        <CardContent>
          <div className="flex flex-col items-center mb-8">
            {/* Imagen del perfil */}
            <div className="relative w-28 h-28 mb-4">
              <img
                src="./src/images/profile.jpg" // Asegúrate de que el path sea correcto
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 2.487a2.25 2.25 0 00-3.181 0l-.948.95 4.13 4.13.949-.95a2.25 2.25 0 000-3.181l-1.314-1.314zm-2.12 6.606l-4.13-4.13L3.22 12.354a4.5 4.5 0 00-1.029 1.638l-.663 2.324a.75.75 0 00.92.92l2.324-.663a4.5 4.5 0 001.638-1.029l7.522-7.522z"
                  />
                </svg>
              </button>
            </div>

            <h1 className="text-2xl font-bold text-gray-800">Perfil</h1>
          </div>

          {/* Formulario */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Nombre de pila</label>
              <Input placeholder="Nombre de pila" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Apellido</label>
              <Input placeholder="Apellido" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Correo electrónico</label>
              <Input
                placeholder="Correo electrónico"
                type="email"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Fecha de nacimiento</label>
              <div className="relative">
                <DatePicker
                  selected={birthDate}
                  onChange={(date) => setBirthDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Selecciona tu fecha de nacimiento"
                  className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                />
                <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Género</label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => handleGenderSelect("masculino")}
                  className={`flex items-center justify-center w-full p-3 border rounded-xl shadow-sm transition ${
                    selectedGender === "masculino" ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Masculino
                  {selectedGender === "masculino" && <Check className="ml-2 w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleGenderSelect("femenino")}
                  className={`flex items-center justify-center w-full p-3 border rounded-xl shadow-sm transition ${
                    selectedGender === "femenino" ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Femenino
                  {selectedGender === "femenino" && <Check className="ml-2 w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Ubicación</label>
              <Input
                placeholder="Ubicación"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Guardar cambios
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
