import styles from "../styles/CepInfo.module.css";

export default function CepInfo({ info }) {
  return (
    <div className={styles.card}>
      <h2>Endereço: {info.logradouro}</h2>
      <h2>Bairro: {info.bairro}</h2>
      <h2>
        Cidade: {info.localidade} - {info.uf}
      </h2>
    </div>
  );
}
