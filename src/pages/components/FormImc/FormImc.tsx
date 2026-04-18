import Campo from "../Campos/Campo";

interface FormImcProps {
    vPeso: number;
    vAltura: number;
    setPeso: any;
    setAltura: any;
    funcCalcular: any;
}

export default function FormImc(props: FormImcProps) {

    return (
        <section className="titulo_form flex flex-col items-start w-full">
            <h3>Next <span>React App</span></h3>
            <br />
            <Campo label="Peso" value={props.vPeso} funcaoOnChange={props.setPeso}/>
            <Campo label="Altura" value={props.vAltura} funcaoOnChange={props.setAltura}/>
            <button type="button" onClick={props.funcCalcular}>Calcular Imc</button>
        </section>
    )
}