


export const Dropdown = ({label, options, onChange}) => {

    return <div>
        <label>{label}</label>
        <select 
        onChange={onChange}
        >
            <option></option>
            {options.map(optionElement => (
            <option key={optionElement.value}>
                {optionElement.name}
            </option>))}
        </select>
    </div>
}