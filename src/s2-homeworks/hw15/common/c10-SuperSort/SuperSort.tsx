import React from 'react'

import iconNeutral from "../reshot-icon-circle-8XHJZD9UK2-01e19.svg"
import iconDown from "../reshot-icon-button-arrow-down-89T2AEG6VP.svg"
import iconUp from "../reshot-icon-button-arrow-up-T8ABDFXGVE.svg"
import s from "../c10-SuperSort/sort.module.css"
// добавить в проект иконки и импортировать
const downIcon = iconDown
const upIcon =iconUp
const noneIcon = iconNeutral

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {

        // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
        // return up // исправить


    if (sort === '') return down;
    if (sort === down) return up;
    return '';


}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {

        onChange(pureChange(sort, down, up))

    }

    const icon = sort === down

        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img className={s.icon}
                id={id + '-icon-' + sort}
                src={icon}/>



        </span>
    )
}

export default SuperSort
