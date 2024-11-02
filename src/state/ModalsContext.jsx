import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ModalsContext = createContext({
  openProfileModal: false,
  setOpenProfileModal: () => {},
  openEditProfileModal: false,
  setOpenEditProfileModal: () => {},
  openDeleteAccountModal: false,
  setOpenDeleteAccountModal: () => {},
  openSignOutModal: false,
  setOpenSignOutModal: () => {},
});

export const ModalsContextProvider = ({ children }) => {
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
  const [openDeleteAccountModal, setOpenDeleteAccountModal] = useState(false);
  const [openSignOutModal, setOpenSignOutModal] = useState(false);

  const context = {
    openProfileModal,
    setOpenProfileModal,
    openEditProfileModal,
    setOpenEditProfileModal,
    openDeleteAccountModal,
    setOpenDeleteAccountModal,
    openSignOutModal,
    setOpenSignOutModal,
  };

  return (
    <ModalsContext.Provider value={context}>{children}</ModalsContext.Provider>
  );
};

ModalsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalsContext;
