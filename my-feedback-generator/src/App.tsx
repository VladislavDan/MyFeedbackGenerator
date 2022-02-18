import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import './App.css';
import {IAppContext} from './app/types/IAppContext';
import {ToolbarContainer} from './app/parts/toolbar/ToolbarContainer';
import {NavigationPanelContainer} from './app/parts/navigation-panel/NavigationPanelContainer';
import {ErrorContainer} from './app/parts/error-container/ErrorContainer';
import {SpinnerContainer} from './app/parts/spinner/SpinnerContainer';
import {defaultAppState, STORE_NAME} from './app/common/Constants';
import {ConfirmDialogContainer} from './app/parts/confirm-dialog/ConfirmDialogContainer';
import {SpinnerService} from './app/parts/spinner/SpinnerService';
import {ErrorService} from './app/parts/error-container/ErrorService';
import {NavigationContainer} from './app/parts/navigation/NavigationContainer';
import {ConfirmDialogService} from './app/parts/confirm-dialog/ConfirmDialogService';
import {GoogleBackupsService} from './app/pages/google-backups/GoogleBackupsService';
import {StorageService} from './app/common/services/StorageService';
import {LocalBackupsService} from './app/pages/local-backup/LocalBackupsService';
import {DataBaseService} from './app/common/services/DataBaseService';
import {SettingsService} from './app/pages/settings/SettingsService';
import {GoogleAuthService} from './app/pages/google-auth/GoogleAuthService';
import {QuestionsListService} from './app/pages/questions-list/QuestionsListService';
import {ToolbarService} from './app/parts/toolbar/ToolbarService';

export const AppContext = React.createContext<IAppContext>(defaultAppState);

const errorService = new ErrorService();
const spinnerService = new SpinnerService();

const confirmDialogService = new ConfirmDialogService();

const dataBaseService = new DataBaseService(STORE_NAME);
const storageService = new StorageService(dataBaseService);
const googleBackupsService = new GoogleBackupsService(storageService);
const localBackupsService = new LocalBackupsService(storageService);
const settingService = new SettingsService(storageService);
const googleAuthService = new GoogleAuthService(storageService);
const questionsListService = new QuestionsListService(storageService);
const toolbarService = new ToolbarService(storageService);

function App() {

    const [appState, setAppState] = useState<IAppContext>(defaultAppState);

    useEffect(() => {
        const height = window.screen.height;
        const width = window.screen.width;
        if (appState.height !== height || appState.width !== width) {
            setAppState({...appState, height: window.screen.height, width: window.screen.width});
        }
    });

    return (
        <>
            <AppContext.Provider value={appState}>
                <Router>
                    <div>

                        <ErrorContainer errorService={errorService}/>

                        <ToolbarContainer toolbarService={toolbarService}/>

                        <NavigationPanelContainer/>

                        <ConfirmDialogContainer confirmDialogService={confirmDialogService}/>

                        <div className="page-container" style={{height: appState.height, width: appState.width}}>
                            <SpinnerContainer spinnerService={spinnerService}/>
                            <NavigationContainer
                                googleAuthService={googleAuthService}
                                googleBackupsService={googleBackupsService}
                                errorService={errorService}
                                spinnerService={spinnerService}
                                confirmDialogService={confirmDialogService}
                                localBackupsService={localBackupsService}
                                settingsService={settingService}
                                questionsListService={questionsListService}
                            />
                        </div>
                    </div>
                </Router>
            </AppContext.Provider>
        </>
    );
}

export default App;
