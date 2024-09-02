import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS MySQL CRUD</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <main>
        <Layout />
      </main>
    </>
  );
}
