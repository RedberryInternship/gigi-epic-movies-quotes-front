import { ProfileInputs } from 'components';
import { useMobileInputsRefresh } from 'hooks';
import { Props } from './Props';

export const MobileInputsBlock: React.FC<Props> = (props) => {
  const { t, name } = useMobileInputsRefresh();
  return (
    <>
      <ProfileInputs
        type='text'
        label={t('username')}
        value={name}
        placeholder={t('enter', { name: t('name') })}
        name='username'
        setEnableProfileModalEdit={props.setEnableProfileModalEdit}
        enableProfileModalEdit={props.enableProfileModalEdit}
      />
      <ProfileInputs
        type='password'
        label={t('password')}
        value=''
        placeholder={t('enter', { name: t('password') })}
        name='password'
        setEnableProfileModalEdit={props.setEnableProfileModalEdit}
        enableProfileModalEdit={props.enableProfileModalEdit}
      />
    </>
  );
};
export default MobileInputsBlock;
