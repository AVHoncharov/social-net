import React from 'react'
import style from './FormsControls.module.css'

export const Element = Element => ({input, meta, ...props }) => {
    const hasError = meta.error && meta.touched ;

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
            <Element {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}