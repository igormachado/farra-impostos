import { createContext, ReactNode, useState } from "react";

interface childrenTypeFiles {
  children: ReactNode;
}

interface DepartamentoTypesProps {
  prefeiturarj: string;
  setPrefeiturarj: React.Dispatch<React.SetStateAction<string>>;

  governorj: string | undefined;
  setGovernorj: React.Dispatch<React.SetStateAction<string>>;

  impostProdutos: string | undefined;
  setImpostoProdutos: React.Dispatch<React.SetStateAction<string>>;
}

export const useDepartamentosContext = createContext(
  {} as DepartamentoTypesProps
);

export function DepartamentosContext({ children }: childrenTypeFiles) {
  const [prefeiturarj, setPrefeiturarj] = useState("");
  const [governorj, setGovernorj] = useState("");

  const [impostProdutos, setImpostoProdutos] = useState("");

  console.log(prefeiturarj);

  return (
    <useDepartamentosContext.Provider
      value={{
        prefeiturarj,
        setPrefeiturarj,
        governorj,
        setGovernorj,
        impostProdutos,
        setImpostoProdutos,
      }}
    >
      {children}
    </useDepartamentosContext.Provider>
  );
}
