import { AuthNavBar } from 'components';
import { useSelector } from 'react-redux';
import { showNewEmailModal } from 'slices/newEmailModalSlice';
import { addMovieModal } from 'slices/addMovieModalSlice';
import { getDeleteValue } from 'slices/moviesSlice';
import {
  addQuoteModal,
  editQuote,
  quoteDeleteConfirmationModal,
} from 'slices/quotesSlice';
import {
  getAddPostModal,
  getNotificationModal,
  getSearchModal,
} from 'slices/newsFeedQuotesSlice';
import { useWindowWidth } from 'hooks';

export const GlobalLayout: React.FC<{ children: JSX.Element }> = (props) => {
  const showNewEmailModalHere = useSelector(showNewEmailModal);
  const addMovieModalHere = useSelector(addMovieModal);
  const getDeleteValueHere = useSelector(getDeleteValue);
  const AddQuoteModalHere = useSelector(addQuoteModal);
  const quoteDeleteConfirmationModalHere = useSelector(
    quoteDeleteConfirmationModal
  );
  const editQuoteHere = useSelector(editQuote);
  const getAddPostModalHere = useSelector(getAddPostModal);
  const getSearchModalHere = useSelector(getSearchModal);
  const getNotificationModalHere = useSelector(getNotificationModal);
  const windowSize = useWindowWidth();
  return (
    <div
      className={` ${
        (showNewEmailModalHere ||
          (getNotificationModalHere && windowSize < 1024) ||
          addMovieModalHere ||
          getDeleteValueHere ||
          quoteDeleteConfirmationModalHere ||
          editQuoteHere ||
          getAddPostModalHere ||
          getSearchModalHere ||
          AddQuoteModalHere) &&
        'overflow-hidden h-screen'
      } w-full bg-global-layout-bg min-h-screen`}
    >
      <AuthNavBar />
      {props.children}
    </div>
  );
};

export default GlobalLayout;
