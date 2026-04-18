interface TotalImcProps {
    vImc: string
}

export default function TotalImc(props: TotalImcProps) {
    return (
        <section className='flex justify-end items-center w-full'>
            <span className="titulo_imc">Imc</span>
            <span className="total_imc">{props.vImc}</span>
        </section>
    )
}