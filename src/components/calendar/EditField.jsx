import React from 'react'

function EditField({ onEdited, value, type, name, className, options }) {

    //console.log(options)

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
                        {/* <option value=""></option>
                        <option value="Ivan">Ivan</option>
                        <option value="Julia">Julia</option>
                        <option value="Dan">Dan</option>
                        <option value="Michael">Michael</option> */}
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

