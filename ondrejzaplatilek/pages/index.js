import {
  ActionIcon,
  Button,
  Grid,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainLaptop from "../components/Main/MainLaptop";
import { Media } from "../Media";

export default function Main() {

  return (
    <>
      <Head>
        <title>Vinarštví Badinovi</title>
        <meta name="description" content="Web developer" />
        <meta name="google-site-verification" content="PQuzoX-t9YNIik7q_sh0ts1vY0q9C-ByhgDpyK_08Dk" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Media between={["zero", "mobile"]}>

      </Media>
      <Media between={["mobile", "tablet"]}></Media>
      <Media between={["tablet", "tv"]}>
        <MainLaptop />
      </Media>
    </>
  );
}
