import React, {FC, ReactElement, useEffect, useState} from 'react';
import * as H from 'history';
import {useLocation} from 'react-router-dom';

import {ToolbarComponent} from './ToolbarComponent';
import {navigationPanelService} from '../navigation-panel/NavigationPanelService';
import {ToolbarService} from './ToolbarService';
import {useChannel} from '../../common/hooks/useChannel';

export const ToolbarContainer: FC<IToolbarContainer> = ({toolbarService}): ReactElement => {

    const location: H.Location = useLocation();
    const [pageLabel, setPageLabel] = useState('');

    useChannel(toolbarService.generateFeedbackChannel);

    useEffect(() => {
        const newPageLabel = toolbarService.getPageLabel(location.pathname);
        setPageLabel(newPageLabel);
    }, [location.pathname]);

    const onClick = () => {
        navigationPanelService.navigationPanelOpenChannel.next('');
    };

    const onGenerate = () => {
        toolbarService.generateFeedbackChannel.next('')
    };

    return (
        <ToolbarComponent pageLabel={pageLabel} onGenerate={onGenerate} onClick={onClick}/>
    )
};

interface IToolbarContainer {
    toolbarService: ToolbarService
}
