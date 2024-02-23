export const flex = {
    'display': 'flex',
}

export const flexAlignStart = {
    ...flex,
    'alignItems': 'flex-start',
}

export const flexJustifyStart = {
    ...flex,
    'justifyContent': 'flex-start',
}

export const flexAlignJustifyStart = {
    ...flexAlignStart,
    ...flexJustifyStart
}

export const flexAlignCenter = {
    ...flex,
    'alignItems': 'center',
}

export const flexJustifyCenter = {
    ...flex,
    'justifyContent': 'center'
}

export const flexAlignJustifyCenter = {
    ...flexAlignCenter,
    ...flexJustifyCenter,
}

export const flexAlignEnd = {
    ...flex,
    'alignItems': 'flex-end',
}

export const flexJustifyEnd = {
    ...flex,
    'justifyContent': 'flex-end',
}

export const flexAlignJustifyEnd = {
    ...flexAlignEnd,
    ...flexJustifyEnd,
}