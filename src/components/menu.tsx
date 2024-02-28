import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { setOpenNav } from "../../store";
function Menu({ setMenu }: { setMenu: () => void }) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      {!openMenu && (
        <button
          className="before:content-menu z-50 relative"
          onClick={() => {
            // setMenu();
            setOpenMenu((menu) => !menu);
          }}
        ></button>
      )}
      {openMenu && (
        <button
          className="before:content-closeMenu z-50 relative"
          onClick={() => setOpenMenu((menu) => !menu)}
        ></button>
      )}
    </>
  );
}

export default Menu;
