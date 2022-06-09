import Navbar from "./Navbar";

function Layout(props){
    return (<>
    <Navbar/>
    <h1>Layout</h1>
    {props.children}
    <h1>Layout</h1>
    </>)
}
export default Layout;
