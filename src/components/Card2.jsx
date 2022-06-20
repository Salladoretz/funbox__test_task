import React, { useState } from 'react'
import css from './Card.module.css'


const Card = props => {

    const [selected, setSelected] = useState(false)
    const [hovered, setHovered] = useState(false)

    const soldout = props.soldout
    const disabledColor = '#b3b3b3'

    return (
        <div className={css.card}>
            {!soldout
                ? <div>
                    <div className={!selected
                        ? css.card__bordered
                        : !hovered
                            ? css.card__bordered_selected
                            : css.card__bordered_selected_hover}
                        onMouseOver={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => setSelected(!selected)}>
                        <div className={css.card__texts}>
                            {selected && !hovered
                                ? <p className={css.card__tagline_rejected}>{props.taglineRejected}</p>
                                : <p className={css.card__tagline}>{props.tagline}</p>
                            }
                            <p className={css.card__brand}>{props.brand}</p>
                            <p className={css.card__taste}>{props.taste}</p>
                            <p className={css.card__qty}>{props.quantity}</p>
                            <p className={css.card__qty}>{props.present}</p>
                        </div>
                        <div className={!selected
                            ? css.card__oval
                            : !hovered
                                ? css.card__oval_selected
                                : css.card__oval_selected_hover}>
                            <p className={css.card__weight}>{props.weight.toLocaleString('ru-RU')}</p>
                            <p className={css.card__kg}>кг</p>
                        </div>
                    </div>
                    {!selected
                        ? <p className={css.card__underline}>{props.underline}
                            <span
                                className={css.card__underline_decoration}
                                onClick={() => setSelected(true)}>купи.</span> </p>
                        : <p className={css.card__underline}>{props.underlineSelected}</p>
                    }
                </div>
                : <div>
                    <div className={css.card__bordered_disabled}>
                        <div className={css.card__texts}>
                            <p
                                className={css.card__tagline}
                                style={{ color: disabledColor }}>{props.tagline}</p>
                            <p
                                className={css.card__brand}
                                style={{ color: disabledColor }}>{props.brand}</p>
                            <p
                                className={css.card__taste}
                                style={{ color: disabledColor }}>{props.taste}</p>
                            <p
                                className={css.card__qty}
                                style={{ color: disabledColor }}>{props.quantity}</p>
                            <p
                                className={css.card__qty}
                                style={{ color: disabledColor }}>{props.present}</p>
                        </div>
                        <div
                            className={css.card__oval}
                            style={{ background: disabledColor }}>
                            <p className={css.card__weight}>{props.weight.toLocaleString('ru-RU')}</p>
                            <p className={css.card__kg}>кг</p>
                        </div>
                    </div>
                    <p className={css.card__underline_disabled}>{props.soldoutText}</p>
                </div>
            }
        </div >
    )
}

export default Card