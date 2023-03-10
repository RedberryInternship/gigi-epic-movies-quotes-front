import { Inputs, ModalButton, ModalLayout } from 'components';
import { FormProvider } from 'react-hook-form';
import { useRegistrationModalConfig } from 'hooks';
import { RegistrationModalType } from 'types';

export const RegistrationModal: React.FC<RegistrationModalType> = (props) => {
  const { InputsGroup, methods, t, submit, googleAuthHandler } =
    useRegistrationModalConfig(props.setHasRegistered);
  const displayInputs = InputsGroup.map((input) => {
    return (
      <Inputs
        key={input.label}
        isOptional={input.isOptional}
        label={t(input.label)}
        validationIndex={input.label}
        type={input.type}
        placeholder={t(input.placeholder)}
      />
    );
  });
  return (
    <ModalLayout
      title={t('registrationModal.title')}
      message={t('registrationModal.message')}
      modal={props.setShowRegistrationModal}
    >
      <>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submit)}
            className='w-[80%] flex flex-col items-center justify-center gap-4'
          >
            {displayInputs}
            <div className='w-full pt-5 flex flex-col gap-4 items-center justify-center'>
              <ModalButton
                text={t('registrationModal.get-started')}
                color='red'
              />
              <div className='w-full' onClick={googleAuthHandler}>
                <ModalButton
                  text={t('registrationModal.google')}
                  color='white'
                />
              </div>
            </div>
          </form>
        </FormProvider>
        <p className='text-[#6C757D] mt-4'>
          {t('registrationModal.question')}{' '}
          <span
            onClick={() => props.setShowLoginModal(true)}
            className='text-[#0D6EFD] underline cursor-pointer'
          >
            {t('buttons.log-in')}
          </span>
        </p>
      </>
    </ModalLayout>
  );
};

export default RegistrationModal;
