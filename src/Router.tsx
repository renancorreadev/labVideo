import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { EmailContext } from "./context/emailContext";
import { useGet_Subscribers_By_EmailQuery } from "./graphql/generated";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  const { email } = useContext(EmailContext);

  const { data } = useGet_Subscribers_By_EmailQuery({
    fetchPolicy: "no-cache",
  });

  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
