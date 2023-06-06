import './box.css'


// eslint-disable-next-line react/prop-types
export default function Box({ children }){
    return (
        <div className='tracker-box'>
            { children }
        </div>
    )
}