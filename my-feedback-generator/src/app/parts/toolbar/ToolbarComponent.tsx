import {FC, MouseEventHandler} from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SaveIcon from '@mui/icons-material/Save';

import './ToolbarComponent.css'

export const ToolbarComponent: FC<IToolbarComponent> = ({pageLabel, onGenerate, onClick}) => {
    return (
        <AppBar position="fixed">
            <Toolbar className="toolbar">
                <div className="toolbar-inner-container">
                    <IconButton className="toolbar_menu-icon" edge="start" color="inherit" aria-label="menu"
                                onClick={onClick}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography className="toolbar_label" variant="h6">
                        {pageLabel}
                    </Typography>
                    <IconButton className="toolbar-save-icon" edge="end" color="inherit" aria-label="menu"
                                onClick={onGenerate}>
                        <SaveIcon/>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
};

interface IToolbarComponent {
    pageLabel: string;
    onClick: MouseEventHandler;
    onGenerate: () => void
}
