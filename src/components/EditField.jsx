import React from 'react'

function EditField({ onEdited, value, type, name, className, options }) {

    return (
        <>
            {type === 'select' ?
                <select
                    className={className}
                    name={name}
                    value={value}
                    onChange={onEdited}
                >
                    {options ? options.map((el, index) => (
                        <option key={index} value={el}>{el}</option>
                    )) : null}
                </select> :
                <input
                    type={type}
                    name={name}
                    className={className}
                    value={value}
                    maxLength="30"
                    onChange={onEdited}

                />}
        </>
    )
}


export default EditField

