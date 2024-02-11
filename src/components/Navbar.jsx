const Navbar = ({ username, userAge, links }) => {
    console.log(username, userAge)

    

    return (
        <nav>
            <h1>LOGO</h1>
            <ul>
                {
                    links.map(link => {
                        return (
                         <li>{link}</li>   
                        )
                    })
                }
                
            </ul>
        </nav>
    )
}

export default Navbar