import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 51,
    borderRadius: 100,
    border: '0.5px solid rgba(235, 234, 235, 0.5)',
  },
  subLine: {
    width: 40,
    background: '#ef1e33',
    height: 3,
    margin: '-10px auto',
  },
  formItem: {
    '& .Mui-error fieldset': {
      color: 'black',
      borderColor: 'black',
    },
    '& .MuiFormHelperText-root': {
      color: 'black',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiOutlinedInput-root': {
      color: 'black',
      '& fieldset': {
        borderColor: 'black',
        color: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
        color: 'black',
      },
      '&.Mui-error fieldset': {
        borderColor: '#ef1e33',
        border: '2px solid green',
      },
    },
  },
  mobileFormItem: {
    color: 'white',
    '& .Mui-error': {
      color: 'white',
      borderColor: 'white',
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '& fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiFormHelperText-root': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        borderColor: 'white',
        color: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        color: 'white',
      },
      '&.Mui-error fieldset': {
        borderColor: 'darkgrey',
        border: '2px solid green',
      },
    },
  },
  lightInput: {
    color: 'white',
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  redInput: {
    color: 'red',
    marginLeft: theme.spacing(3),
    flex: 1,
  },

  darkInput: {
    color: 'black',
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  center: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  light: {
    color: 'white',
    border: '1px solid rgb(235, 234, 235)',
  },
  dark: {
    border: '1px solid #1B284B',
  },
}));
