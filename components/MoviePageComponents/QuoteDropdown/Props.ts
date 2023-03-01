import { RefObject } from 'react';

export type Props = {
  setShowDropdown: (value: boolean) => void;
  showDropdown: boolean;
  dotsRef: RefObject<HTMLImageElement>;
  id: number;
};
