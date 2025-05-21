// src/components/FormField.tsx
import React from "react";

type InputProps = {
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  email?: string;
  phone?: string;
  numberOfLives?: string;
  typeOfPlan?: string;
};

const FormField: React.FC<InputProps> = ({
  className = "",
  id = "",
  name = "",
  value = "",
  email = "",
  phone = "",
  numberOfLives = "",
  typeOfPlan = "",
}) => {
  // extract your base classes so you can reuse for both inputs & selects
  const baseControl =
    "w-full border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-12 px-3";

  return (
    <div className={className}>
      <div className="mb-4 bg-gray-200 p-6 space-y-4 rounded">
        <h2 className="text-2xl font-bold mb-4">Solicite sua Cotação</h2>

        {/* Name */}
        <input
          type="text"
          id={id}
          name={name}
          placeholder="Nome"
          defaultValue={value}
          className={baseControl}
        />

        {/* Email */}
        <input
          type="email"
          id={id ? `${id}-email` : "email"}
          name="email"
          placeholder="Email"
          defaultValue={email}
          className={baseControl}
        />

        {/* Phone */}
        <input
          type="tel"
          id={id ? `${id}-phone` : "phone"}
          name="phone"
          placeholder="Celular"
          defaultValue={phone}
          className={baseControl}
        />

        {/* Number of Lives */}
        <input
          type="text"
          id={id ? `${id}-lives` : "numberOfLives"}
          name="numberOfLives"
          placeholder="Número de vidas"
          defaultValue={numberOfLives}
          className={baseControl}
        />

        {/* Type of Plan */}
        <select
          id={id ? `${id}-plan` : "typeOfPlan"}
          name="typeOfPlan"
          defaultValue={typeOfPlan}
          className={`${baseControl} appearance-none`}
        >
          <option value="" disabled>
            Selecione seu plano
          </option>
          <option value="basic">Linha Pro</option>
          <option value="premium">Linha Porto Saúde</option>
          <option value="family">Linha Tradicional</option>
          <option value="business">Linha Porto Bairros</option>
        </select>
      </div>
    </div>
  );
};

export default FormField;
