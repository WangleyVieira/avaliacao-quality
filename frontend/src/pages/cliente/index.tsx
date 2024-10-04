import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar"
import { getClientesService } from "../../services/getClientesService";
import { Outlet } from "react-router-dom";

import './styles.css'
import { ModalCadastro } from "../../components/ModalCadastro";

interface DataItem {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
}

export function Cliente() {

    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getClientesService.fetchData();
                
                if (result && Array.isArray(result.data)) {
                    setData(result.data); 
                } else {
                    throw new Error('A resposta da API não contém um array válido.');
                }

                setLoading(false);
            } catch (error: any) {
                console.error('Erro ao buscar dados:', error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container">
            <Sidebar />
            <div className="content">
                <Outlet />

                <button onClick={handleOpenModal} className="buttonModal">
                    Cadastrar Cliente
                </button>

                <ModalCadastro show={isModalOpen} handleClose={handleCloseModal} />

                {loading ? (
                    <p>Carregando dados...</p>
                ) : (
                    <div className="cardContainer">
                        {data.map((item) => (
                            <div key={item.id} className="card">
                                <h4>{item.nome}</h4>
                                <p>{item.cpf}</p>
                                <p>{item.telefone}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    )
}