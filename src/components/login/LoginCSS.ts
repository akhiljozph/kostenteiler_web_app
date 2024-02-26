import { flexAlignJustifyCenter, flexDirectionAlignJustifyCenterColumn } from "../../common/styles/FlexBoxLayoutStyles";

export const loginContainer = {
    ...flexAlignJustifyCenter,
    'backgroundColor': '#eae9e9',
    'height': '100vh',
    'width': '100vw',
}

export const loginBoxWrapper = {
    ...flexDirectionAlignJustifyCenterColumn,
    'height': '44rem',
    'width': '29rem',
    'backgroundColor': '#ffffff',
    'border': 'solid 0.036rem #000',
    'borderRadius': '1rem',
}

export const headingOneTitle = {
    ...flexAlignJustifyCenter,
    'text-transform': 'capitalize',
}