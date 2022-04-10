import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import styles from "../styles/SearchCep.module.css";

export default function SearchCep() {
  const [cep, setCep] = useState<String>("");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(cep);
    router.push(`/cep/${cep}`);
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        inputMode="numeric"
        placeholder="CEP"
        id="CEP"
        onChange={(e) => setCep(e.target.value)}
      />
      <button type="submit">Consultar</button>
    </form>
  );
}
