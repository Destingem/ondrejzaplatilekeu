import {
  ActionIcon,
  Button,
  Card,
  Grid,
  Input,
  Paper,
  Progress,
  Text,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core";
import Image from "next/image";
import { useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BsFillMoonFill,
  BsSunFill,
  BsTelephone,
  BsInstagram,
} from "react-icons/bs";
import useDeviceSize from "../myHooks/deviceSIze";
import styles from "./MainLaptop.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { ImLinkedin2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { classicNameResolver, transform } from "typescript";
import { useForm } from "@mantine/form";
import Navbar from "../UI/Navbar";
export default function MainLaptop() {
  const video = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  var [scroll, scrollTo] = useWindowScroll();
  var [device_x, device_y] = useDeviceSize();
  var form = useForm({
    initialValues: {
      jmeno: "",
      prijmeni: "",
      email: "",
      tel: "",
      firma: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Zadejte platný email",
      jmeno: (value) => (value.length > 0 ? null : "Zadejte jméno"),
      prijmeni: (value) => (value.length > 0 ? null : "Zadejte příjmení"),
    },
  });

  useEffect(() => {
    if (device_y < scroll.y) {
      video.current.pause();

      setIsPlaying(false);
    }
    if (isPlaying == false) {
      if (device_y > scroll.y) {
        video.current.play();
      }
    }
  }, [scroll]);
  return (
    <>
      <video
        ref={video}
        autoPlay
        loop
        muted
        height="100px"
        style={{
          height: "100vh"
        }}
        className={
          colorScheme === "dark"
            ? styles.video
            : styles.video + " " + styles.invert
        }
      >
        <source src="background-min.webm" />
      </video>
      <div style={{ display: "flex", flexDirection: "column", margin: 0 }}>
        <div style={{ height: "100vh" }} className={styles.main}>
          <Navbar />
          <div style={{ textAlign: "center", margin: "30vh 0 0 0" }}>
            <Text size="xl" sx={{ fontWeight: 600, fontSize: "6rem" }}>
              Ondřej Zaplatílek
            </Text>
            <Text size="xl">Web developer</Text>
            <div
              style={{
                position: "absolute",
                bottom: "5vh",
                transform: "translate(-50%,-50%)",
                left: "50%",
              }}
              onClick={() => {
                scrollTo({ y: device_y });
              }}
            >
              <div style={{ transform: "rotate(270deg)", zIndex: "-1" }}>
                <MdOutlineArrowBackIosNew
                  fontSize="4rem"
                  className={styles.arrow}
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div
          style={
            colorScheme === "dark"
              ? { backgroundColor: "black", height: "100vh" }
              : { backgroundColor: " #fff", height: "100vh" }
          }
        >
          <div style={{ width: "100%", height: "100%", padding: "5vh 4vh" }}>
            <Text size="xl" sx={{ fontSize: "4rem" }}>
              O mně
            </Text>
            <div style={{ display: "flex" }}>
              <div>
                <Text size="xl" mt="5vh">
                  Jmenuji se Ondřej a baví mě web development. Studuji na SŠIPF
                  Brno obor Informační technologie se zaměřením na kybernetickou
                  bezpečnost. Tvořím především v Webové aplikace postavené na
                  React.js ve frameworku Next.js.
                </Text>
                <Grid sx={{ margin: "5vh 0 0 0" }}>
                  <Paper shadow="xl" sx={{alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                    <Image src="/next.png" width={100} height={100}></Image>
                    <Text size="xl">Next.js</Text>
                  </Paper>
                </Grid>
                <Button
                  sx={{ margin: "2vh 0 0 0" }}
                  type="submit"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "green" }}
                >
                  Více o mě
                </Button>
                
              </div>
              <div>
                <Image
                  src="/me.png"
                  alt="Profilová fotka Ondřej Zaplatílek"
                  width={600}
                  height={600}
                  style={{ borderRadius: "3px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={
            colorScheme === "dark"
              ? { backgroundColor: "black", height: "100vh" }
              : { backgroundColor: "white", height: "100vh" }
          }
        >
          <div style={{ width: "100%", height: "100%", padding: "5vh 4vh" }}>
            <Text size="xl" sx={{ fontSize: "4rem" }}>
              Projekty
            </Text>
            <Text size="xl" mt="5vh">
              Baví mě zkoušet nové věci a především tvořit a to jak pro sebe tak
              i pro ostatní. Níže se můžete podívat na stránky které jsem
              tvořil.
            </Text>
          </div>
        </div>
        <div
          style={
            colorScheme === "dark"
              ? {
                  backgroundColor: "#272829",
                  height: "fit-content",
                  display: "flex",
                  minHeight: "50vh",
                }
              : {
                  backgroundColor: " #cccccc",
                  height: "fit-content",
                  display: "flex",
                  minHeight: "50vh",
                }
          }
        >
          <div style={{ width: "100%", height: "100%", padding: "2vh 4vh" }}>
            <Text size="xl" sx={{ fontSize: "4rem" }}>
              Kontakt
            </Text>
            <Text size="xl" mt="2vh" weight={400}>
              Máte zájem, či se mě chcete zeptat? Neváhejte se mě kontaktovat.
            </Text>
            <svg width="0" height="0">
              <linearGradient
                id="blue-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#3b5bdb" offset="0%" />
                <stop stopColor="#0c8599" offset="100%" />
              </linearGradient>
            </svg>
            <svg width="0" height="0">
              <linearGradient
                id="linkedin-gradient"
                x1="00%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop stopColor="#0a66c2" offset="0%" />
                <stop stopColor="#1f5594" offset="100%" />
              </linearGradient>
            </svg>

            <div
              style={{
                display: "flex",
                gap: "2vh",
                flexDirection: "column",
                margin: "2vh 0 0 0 ",
              }}
            >
              <div style={{ display: "flex", gap: "1%" }}>
                <HiOutlineMail
                  fontSize="1.5rem"
                  style={{
                    stroke: "url(#blue-gradient)",
                    position: "relative",
                    top: "0.4vh",
                  }}
                />
                <Text>ondrej@ondrejzaplatilek.eu</Text>
              </div>
              <div style={{ display: "flex", gap: "1%" }}>
                <BsTelephone
                  fontSize="1.5rem"
                  style={{
                    fill: "url(#blue-gradient)",
                    position: "relative",
                    top: "0.4vh",
                  }}
                />
                <Text>+420 608 270 754</Text>
              </div>
            </div>

            <div
              style={{
                alignItems: "center",
                display: "flex",
                margin: "5vh 0 0 0",
                gap: "2%",
              }}
            >
              <a
                target="_blank" rel="noreferrer"
                href="https://www.linkedin.com/in/ond%C5%99ej-zaplat%C3%ADlek-7aa2b31bb/"
              >
                <ImLinkedin2
                  fontSize={"3rem"}
                  style={{ fill: "url(#linkedin-gradient)" }}
                />
              </a>
              <a
                target="_blank" rel="noreferrer"
                href="https://www.instagram.com/ondrejzaplatilek/"
              >
                <img
                  src="/Instagram-Logo.svg"
                  layout="responsive"
                  height={60}
                  width={60}
                />
              </a>
            </div>
          </div>
          <div
            style={{
              width: "50vw",
              padding: "5vh 0 0 0",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <form onSubmit={form.onSubmit((props) => console.log(props))}>
              <div style={{ display: "flex", gap: "2%" }}>
                <TextInput
                  type=""
                  required
                  label="Jméno"
                  {...form.getInputProps("jmeno")}
                />
                <TextInput
                  required
                  label="Příjmení"
                  {...form.getInputProps("prijmeni")}
                />
              </div>
              <TextInput label="Společnost" {...form.getInputProps("firma")} />
              <TextInput
                type="tel"
                label="Telefonní číslo"
                placeholder="+420 608 270 754"
                {...form.getInputProps("tel")}
              />
              <TextInput
                required
                type="email"
                label="Email"
                placeholder="ondrej@ondrejzaplatilek.eu"
                {...form.getInputProps("email")}
              />

              <Button
                sx={{ margin: "2vh 0 0 0" }}
                type="submit"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
              >
                Odeslat
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
