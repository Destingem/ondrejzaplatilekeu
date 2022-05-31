import{ Media }from "../../Media.js"
import NavBarMobile from "./NavBarMobile"
import NavBarTablet from "./NavBarTablet"
import NavBarLaptop from "./NavBarLaptop"
export default function Navbar(){

    return(
        <>
        <Media between={["zero", "mobile"]}>
        <NavBarMobile />
        </Media>
        <Media between={["mobile", "tablet"]}>
            <NavBarTablet />
        </Media>
        <Media between={["tablet", "tv"]}>
            <NavBarLaptop />
        </Media>
        </>
    )
}