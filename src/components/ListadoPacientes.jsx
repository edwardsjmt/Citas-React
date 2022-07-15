import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    // console.log(pacientes != 0);
    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
            {pacientes != 0 ? (
                <>
                    <h2 className="text-center font-black text-3xl">
                        Listado Pacientes
                    </h2>
                    <p className="text-lg mt-5 mb-10 text-center">
                        Administra tus {""}
                        <span className="font-bold text-indigo-600">
                            Pacientes y Citas
                        </span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="text-center font-black text-3xl">
                        No hay pacientes
                    </h2>
                    <p className="text-lg mt-5 mb-10 text-center">
                        Comienza agregando pacientes y {""}
                        <span className="font-bold text-indigo-600">
                            aparecerán en este lugar
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;
