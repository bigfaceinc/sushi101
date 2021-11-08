import {
  atom,
} from 'recoil';
import {nanoid} from 'nanoid'

interface BreakPointState{
  isMobile: boolean,
  isTablet: boolean
  isLaptop: boolean,
}

export const breakPointState = atom<BreakPointState>({
  key: 'breakPointState' + nanoid(), // id must be unique
  default: {
    isMobile: false,
    isTablet: false,
    isLaptop: false
  }, // default value (aka initial value)
});
