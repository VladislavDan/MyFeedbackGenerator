import * as React from 'react';
import {FC, useState} from 'react';

import {SpinnerComponent} from './SpinnerComponent';
import {SpinnerService} from './SpinnerService';
import {useChannel} from "../../../MyTools/channel-conception/react-hooks/useChannel";

export const SpinnerContainer: FC<ISpinnerContainer> = ({spinnerService}) => {

    const [isShow, setShowing] = useState(false);

    useChannel<number, number>(spinnerService.spinnerCounterChannel, (spinnerCounter) => {
        setShowing(spinnerCounter !== 0);
    });

    return <SpinnerComponent isShow={isShow}/>
};

interface ISpinnerContainer {
    spinnerService: SpinnerService;
}
