import * as React from 'react';
import {FC} from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './AddButton.css'

export const AddButton: FC<IAddButton> = ({onClick}) => {
    return <Fab size="medium" color="secondary" aria-label="add" className="add-button" onClick={onClick}>
        <AddIcon/>
    </Fab>
};

interface IAddButton {
    onClick: () => void;
}
