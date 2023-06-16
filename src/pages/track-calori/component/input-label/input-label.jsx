import './input-label.css';

export default function InputLabel({ label = '', name = 'name', placeholder = '', type = 'text', options = [] }) {
    const types = ['text', 'number', 'date', 'time', 'select'];

    if (!types.includes(type)) {
        console.error('type is wrong to input form')
        return;
    }

    if (type == 'select') {
        return (
            <div className='input__wrapper mb-3'>
                <label>{label}</label>
                <select name={name} placeholder={placeholder}>
                    {
                        options.map((value, index) => (
                            <option value={value} key={index}>{value}</option>
                        ))
                    }
                </select>
            </div>
        )
    }

    return (
        <div className='input__wrapper mb-3'>
            <label htmlFor="age">{label}</label>
            <input name={name} placeholder={placeholder} type='text' />
        </div>
    )
}