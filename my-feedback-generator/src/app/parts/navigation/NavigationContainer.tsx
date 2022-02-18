import * as React from 'react';
import {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router';

import {Routs} from '../../common/Routs';
import {GoogleBackupsContainer} from '../../pages/google-backups/GoogleBackupsContainer';
import {LocalBackupsContainer} from '../../pages/local-backup/LocalBackupsContainer';
import {ErrorService} from '../error-container/ErrorService';
import {GoogleBackupsService} from '../../pages/google-backups/GoogleBackupsService';
import {SpinnerService} from '../spinner/SpinnerService';
import {ConfirmDialogService} from '../confirm-dialog/ConfirmDialogService';
import {LocalBackupsService} from '../../pages/local-backup/LocalBackupsService';
import {SettingsContainer} from '../../pages/settings/SettingsContainer';
import {SettingsService} from '../../pages/settings/SettingsService';
import {GoogleAuthContainer} from '../../pages/google-auth/GoogleAuthContainer';
import {GoogleAuthService} from '../../pages/google-auth/GoogleAuthService';
import {QuestionsListService} from '../../pages/questions-list/QuestionsListService';
import {QuestionsListContainer} from '../../pages/questions-list/QuestionsListContainer';


export const NavigationContainer: FC<INavigationContainer> = ({
                                                                  errorService,
                                                                  googleAuthService,
                                                                  googleBackupsService,
                                                                  spinnerService,
                                                                  confirmDialogService,
                                                                  settingsService,
                                                                  localBackupsService,
                                                                  questionsListService
                                                              }) => {

    return <Switch>
        <Redirect exact from="/MyFeedback" to={Routs.localBackups.path}/>
        <Redirect exact from="/" to={Routs.questionLists.path}/>
        <Route path={Routs.questionLists.path}>
            <QuestionsListContainer questionsListService={questionsListService}/>
        </Route>
        <Route path={Routs.googleAuth.path}>
            <GoogleAuthContainer googleAuthService={googleAuthService} errorService={errorService}/>
        </Route>
        <Route path={Routs.googleBackups.path}>
            <GoogleBackupsContainer googleBackupsService={googleBackupsService} spinnerService={spinnerService}
                                    confirmDialogService={confirmDialogService}/>
        </Route>
        <Route path={Routs.localBackups.path}>
            <LocalBackupsContainer localBackupsService={localBackupsService} confirmDialogService={confirmDialogService}
                                   spinnerService={spinnerService}/>
        </Route>
        <Route path={Routs.settings.path}>
            <SettingsContainer settingsService={settingsService}/>
        </Route>
    </Switch>
};

interface INavigationContainer {
    errorService: ErrorService;
    googleBackupsService: GoogleBackupsService;
    spinnerService: SpinnerService;
    confirmDialogService: ConfirmDialogService;
    localBackupsService: LocalBackupsService;
    settingsService: SettingsService;
    googleAuthService: GoogleAuthService;
    questionsListService: QuestionsListService;
}
