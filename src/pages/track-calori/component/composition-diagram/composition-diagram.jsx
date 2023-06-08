import './composition-diagram.css'

export default function CompositionDiagram({ name, count }){
    return (
        <div className="mb-3 calculate-composition-box">
            <div className='circle-composition'>
                
            </div>
            <div className='description-composition'>
                <p>
                    { count } g <br />
                    <span>{ name }</span>
                </p>
    
            </div>
        </div>
    )
}