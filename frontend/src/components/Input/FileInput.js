import React, { useRef, useState, useEffect } from 'react'
import classNames from 'classNames'

export default function FileInput(props) {
    const attribute = props.attribute
    const classes = props.classes || ''
    const label = props.label || ''
    const required = props.required || false
    const initialValue = props.initialValue || ''
    const onChange = props.onChange

    const [_initialValue, setInitialValue] = useState('')
    
    useEffect(() => {
      if (typeof initialValue === 'string') setInitialValue(initialValue)
      else setInitialValue('')
    }, [initialValue])

    const input = useRef(null)

    function handleChange(event) {
        const _input = input.current
        const file = _input.files[0]
                
        if (onChange) onChange(attribute, file)
    }

  return (
    <div className={classNames('input input--file', classes)}>
        <label>{label}: {_initialValue}</label>
        <div className="input__container">
            <input type="file" required={required} onChange={handleChange} ref={input}/>
        </div>
    </div>
  )
}

