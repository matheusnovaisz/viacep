import { address } from "@prisma/client";
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

type CEPConsulta = address & { erro?: boolean };

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { cep } = context.params;
  const cepFormat =
    cep.length === 8 ? cep.slice(0, -3) + "-" + cep.slice(-3) : cep;
  let address: CEPConsulta;
  address = await prisma.address.findUnique({
    where: {
      cep: String(cepFormat),
    },
  });

  if (!address) {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/
    `);
    if (res.status === 400) {
      return {
        redirect: {
          destination: `/404`,
        },
      };
    }
    address = await res.json();
    if (!address.erro) {
      await prisma.address.create({
        data: address,
      });
    }
  }
  return {
    props: {
      data: address,
    },
  };
}
