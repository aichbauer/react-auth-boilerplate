import glamorous from 'glamorous';

const NavItem = glamorous.div(
  {
    color: '#FFF',
    flex: '0 1 auto',
    padding: '15px',
    '& a': {
      color: '#FFF',
      paddingTop: '2px',
      width: '100%',
      height: '100%',
      textDecoration: 'none',
      ':hover': {
        color: '#FFF',
      },
      ':visited': {
        color: '#FFF',
      },
    },
    ':hover': {
      backgroundColor: '#FFF',
      '& a': {
        color: '#000',
      },
    },
  },
  (props) => ({
    '@media screen and (max-width: 380px)': {
      display: props.collapse ? 'flex' : 'none',
    },
    '@media screen and (min-width: 381px)': {
      display: props.collapse ? 'none' : 'flex',
    },
  }),
);

export default NavItem;
