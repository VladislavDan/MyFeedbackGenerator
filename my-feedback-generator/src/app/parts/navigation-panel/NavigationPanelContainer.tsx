import * as React from 'react';
import {ReactEventHandler, SyntheticEvent, useState} from 'react';

import {navigationPanelService} from './NavigationPanelService';
import {NavigationPanelComponent} from './NavigationPanelComponent';
import {useChannel} from '../../common/hooks/useChannel';

export const NavigationPanelContainer = () => {

    const [state, setState] = useState<INavigationPanelState>({
        isOpen: false
    });

    useChannel<string, string>(navigationPanelService.navigationPanelOpenChannel, () => {
        setState({...state, isOpen: true});
    });

    const toggleDrawer = (isOpen: boolean): ReactEventHandler => (event: SyntheticEvent<Element, KeyboardEvent>) => {
        if (event && event.type === 'keydown' && (event.nativeEvent.key === 'Tab' || event.nativeEvent.key === 'Shift')) {
            return;
        }

        setState({...state, isOpen});
    };

    return (
        <NavigationPanelComponent isOpen={state.isOpen} toggleDrawer={toggleDrawer}/>
    )
};

interface INavigationPanelState {
    isOpen: boolean;
}
