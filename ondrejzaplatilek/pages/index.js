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
        <title>Ondřej Zaplatílek</title>
        <meta name="description" content="Web developer" />
        
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Media between={["zero", "mobile"]}>

      </Media>
      <Media between={["mobile", "tablet"]}>
        
      </Media>
      <Media between={["tablet", "tv"]}>
        <MainLaptop />
      </Media>
    </>
  );
}
