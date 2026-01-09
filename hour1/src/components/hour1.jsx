// JSX: JAVASCRIPT+HTML

function Header(){
    return(
        <Header>
        <h1>Hello World </h1>
        </Header>
    )
}

export default Header;

function Footer(){
    return (
        <Footer>
        <h1>This is Footer</h1>
        </Footer>
    )
}
export default Footer;

//props:data passes to component
function Sidebar(props){
    return(
        <Sidebar>
        <h1>This is Sidebar {props.name}</h1>
        </Sidebar>
    )
}
export default Sidebar;

