import { useEffect, useState,  } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente}) => {
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);

    // Escucha por cambios en la variable paciente, cuando se da en editar, se ejecuta
    useEffect(() => {
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

	const generarId = () => {
		const random = Math.random().toString(36).substring(2)
		const fecha = Date.now().toString()

		return random + fecha
	}

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            // console.log("Hay al menos un campo vacio");
            setError(true);
            return;
        }

        setError(false);

		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
		}

        if(paciente.id) {
            // Editar el Registro
            // Si el paciente cuenta con ID significa que el registro ya existe y se va a editar
            objetoPaciente.id=paciente.id;
            // console.log(paciente)
            // console.log(objetoPaciente)

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id 
                ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
        } else {
            // Nuevo Registro
            objetoPaciente.id=generarId()
    		setPacientes([...pacientes, objetoPaciente])
        }

        // Se reinicia el form
		setNombre('')
		setPropietario('')
		setEmail('')
		setFecha('')
		setSintomas('')
    };

    return (
        <div className="mx-5 mb-5 md:w-1/2 lg:w-2/5 md:ml-12">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg text-center mt-5 mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white py-10 px-5 shadow-md"
                onSubmit={handleSubmit}
            >
                {error && <Error>Todos los campos son obligatorios</Error> }
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block uppercase text-gray-700 font-bold"
                    >
                        Nombre mascota
                    </label>
                    <input
                        className="p-2 w-full mt-2 border-2 text-gray-400"
                        placeholder="Nombre de tu mascota"
                        id="mascota"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block uppercase text-gray-700 font-bold"
                    >
                        Nombre del Propietario
                    </label>
                    <input
                        className="p-2 w-full mt-2 border-2 text-gray-400"
                        placeholder="Nombre del Propietario"
                        id="propietario"
                        type="text"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block uppercase text-gray-700 font-bold"
                    >
                        E-mail del Propietario
                    </label>
                    <input
                        className="p-2 w-full mt-2 border-2 text-gray-400"
                        placeholder="Correo del Propietario"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="fecha"
                        className="block uppercase text-gray-700 font-bold"
                    >
                        Fecha de Alta
                    </label>
                    <input
                        className="p-2 w-full mt-2 border-2 text-gray-400"
                        id="fecha"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block uppercase text-gray-700 font-bold"
                    >
                        Sintomas del Paciente
                    </label>
                    <textarea
                        className="p-2 w-full mt-2 border-2 text-gray-400"
                        id="sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    className="w-full bg-indigo-600 p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer"
                    type="submit"
					value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
};

export default Formulario;
