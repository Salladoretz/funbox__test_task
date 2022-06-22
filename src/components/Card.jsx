import React, { useState } from 'react'
import css from './Card.module.css'


const Card = props => {

    const [selected, setSelected] = useState(false)
    const [hovered, setHovered] = useState(false)
    const soldout = props.soldout

    const [counter, setCounter] = useState(0)

    const mouseEnter = () => {
        if (selected) {
            setCounter(counter + 1)
        }
        setHovered(true)
    }

    const mouseClick = () => {
        setCounter(0)
        setSelected(!selected)
    }

    const colors = props.colors
    let background = colors.defaultColor

    let tagline = <p className={css.card__tagline}>{props.tagline}</p>

    const wordLink = props.underlineWordLink
    let underline =
        <p className={css.card__underline}>
            {props.underline.split(' ').map(item => item === wordLink
                ? <span
                    className={css.card__underline_decoration}
                    onClick={() => setSelected(true)}>{item} </span>
                : <span className={css.card__underline}>{item} </span>)}</p>


    if (soldout) {
        background = colors.disabledColor
        underline = <p className={css.card__underline_disabled}>{props.soldoutText}</p>
    } if (selected && hovered) {
        if (counter >= 1) {
            tagline = <p className={css.card__tagline_rejected}>{props.taglineRejected}</p>
        }
        background = colors.selectedHoveredColor
        underline = <p className={css.card__underline}>{props.underlineSelected}</p>
    } if (selected && !hovered) {
        background = colors.selectedColor
        underline = <p className={css.card__underline}>{props.underlineSelected}</p>
    } if (!selected && hovered) {
        background = colors.defaultHoveredColor
    }

    return (
        <div className={css.card}>
            <div
                className={css.card__border}
                style={{ background: background }}
                onMouseEnter={() => mouseEnter()}
                onMouseLeave={() => setHovered(false)}
                onClick={() => mouseClick()}>
                <div className={css.card__context}>
                    <div className={css.card__texts}>
                        {tagline}
                        <p className={css.card__brand}>{props.brand}</p>
                        <p className={css.card__taste}>{props.taste}</p>
                        <p className={css.card__qty}>{props.quantity}</p>
                        <p className={css.card__qty}>{props.present}</p>
                    </div>
                    <div className={css.card__picture}></div>
                </div>
            </div >
            {underline}
            <div
                className={css.card__oval}
                style={{ background: background }}>
                <p className={css.card__ovalWeight}>{props.weight.toLocaleString('ru-RU')}</p>
                <p className={css.card__ovalKg}>кг</p>
            </div>
            {soldout
                ? <div className={css.card__soldout}></div>
                : ''}
        </div>
    )
}

export default Card