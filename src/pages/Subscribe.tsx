import Logo from "../components/archives/Logo";
import { useNavigate } from "react-router-dom";
import { FormEvent, useContext, useRef } from "react";
import { EmailContext } from "../context/emailContext";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  useCreateSubsMutation,
  useGet_Subscribers_By_EmailQuery,
  usePublishEmailMutation,
} from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();
  const [createSubscriber, { loading }] = useCreateSubsMutation();
  const [PublishEmailMutation] = usePublishEmailMutation();
  const { setName, setEmail, name, email } = useContext(EmailContext);

  const errorMail = () => {
    toast(
      "Usuário não está Cadastrado no Evento, por favor cadastre e concorra a varios brindes!!"
    );
  };
  const SucessMail = () => {
    toast(
      "Cadastro realizado com sucesso, você receberá um e-mail com os dados do evento"
    );
  };

  const { data } = useGet_Subscribers_By_EmailQuery({
    fetchPolicy: "no-cache",
  });

  const handleSubscribe = async (event: FormEvent) => {
    event?.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    }).then(async () => {
      await PublishEmailMutation({
        variables: {
          email,
        },
      });
    });

    SucessMail();
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  };
  const handleToRender = (event: FormEvent) => {
    event?.preventDefault();
    if (
      data?.subscribers.map((emails_subs) => emails_subs.email).includes(email)
    ) {
      navigate("/event");
    } else {
      errorMail();
    }
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center ">
      <div className="w-full max-w-[1380px] flex items-center justify-between mt-20 mx-auto tablet:flex-col">
        <div className="max-w-[640px] tablet:max-w-[350px] ">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa os{" "}
            <strong className="text-blue-500">contratos inteligentes</strong>{" "}
            mais robustos e a integração mais consistente do zero com react e
            web3.
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed tablet:mb-10">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas no universo de blockchain e casos de usos reais com
            didática rica proporcionada pelos melhores profissionais na área do
            Brasil.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded mr-[2rem]">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu E-mail"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              disabled={loading}
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <div className="p-8 bg-gray-700 border border-gray-500 rounded w-[50%] mt-[70px]">
        <strong className="text-2xl mb-6 block">Acesse Agora!</strong>
        <form onSubmit={handleToRender} className="flex flex-col gap-2 w-full">
          <input
            type="email"
            placeholder="Digite seu E-mail"
            className="bg-gray-900 rounded px-5 h-14"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            disabled={loading}
            type="submit"
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            Acessar
          </button>
        </form>
      </div>

      <img src="https://i.ibb.co/6tWvygv/react.png" alt="" className="mt-10" />
      <ToastContainer limit={3} />
    </div>
  );
}
