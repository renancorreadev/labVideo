import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface EmailProviderProps {
  children: ReactNode;
}

export const EmailContext = createContext<any>("");

export function EmailProvider({ children }: EmailProviderProps) {
  const [email, setEmail] = useState<any>({});
  const [name, setName] = useState("");

  return (
    <EmailContext.Provider value={{ setName, setEmail, name, email }}>
      {children}
    </EmailContext.Provider>
  );
}
