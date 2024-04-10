export const getSessionOnStorage = () => JSON.parse(localStorage.getItem('toriphonePortal_session'));

export const setSessionOnStorage = session => {
  localStorage.setItem('toriphonePortal_session', JSON.stringify(session));
};

export const removeSessionOnStorage = () => {
  localStorage.removeItem('toriphonePortal_session');
};