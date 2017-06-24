import glamorous from 'glamorous';

import css from '../../../config/css.variables';

const StyledNav = glamorous.nav({
  backgroundColor: css.colors.MAIN1,
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '50px',
  display: 'flex',
  justifyContent: 'flex-start',
});

export default StyledNav;
