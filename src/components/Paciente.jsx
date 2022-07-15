const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleDelete = () => {
        const result = confirm("Deseas eliminar a este paciente?")

        if (result) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="bg-white shadow-md mx-5 my-10 px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="normal-case font-normal">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {""}
                <span className="normal-case font-normal">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="normal-case font-normal">
                    {email}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de Alta: {""}
                <span className="normal-case font-normal">
                    {fecha}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {""}
                <span className="normal-case font-normal">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-5">
                <button
                    type="button"
                    className="bg-indigo-600 uppercase font-bold text-white py-2 px-10 rounded-md 
                    hover:bg-indigo-700"
                    onClick={ () => {
                        return (
                            setPaciente(paciente)
                        ) 
                    }
                }
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 uppercase font-bold text-white py-2 px-10 rounded-md 
                    hover:bg-red-700"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente