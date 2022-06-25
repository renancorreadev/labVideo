import { ApolloProvider } from "@apollo/client";
import { Router } from "./Router";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import { EmailProvider } from "./context/emailContext";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <EmailProvider>
          <Router />
        </EmailProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
