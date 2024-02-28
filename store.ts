import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

export const openMenu = atom<boolean>(false);

export function setOpenNav(menu: boolean) {
  openMenu.set(menu);
}
