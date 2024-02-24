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

export const flexRow = {
    ...flex,
    'flexDirection': 'row',
}

export const flexRowReverse = {
    ...flex,
    'flexDirection': 'row-reverse',
}

export const flexColumn = {
    ...flex,
    'flexDirection': 'column',
}

export const flexColumnReverse = {
    ...flex,
    'flexReverse': 'column-reverse',
}

export const flexWrap = {
    ...flex,
    'flex-wrap': 'wrap',
}

export const flexNowrap = {
    ...flex,
    'flex-wrap': 'nowrap',
}

export const flexWrapReverse = {
    ...flex,
    'flex-wrap': 'wrap-reverse',
}

export const flexRowWrap = {
    ...flexRow,
    ...flexWrap,
};

export const flexRowNowrap = {
    ...flexRow,
    ...flexNowrap,
};

export const flexRowWrapReverse = {
    ...flexRow,
    ...flexWrapReverse
};

export const flexRowReverseWrap = {
    ...flexRowReverse,
    ...flexWrap,
};

export const flexRowReverseNowrap = {
    ...flexRowReverse,
    ...flexNowrap,
};

export const flexRowReverseWrapReverse = {
    ...flexRowReverse,
    ...flexWrapReverse
};

export const flexColumnWrap = {
    ...flexColumn,
    ...flexWrap,
};

export const flexColumnNowrap = {
    ...flexColumn,
    ...flexNowrap,
};

export const flexColumnWrapReverse = {
    ...flexColumn,
    ...flexWrapReverse
};

export const flexColumnReverseWrap = {
    ...flexColumnReverse,
    ...flexWrap,
};

export const flexColumnReverseNowrap = {
    ...flexColumnReverse,
    ...flexNowrap,
};

export const flexColumnReverseWrapReverse = {
    ...flexColumnReverse,
    ...flexWrapReverse
};