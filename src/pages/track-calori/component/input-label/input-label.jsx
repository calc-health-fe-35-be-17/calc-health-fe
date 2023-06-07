import './input-label.css';

export default function InputLabel({ label = '', name = 'name', value = '', placeholder = '', type = 'text' }){
    const types = ['text', 'number', 'date', 'time'];

    if(!types.includes(type)){
        console.error('type is wrong to input form')
        return;
    }

    return (
        <div className='input__wrapper mb-3'>
            <label>{ label }</label>
            <input name={name} value={value} placeholder={placeholder} type='text' />
        </div>
    )
}