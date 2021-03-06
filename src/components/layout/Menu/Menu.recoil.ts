import { atom } from "recoil";
import { SxProps, Theme } from "@mui/system";
import { nanoid } from "nanoid";

export const menuStyleState = atom<SxProps<Theme>>({
  key: "menuStyleState" + nanoid(),
  default: {
    background: 'transparent',
    boxShadow: "none"
  }
});

export const menuInterSectingState = atom({
  key: "menuInterSectingState" + nanoid(),
  default: false
})