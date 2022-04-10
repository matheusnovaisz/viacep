import { GetServerSidePropsContext } from "next";
import CepInfo from "../../components/CepInfo";
import SearchCep from "../../components/SearchCep";
import prisma from "../../lib/prisma";
import styles from "../../styles/Cep.module.css";

export default function cep({ data }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Informações do CEP <span>{data.cep}</span>
      </h1>
      {data.erro ? <h2>CEP não existente</h2> : <CepInfo info={data} />}
      <SearchCep />
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { cep } = context.params;
  const cepFormat =
    cep.length === 8 ? cep.slice(0, -3) + "-" + cep.slice(-3) : cep;
  let adress = await prisma.adress.findUnique({
    where: {
      cep: String(cepFormat),
    },
  });

  if (!adress) {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/
    `);
    if (res.status === 400) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
    adress = await res.json();
    if (!adress.erro) {
      await prisma.adress.create({
        data: adress,
      });
    }
  }
  return {
    props: {
      data: adress,
    },
  };
}
