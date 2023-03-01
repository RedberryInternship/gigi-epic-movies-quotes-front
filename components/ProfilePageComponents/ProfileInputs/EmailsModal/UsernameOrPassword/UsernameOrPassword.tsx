import {
  EditProfileInputsModal,
  ConfirmationModal,
  EditUsername,
  EditPassword,
} from 'components';
import { Props } from './Props';

export const UsernameOrPassword: React.FC<Props> = (props) => {
  return (
    <>
      {props.enableProfileModalEdit === 'username' && (
        <EditProfileInputsModal
          name={props.name}
          setEnableProfileModalEdit={props.setEnableProfileModalEdit}
        >
          <>
            {props.mobileConfirmationModalHere && <ConfirmationModal />}
            <EditUsername name='username' type='text' />
          </>
        </EditProfileInputsModal>
      )}
      {props.enableProfileModalEdit === 'password' && (
        <EditProfileInputsModal
          name={props.name}
          setEnableProfileModalEdit={props.setEnableProfileModalEdit}
        >
          <>
            {props.mobileConfirmationModalHere && <ConfirmationModal />}
            <EditPassword name='password' type='password' />
          </>
        </EditProfileInputsModal>
      )}
    </>
  );
};

export default UsernameOrPassword;
