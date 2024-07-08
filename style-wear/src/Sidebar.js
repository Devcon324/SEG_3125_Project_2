function ShirtSidebar() {
  const sidebarItems = [
    {
      title: "T-Shirt",
      link: "/t-shirt",
    },
    {
      title: "Button-Up",
      link: "/button-up",
    },
    {
      title: "Polo",
      link: "/polo",
    },
    {
      title: "Hoodie",
      link: "/hoodie",
    },
    {
      title: "Cart",
      link: "/cart",
    },
  ];

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {sidebarItems.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShirtSidebar;