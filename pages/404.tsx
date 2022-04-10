import Error from "next/error";

export default function NotFound() {
  return (
    <main>
      <Error statusCode={404} title={`O CEP é inválido`} />
    </main>
  );
}
