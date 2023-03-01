export type Props = {
  image: string;
  title: string;
  description: string;
  route: string;
  action: string;
  setShowLoginModal?: (value: boolean) => void;
};
