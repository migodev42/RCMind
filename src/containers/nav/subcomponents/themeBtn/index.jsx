import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useTheme from '@customHooks/useTheme'

export default function ThemeButton(props) {
    const [open, setOpen] = React.useState(false);
    const [theme, setTheme] = React.useState(false);

    const { setBgColor } = useTheme()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOk = () => {
        setOpen(false);
    }

    const handleSelectTheme = (e) => {
        setTheme(e.target.value)
        setBgColor(e.target.value)
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Theme
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth={'sm'}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Theme</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Choose a theme you like !
                    </DialogContentText>
                    background 
                    <Select
                        value={theme}
                        onChange={handleSelectTheme}
                        inputProps={{
                            name: 'max-width',
                            id: 'max-width',
                        }}
                    >                        
                        <MenuItem value="white">white</MenuItem>
                        <MenuItem value="navy">navy</MenuItem>
                        <MenuItem value="red">red</MenuItem>
                        <MenuItem value="yellow">yellow</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
