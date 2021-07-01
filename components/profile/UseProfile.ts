import { SyntheticEvent, useRef, useContext } from 'react';
import { AlertContext } from '@/context/Alert/Alert';
import { updateProfile } from 'lib/profile';

const useProfile = (user) => {
  const { openAlert } = useContext(AlertContext);
  const addressRef = useRef(null);
  const landmarkRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const pincodeRef = useRef(null);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const address = addressRef?.current?.value;
    const landmark = landmarkRef?.current?.value;
    const city = cityRef?.current?.value;
    const state = stateRef?.current?.value;
    const pincode = pincodeRef?.current?.value;
    const userData = {
      ...(address && { address }),
      ...(landmark && { landmark }),
      ...(city && { city }),
      ...(state && { state }),
      ...(pincode && { pincode }),
    };
    if (!userData || !Object.keys(userData).length) {
      openAlert({ title: 'Atleast one field is required' });
      return;
    }
    updateProfile(userData, user.userId)
      .then(() => openAlert({ variant: 'success', title: 'Profile updated' }))
      .catch((e) => openAlert({ title: 'Something went wrong' }));
  };

  return {
    addressRef,
    landmarkRef,
    cityRef,
    stateRef,
    pincodeRef,
    handleSubmit,
  };
};

export default useProfile;
