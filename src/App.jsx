import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
    const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? []
	const [pacientes, setPacientes] = useState(INITIAL)	
    const [paciente, setPaciente] = useState({})

    const eliminarPaciente = id => {
        const nuevosPacientes = pacientes.filter(pacienteActual => pacienteActual.id !== id )

        setPacientes(nuevosPacientes)
    }

    useEffect( () => {
        const obtenerLS = () => {
            const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

            console.log(pacientesLS)
            setPacientes(pacientesLS)
        }

        obtenerLS();
    }, [] );

    useEffect( () => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])

    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario 
					pacientes={pacientes}
					setPacientes={setPacientes}
                    paciente={paciente}
				/>
                <ListadoPacientes 
                    pacientes={pacientes} 
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
};

export default App;
