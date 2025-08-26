

const Navbar = () => {

    const links = ["Characters", "Comics", "Movies", "TV", "Games", "Collectibles", "Videos", "Fans", "News", "Shop"]

  return (
    <nav>
        <div className="top-bar">
            <ul>
                {links.map((link,index)=>{
                    return(
                        <li key ={index}>
                            <a href="#">{link}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
