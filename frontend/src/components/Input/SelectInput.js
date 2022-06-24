  import React, { useRef, useState, useEffect } from 'react'
  import classNames from 'classNames'

export default function SelectInput(props) {
  const attribute = props.attribute
  const classes = props.classes || ''
  const placeholder = props.placeholder || ''
  const options = props.options || []
  const required = props.required || false
  const initialValue =  props.initialValue || ''
  const onChange = props.onChange

  const [value, setValue] = useState('')

  useEffect(() => {
    if (options.length > 0) {
      if (onChange) onChange(attribute, options[0].value)
    }
  }, [])

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  function handleChange(event) {
    const inputValue = event.target.value
    setValue(inputValue)

    if (onChange) onChange(attribute, inputValue)
  }

  function renderOptions() {
    return options.map((el, i) => (
      <option key={i} value={el.value}>{el.label}</option>
    ))
  }

  return (
    <div className={classNames('input input--select', classes)}>
      <div className="input__container">
        <select value={value} placeholder={placeholder} required={required} onChange={handleChange}>
          {renderOptions()}
        </select>
      </div>
    </div>
  )
}

