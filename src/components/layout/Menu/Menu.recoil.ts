import { atom } from "recoil";
import { nanoid } from "nanoid";
import { SxProps, Theme } from "@mui/material";

export const menuStyleState = atom<SxProps<Theme>>({
  key: "menuStyleState" + nanoid(),
  default: {
    background: "transparent",
    boxShadow: "none",
  },
});

export const menuInterSectingState = atom({
  key: "menuInterSectingState" + nanoid(),
  default: false,
});
