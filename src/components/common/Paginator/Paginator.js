import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

let Paginator = (props) => {

    let pagesCount = Math.ceil( props.totalItemsCount / props.pageSize);
    let portionSize = 10;

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);    /*подключаем локальный стейт для пагинатора*/
    let leftPortionPageNumber = (portionNumber -1) * portionSize +1; /*формура для вычисления левого крайнего номера*/
    let rightPortionPageNumber = portionNumber * portionSize;        /*формура для вычисления правого крайнего номера*/


    /*показываем кнопку влево если номер порции больше 1*/
    return (
    <div className={styles.paginator}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({
                    [styles.selectedPage]: props.currentPage === p
                }, styles.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </div>)
}
export default Paginator;