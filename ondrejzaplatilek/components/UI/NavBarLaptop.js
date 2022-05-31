import { ActionIcon, Text, useMantineColorScheme } from "@mantine/core"
import { useWindowScroll } from "@mantine/hooks";
import Link from "next/link"
import {
  BsFillMoonFill,
  BsSunFill,
  BsTelephone,
  BsInstagram,
} from "react-icons/bs";
export default function NavBarLaptop(props){
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  var [scroll, scrollTo] = useWindowScroll();
  
    return(
        <div
        style={
          scroll.y > 0
            ? {
                display: "flex",
                alignItems: "center",
                gap: "5%",
                padding: "1% 5% ",
                position: "fixed",
                width: "100vw",
                backgroundColor: colorScheme == "dark" ? "rgba(0, 0, 0, 1)" : "white",
                transition: "all 1s",
                zIndex: 2,
              }
            : {
                display: "flex",
                alignItems: "center",
                gap: "5%",
                padding: "1% 5%",
                position: "fixed",
                width: "100vw",
                transition: "all 0.5s",
                zIndex: 2,
              }
        }
      >
        <Text size="xl" weight={400}>
          Ondřej Zaplatílek
        </Text>
        <div style={{ display: "flex", gap: "5vh", fontWeight: "600", margin: "auto" }}>
          <Link href="#" >
            <Text sx={{cursor: "pointer"}}>O mě</Text>
          </Link>

          <Link href="#" >
            <Text sx={{cursor: "pointer"}}>Projekty</Text>
          </Link>

          <Link href="#" >
            <Text sx={{cursor: "pointer"}}>Certifikace</Text>
          </Link>

          <Link href="#" >
            <Text sx={{cursor: "pointer"}}>Kontakt</Text>
          </Link>
        </div>
        <div style={{width : "11%"}}>
        <ActionIcon onClick={toggleColorScheme} variant="outline" style={{marginLeft: "auto"}}>
          
          {colorScheme == "light" ? <BsSunFill /> : <BsFillMoonFill />}
        </ActionIcon>
        </div>
      </div>
    )
}