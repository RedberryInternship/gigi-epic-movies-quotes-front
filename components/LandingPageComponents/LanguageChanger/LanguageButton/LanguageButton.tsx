import { LanguageButtonType } from 'types';
import { clickHandler } from 'helpers';
import { useRouter } from 'next/router';

export default function LanguageButton(props: LanguageButtonType) {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  return (
    <button
      onClick={() =>
        clickHandler(
          props.language,
          props.setCurrentLanguage,
          router,
          pathname,
          asPath,
          query
        )
      }
      className={`hover:text-button-red ${
        props.currentLanguage === props.language && 'text-button-red'
      }`}
    >
      {props.language}
    </button>
  );
}
