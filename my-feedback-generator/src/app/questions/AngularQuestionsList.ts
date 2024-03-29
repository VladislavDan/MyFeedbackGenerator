import {IQuestionsList} from "../types/IQuestionsList";
import {IThemeGrade} from "../types/IThemGrade";
import {IQuestionLevel} from "../types/IQuestionLevel";
import {IQuestionGrade} from "../types/IQuestionGrade";

export const AngularQuestionsList: IQuestionsList = {
    themes: [
        {
            id: '1',
            name: 'Angular',
            grade: IThemeGrade.NONE,
            questions: [
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'CLI commands',
                    theme: 'CLI commands',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'ng serve',
                    theme: 'ng serve',
                    suggestion: 'ng serve',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'ng generate',
                    theme: 'ng generate',
                    suggestion: 'ng generate',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'angular.json',
                    theme: 'angular.json',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'cli',
                    theme: 'angular.json: cli field',
                    suggestion: 'angular.json: cli field',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.THIRD,
                    question: 'packageManager',
                    theme: 'angular.json: cli field: packageManager',
                    suggestion: 'angular.json: cli field: packageManager',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'schematics',
                    theme: 'angular.json: schematics',
                    suggestion: 'angular.json: schematics',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'bindings',
                    theme: 'bindings',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'callback binding',
                    theme: 'callback binding',
                    suggestion: 'callback binding',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.THIRD,
                    question: 'EventEmitter',
                    theme: 'EventEmitter',
                    suggestion: 'EventEmitter',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'two-way binding',
                    theme: 'two-way binding',
                    suggestion: 'two-way binding',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'one-way binding',
                    theme: 'one-way binding',
                    suggestion: 'one-way binding',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'selector host:',
                    theme: 'selector host:',
                    suggestion: 'selector host:',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Template variables',
                    theme: 'Template variables',
                    suggestion: 'Template variables',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'Template variables',
                    theme: 'Template variables',
                    suggestion: 'Template variables',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: '@ViewChild',
                    theme: '@ViewChild',
                    suggestion: '@ViewChild',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: '@ContentChild',
                    theme: '@ContentChild',
                    suggestion: '@ContentChild',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'component',
                    theme: 'component',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: "@Component decorator's properties",
                    theme: "@Component decorator's properties",
                    suggestion: "@Component decorator's properties",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: "component's life cycle",
                    theme: "component's life cycle",
                    suggestion: "component's life cycle",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'directives',
                    theme: 'directives',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'kind of directives',
                    theme: 'kind of directives',
                    suggestion: 'kind of directives',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'built-in directives',
                    theme: 'built-in directives',
                    suggestion: 'built-in directives',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: '@HostListener decorator',
                    theme: '@HostListener decorator',
                    suggestion: '@HostListener decorator',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'pipes',
                    theme: 'pipes',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'pure vs impure',
                    theme: 'pure vs impure',
                    suggestion: 'pure vs impure pipes',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'built-in pipes',
                    theme: 'built-in pipes',
                    suggestion: 'built-in pipes',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: 'services',
                    theme: 'services',
                    suggestion: '',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: '@Injectable decorator',
                    theme: '@Injectable decorator',
                    suggestion: '@Injectable decorator',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: 'services’ scopes',
                    theme: 'services’ scopes',
                    suggestion: 'services’ scopes',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.THIRD,
                    question: 'specific features of service with component scope',
                    theme: 'specific features of service with component scope',
                    suggestion: 'specific features of service with component scope',
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: "Module",
                    theme: "Module",
                    suggestion: "",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: "@NgModule() decorator's properties",
                    theme: "@NgModule() decorator's properties",
                    suggestion: "@NgModule() decorator's properties",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: "Dependencies Injection",
                    theme: "Dependencies Injection",
                    suggestion: "Dependencies Injection",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: "Change Detection Strategy",
                    theme: "Change Detection Strategy",
                    suggestion: "",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: "onPush vs Default strategy",
                    theme: "onPush vs Default strategy",
                    suggestion: "onPush vs Default strategy",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: "detectChanges vs markForCheck",
                    theme: "detectChanges vs markForCheck",
                    suggestion: "detectChanges vs markForCheck",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.FIRST,
                    question: "Angular forms",
                    theme: "Angular forms",
                    suggestion: "",
                    grade: IQuestionGrade.NONE,
                },
                {
                    id: '2.1',
                    level: IQuestionLevel.SECOND,
                    question: "model driven vs template driven",
                    theme: "model driven vs template driven",
                    suggestion: "model driven vs template driven way to implement form",
                    grade: IQuestionGrade.NONE,
                }
            ]
        }
    ]
}