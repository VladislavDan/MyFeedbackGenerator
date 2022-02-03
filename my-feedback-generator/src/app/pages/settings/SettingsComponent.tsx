import * as React from 'react';
import {ChangeEvent, FC} from 'react';
import './SettingsComponent.css'
import {FormGroup} from '@mui/material';
import {ISettings} from '../../types/ISettings';

export const SettingsComponent: FC<ISettingsComponent> = ({settings, onChange}) => {

    const onChangeAlgorithm = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({...settings, isRandomRepeating: event.target.checked})
    };

    return <FormGroup className="settings-form">
    </FormGroup>
};

interface ISettingsComponent {
    settings: ISettings
    onChange: (settings: ISettings) => void
}
