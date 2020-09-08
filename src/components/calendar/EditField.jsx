import React from 'react'

function EditField({ onEdited, value, type, name, className }) {

    //console.log(type)

    {
        return (

            <>
                {type === 'select' ?
                    <select
                        className={className}
                        name={name}
                        value={value}
                        onChange={onEdited}
                    >
                        <option value=""></option>
                        <option value="Ivan">Ivan</option>
                        <option value="Julia">Julia</option>
                        <option value="Dan">Dan</option>
                        <option value="Michael">Michael</option>
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
}


export default EditField

