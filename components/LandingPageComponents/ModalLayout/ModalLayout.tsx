import { ModalLayoutType } from 'types';
import { useCloseModal } from 'hooks';
export const ModalLayout: React.FC<ModalLayoutType> = (props) => {
  const { modalRef, closeModal } = useCloseModal(props.modal);

  return (
    <div
      onClick={closeModal}
      className='w-full overflow-auto h-full z-20 fixed flex justify-center items-center bg-frozen-bg backdrop-blur-sm'
    >
      <div
        className='w-full h-full lg:w-[35%] lg:h-auto flex justify-center items-center'
        ref={modalRef}
      >
        <div className='flex rounded-[0.625rem] overflow-auto p-20 flex-col items-center justify-start gap-8 w-full h-full lg:h-auto z-20 bg-modal-bg'>
          <div className='flex flex-col items-center gap-3'>
            <h1 className='text-white text-[2rem] font-medium'>
              {props.title}
            </h1>
            <p className='text-[#6C757D] text-center w-[80%]'>
              {props.message}
            </p>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
