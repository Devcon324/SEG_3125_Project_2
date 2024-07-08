import {sidebarItems} from './SidebarItems'

function Sidebar() {
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
                window.location.pathname = val.link;}}
            >
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;