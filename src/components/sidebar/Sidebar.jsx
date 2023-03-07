import "./sidebar.css"


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/15658380/pexels-photo-15658380.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea exercitationem id ipsam, eligendi corporis minus reprehenderit fuga iusto placeat, ullam, accusantium ut dolorem cumque labore!</p>
        </div>

         <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
       <ul className="sidebarList">
        <li className="sidebarListItem">
          Life
        </li>
        <li className="sidebarListItem">
          Music
        </li>
        <li className="sidebarListItem">
          Style
        </li>
        <li className="sidebarListItem">
          Sport
        </li>
        <li className="sidebarListItem">
          Cinema
        </li>
        <li className="sidebarListItem">
          Tech
        </li>
       </ul>
        </div> 
      <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="SidebarIcon fa-brands fa-facebook"></i>
                <i className="SidebarIcon fa-brands fa-twitter"></i>
                <i className="SidebarIcon fa-brands fa-instagram"></i>
                <i className="SidebarIcon fa-brands fa-pinterest"></i>
              </div>
      </div>
    </div>
  )
}

