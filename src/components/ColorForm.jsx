import react from 'react';

const ColorForm = ({color ,setColor, setboxes,boxes}) => {
    const submit = (e) =>{
        e.preventDefault();
        setboxes([...boxes,color])
    }
    const colorChange = (e) =>{
        setColor(e.target.value);
        console.log(`this is color ${color}`);
        console.log(`this is setcolor ${setColor}`);
    }
    
    return(
        <div>
            <form onSubmit={submit}>
                <label htmlFor="Color">color</label>
                <input type="text"  onChange={colorChange} />
                <button ></button>
            </form>
        </div>
    )
}
export default ColorForm