import React, { Children, useState } from "react";
import { useStore } from "@nanostores/react";

function SubList({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const [openList, setOpenList] = useState<boolean>(false);
  return (
    <li className="relative group">
      <a
        className={`capitalize ${openList ? "after:content-arrowUp" : "after:content-arrowDown"} after:ml-1 md:group-hover:after:content-arrowUp md:mt-8`}
        href={`#${name}`}
        onClick={() => {
          console.log("click");
          setOpenList((open) => !open);
        }}
      >
        {name}
      </a>
      {
        <ul
          className={`md:absolute ${openList ? "block" : "hidden"} md:block min-w-max p-4 md:rounded-lg md:shadow-md mt-2 md:mt-0 md:opacity-0 md:group-hover:opacity-100 md:invisible md:group-hover:visible right-0 font-medium flex flex-col gap-5
`}
        >
          {children}
        </ul>
      }
    </li>
  );
}

export default SubList;
