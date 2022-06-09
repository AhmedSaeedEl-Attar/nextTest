import Link from "next/link";
import styles from "../styles/Navbar.module.css";
function Navbar(){
    return(
        <div className={styles.bg}>
            <h1><Link href="/" >Home</Link></h1>
            <h1><Link href="/about" >About</Link></h1>
            <h1><Link href="/about/23" >Random</Link></h1>
            <h1><Link href="/posts" >Posts</Link></h1>
        </div>
    )
}
export default Navbar;