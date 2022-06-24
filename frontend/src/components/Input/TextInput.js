import React, { useRef, useState, useEffect } from 'react'
import classNames from 'classNames'

export default function TextInput(props) {
    const attribute = props.attribute
    const classes = props.classes || ''
    const type = props.type || 'text'
    const placeholder = props.placeholder || ''
    const required = props.required || false
    const initialValue = props.initialValue || ''
    const onChange = props.onChange

    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    function handleChange(event) {
        const inputValue = event.target.value
        setValue(inputValue)

        if (onChange) onChange(attribute, inputValue)
    }

  return (
    <div className={classNames('input', classes)}>
        <div className="input__container">
            <input type={type} value={value} placeholder={placeholder} required={required} onChange={handleChange}/>
        </div>
    </div>
  )
}

