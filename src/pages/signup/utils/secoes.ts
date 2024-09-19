const SECOES = [
  {
    id: 0,
    titulo: "Informações Básicas",
    campos: [
      {
        id: 0,
        label: "Nome",
        placeholder: "Informe o seu nome",
      },
      {
        id: 1,
        label: "Email",
        placeholder: "Informe o seu e-mail",
      },
    ],
    buttonText: "Avançar",
  },
  {
    id: 1,
    titulo: "Informações de Endereço",
    campos: [
      {
        id: 0,
        label: "CEP",
        placeholder: "Informe o seu CEP",
      },
    ],
    buttonText: "Avançar",
  },
  {
    id: 2,
    titulo: "Finalização de cadastro",
    checkBox: [
      {
        id: 0,
        value: "Sulamerica",
      },
      {
        id: 1,
        value: "Unimed",
      },
      {
        id: 2,
        value: "Bradesco",
      },
      {
        id: 3,
        value: "Amil",
      },

      {
        id: 4,
        value: "Golden Cross",
      },
      {
        id: 5,
        value: "Allianz",
      },
    ],
    buttonText: "Confirmar",
  },
];

export default SECOES;
