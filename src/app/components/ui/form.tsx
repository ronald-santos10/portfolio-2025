"use client";

import axios from "axios";
import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 11);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://formspree.io/f/xgvvqlpz", formData);
      alert("Mensagem enviada com sucesso!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Nome"
        onChange={handleChange}
        required
        className="text-zinc-50 stroke-custom outline-none p-5 rounded-lg bg-custom-gradient"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="E-mail"
        onChange={handleChange}
        required
        className="text-zinc-50 stroke-custom outline-none p-5 rounded-lg bg-custom-gradient"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        placeholder="Telefone"
        onChange={handleChange}
        maxLength={11}
        required
        className="text-zinc-50 stroke-custom outline-none p-5 rounded-lg bg-custom-gradient"
      />
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <textarea
        name="message"
        value={formData.message}
        placeholder="Mais alguma informação? Fique à vontade."
        onChange={handleChange}
        className="text-zinc-50 stroke-custom outline-none p-5 rounded-lg bg-custom-gradient"
      ></textarea>
      <button
        type="submit"
        className="flex items-center justify-center cursor-pointer text-center font-bold rounded-md md:rounded-lg py-3 px-5 md:py-4 md:px-9 bg-primary text-bg"
      >
        Enviar
      </button>
    </form>
  );
};
