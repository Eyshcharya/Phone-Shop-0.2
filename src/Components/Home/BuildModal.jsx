import { useDispatch } from 'react-redux';
import { CloseModal } from '../../Features/ModalSlice';

const BuildModal = () => {
  const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h3>Still on Build</h3>
        <div className='build'>
          <div></div>
          <img
            className='build-img'
            src='../../../public/icons/build2.png'
            alt='onBuild'
          />
        </div>
        <button
          className='close-btn'
          onClick={() => {
            dispatch(CloseModal());
          }}
        >
          Close
        </button>
      </div>
    </aside>
  );
};
export default BuildModal;
