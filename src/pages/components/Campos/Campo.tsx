interface CampoProps {
    label: string;
    value: number;
    funcaoOnChange:any;
}

export default function Campo(props:CampoProps) {
    return (
        <label className="label_form">
            <p className="label_p">{props.label}</p> 
            <input 
                className="input_form" 
                type="text" 
                value={props.value} 
                onChange={(event) => props.funcaoOnChange(event.target.value)}/>
        </label>
    )
}