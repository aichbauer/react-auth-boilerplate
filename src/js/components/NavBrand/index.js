import glamorous from 'glamorous';

const NavBrand = glamorous.div(
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
    },
    '@media screen and (max-width: 380px)': {
      display: 'none',
    },
    '@media screen and (min-width: 381px)': {
      display: 'flex',
    },
  },
);

export default NavBrand;
