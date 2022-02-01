import React, { useState } from "react";

import logo from './logo.svg';
import './App.scss';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FB7000',
      light: '#FD8526',
      dark: '#FCA259',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#005592',
      light: '#266EA2',
      dark: '#5990B8',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#f4f5f9',
      paper: '#fafafa',
    },
    text: {
      primary: '#202A36',
      secondary: '#414A54',
      disabled: '#9a9fa4',
      hint: '#6E747C',
    },
    error: {
      main: '#FA3E3E',
      light: '#FB5B5B',
      dark: '#F23E3E',
      contrastText: 'rgba(255,255,255,0.54)',
    },
    warning: {
      main: '#FFBB33',
      light: '#E5EEF4',
      dark: '#906c25',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    info: {
      main: '#0E7EBF',
      light: '#3291C8',
      dark: '#8CB2CE',
      contrastText: 'rgba(255,255,255,0.38)',
    },
    success: {
      main: '#00C851',
      light: '#26D06B',
      dark: '#1a8e49',
      contrastText: 'rgba(0,0,0,0.54)',
    },
    divider: '#dfe3eb',
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.17,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 22,
      fontWeight: 600,
      lineHeight: 1.14,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.31,
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.65,
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.55,
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.75,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.55,
      fontWeight: 400,
    },
    overline: {
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="document-container">
          <div className="title">Alert</div>
          <div className="heading">lightBackground Alert Box</div>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert>

          <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
          <Alert
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is a success alert — check it out!
          </Alert>

          <div className="heading">Bordered Alert Box</div>
          <Alert variant="outlined" severity="error">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an info alert — check it out!
          </Alert>
          <Alert variant="outlined" severity="success">
            This is a success alert — check it out!
          </Alert>

          <div className="heading">filledBackground Alert Box</div>
          <Alert variant="filled" severity="error">
            This is an error alert — check it out!
          </Alert>
          <Alert variant="filled" severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert variant="filled" severity="info">
            This is an info alert — check it out!
          </Alert>
          <Alert variant="filled" severity="success">
            This is a success alert — check it out!
          </Alert>
        </div>
        <div className="document-container">
          <div className="title">Button</div>
          <div className="heading">Basic</div>
          <Stack spacing={2} direction="row" className="display-table">
            <Button>Basic Default</Button>
            <Button color="primary">Basic Primary</Button>
            <Button color="secondary">Basic Secondary</Button>
            <Button disabled>Basic Disabled</Button>
            <Button
              color="primary"
              className="startIcon-button"
              startIcon={<DeleteIcon />}
            >
              Basic Primary Icon Button
            </Button>
          </Stack>
          <div class="heading">Flat Button</div>
          <Stack spacing={2} direction="row" className="display-table">
            <Button variant="contained">Flat Default</Button>
            <Button variant="contained" color="primary">Flat Primary</Button>
            <Button variant="contained" color="secondary">Flat Secondary</Button>
            <Button variant="contained" disabled>Flat Disabled</Button>
            <Button variant="contained"
              color="primary"
              className="startIcon-button"
              startIcon={<DeleteIcon />}
            >
              Flat Primary Icon Button
            </Button>
          </Stack>

          <div class="heading">Stroked Button</div>
          <Stack spacing={2} direction="row" className="display-table">
            <Button variant="outlined">Stroked Default</Button>
            <Button variant="outlined" color="primary">Stroked Primary</Button>
            <Button variant="outlined" color="secondary">Stroked Secondary</Button>
            <Button variant="outlined" disabled>Stroked Disabled</Button>
            <Button variant="outlined"
              color="primary"
              className="endIcon-button"
              startIcon={<DeleteIcon />}
            >
              Stroked Primary Icon Button
            </Button>
          </Stack>

          <div class="heading">Notification Button</div>
          <Stack spacing={2} direction="row" className="display-table">
            <Button color="success">
              Success
            </Button>
            <Button color="error">
            Error
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="outlined" color="success">
              Success
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </Stack>

          <div class="heading">Variant Button</div>
          <Stack spacing={2} direction="row" className="display-table">
            <Button size="small">Small Default</Button>
            <Button size="medium">Medium Default</Button>
            <Button size="large">Large Default</Button>

            <Button variant="contained" size="small">Small Flat</Button>
            <Button variant="contained" size="medium">Medium Flat</Button>
            <Button variant="contained" size="large">Large Flat</Button>
          </Stack>
        </div>

        <div className="document-container">
          <div className="title">IconButton</div>
          <div className="heading">Basic</div>
          <Stack spacing={2} direction="row">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AlarmIcon />
            </IconButton>
          </Stack>

          <div className="heading">IconButton Variant</div>
          <div spacing={2} direction="row">
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>

          <div className="heading">ButtonGroup</div>
          <Stack spacing={2} direction="row">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>      
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button>One one</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Stack>
        </div>
      
        <div className="document-container">
          <div className="title">Checkbox</div>
          <Stack spacing={2} direction="row">
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} defaultChecked color="secondary" />
            <Checkbox {...label} defaultChecked color="success" />
            <Checkbox {...label} defaultChecked color="default" />

            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Checkbox
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </Stack>
        </div>

        <div className="document-container">
          <div className="title">CircularProgress</div>
          <CircularProgress />
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </div>

        <div className="document-container">
          <div className="title">Chip</div>
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
          <Chip label="primary" color="primary" />
          <Chip label="success" color="success" />
          <Chip label="primary" color="primary" variant="outlined" />
          <Chip label="success" color="success" variant="outlined" />
          <Chip label="Small" size="small" />
          <Chip label="Small" size="small" variant="outlined" />
        </div>

        <div className="document-container">
          <div className="title">Divider</div>
          <Divider />
        </div>

        <div className="document-container">
          <div className="title">Fab Icon</div>
          <Stack spacing={2} direction="row">
            <Fab color="primary" aria-label="add">
              <DeleteIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
            <Fab variant="extended">
              <NavigationIcon sx={{ mr: 1 }} />
              Navigate
            </Fab>
            <Fab disabled aria-label="like">
              <FavoriteIcon />
            </Fab>

            <Fab size="small" color="secondary" aria-label="add">
              <DeleteIcon />
            </Fab>
            <Fab size="medium" color="secondary" aria-label="add">
              <DeleteIcon />
            </Fab>
            <Fab color="secondary" aria-label="add">
              <DeleteIcon />
            </Fab>
          </Stack>
        </div>

        <div className="document-container">
          <div className="title">Input</div>
          <div>
            <TextField id="outlined-basic" variant="outlined" placeholder="Input field" />
          </div>
          <div>
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </div>
          <div>          
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </div>
          <div>
            <TextField
              error placeholder="Input field"
              id="outlined-error"
              defaultValue="Hello World"
            />
          </div>
        </div>

        <div className="document-container">
          <div className="title">RadioGroup</div>
          <div className="heading">RadioGroup Normal</div>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          <div className="heading">RadioGroup Inline</div>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>

          <div className="heading">RadioGroup Variant</div>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value="small" control={<Radio size="small" />} label="Small" />
            <FormControlLabel value="medium" control={<Radio size="medium" />} label="Medium" />
            <FormControlLabel value="large" control={<Radio size="large" />} label="Large" />
          </RadioGroup>
        </div>

        <div className="document-container">
          <div className="title">Rating</div>
          <Stack spacing={1}>
            <Rating name="size-small" defaultValue={2} size="small" />
            <Rating name="size-medium" defaultValue={2} />
            <Rating name="size-large" defaultValue={2} size="large" />
          </Stack>
        </div>

        <div className="document-container">
          <div className="title">Select</div>
          <div className="">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
            <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} error>
            <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={age}
              label="Age"
              onChange={handleChange}
              renderValue={(value) => `⚠️  - ${value}`}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-readonly-label"
              id="demo-simple-select-readonly"
              value={age}
              label="Age"
              onChange={handleChange}
              inputProps={{ readOnly: true }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={age}
              label="Age *"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="document-container">
          <div className="title">Skeleton Loader</div>
          <Stack spacing={1}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
          </Stack>
        </div>

        <div className="document-container">
          <div className="title">Slider</div>
          <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </div>

        <div className="document-container">
          <div className="title">Switch</div>
          <Switch {...label} defaultChecked />
          <Switch {...label} defaultChecked color="secondary" />
          <Switch {...label} defaultChecked color="warning" />
          <Switch {...label} defaultChecked color="default" />
          <Switch {...label} defaultChecked size="small" />
          <Switch {...label} defaultChecked disabled />
        </div>

        <div className="document-container">
          <div className="title">TableContainer</div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="document-container">
          <div className="title">ToggleButtonGroup</div>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className="document-container">
          <div className="title">Tooltip</div>
          <Tooltip title="Delete" placement="top">
            <DeleteIcon />
          </Tooltip>

          <Tooltip title="Delete" placement="top-end">
            <DeleteIcon />
          </Tooltip>
        </div>

        <div className="document-container">
          <div className="title">Typography</div>
          <Typography variant="h1" component="div" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom component="div">
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom component="div">
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
