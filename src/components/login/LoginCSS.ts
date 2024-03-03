import { flexAlignJustifyCenter, flexDirectionAlignJustifyCenterColumn } from "../../common/styles/FlexBoxLayoutStyles";

export const loginContainer = {
    ...flexAlignJustifyCenter,
    'backgroundColor': '#eae9e9',
    'height': '100vh',
    'width': '100vw',
};

export const loginBoxWrapper = {
    ...flexDirectionAlignJustifyCenterColumn,
    'height': '44rem',
    'width': '29rem',
    'backgroundColor': '#ffffff',
    'border': 'solid 0.036rem #000',
    'borderRadius': '1rem',
    'gap': '10px',
};

export const headingOneTitle = {
    ...flexAlignJustifyCenter,
    'text-transform': 'capitalize',
    'fontFamily': 'Yanone Kaffeesatz',
    'font-optical-sizing': 'auto',
    'fontWeight': 500,
    'fontStyle': 'normal',
};

export const loginLbl = {
    'height': 'auto',
    'text-transform': 'capitalize',
    'fontFamily': 'Yanone Kaffeesatz',
    'font-optical-sizing': 'auto',
    'fontWeight': 500,
    'fontStyle': 'normal',
};

export const loginBtn = {
    'padding': '0.5rem',
    'fontFamily': 'Yanone Kaffeesatz',
    'font-optical-sizing': 'auto',
    'fontWeight': 500,
    'fontStyle': 'normal',
}