import React from 'react';
import styles from "./FormsControls.module.css"

const FormControl = ({input,meta: {touched, error}, children, ...props}) => {
    /*отдельно вынесли мета тачед плюс мета эррор*/
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children} {/*общий код для Textarea и Input одинаков и именно в этом месте поставл кастомные чилдрены Textarea и Input*/}
            </div>
            { hasError && <span>{error}</span> }  {/*если в мета был зафиксирован тачед и есть еррор то мы его покажем*/}
        </div>
    )
}


/*хитрая ситуация мы достаем input и meta а оставшиеся данные деструктуризируем через ...props*/
export const Textarea = (props) => {
    const {input,meta, child, element, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
/*также создаем кастомный инпут*/
export const Input = (props) => {
    const {input,meta, child, element, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}