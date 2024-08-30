const initState:initStateThemeType = {
    themeId:1,
}

 export type initStateThemeType = {
    themeId: number
}

export const themeReducer = (state:initStateThemeType = initState, action: changeThemeIdACType): initStateThemeType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdACType => ({ type: 'SET_THEME_ID', id } as const) // fix any
type changeThemeIdACType = {
    type: "SET_THEME_ID"
    id:number
}

