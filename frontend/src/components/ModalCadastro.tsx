import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { storeClienteService } from '../services/storeClienteService';

interface ModalCadastroProps {
    show: boolean;
    handleClose: () => void;
}

export const ModalCadastro: React.FC<ModalCadastroProps> = ({ show, handleClose }) => {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const clienteData = {
            cpf,
            nome,
            telefone,
        };

        try {
            const response = await storeClienteService.cadastrarCliente(clienteData);
            
            if (response.status === 200) {
                alert('Cliente cadastrado com sucesso!');
                handleClose(); 
            } else {
                alert('Erro ao cadastrar cliente.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro ao cadastrar cliente.');
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Cadastrar Cliente</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="cpf" 
                            value={cpf} 
                            onChange={(e) => setCpf(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nome" 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="telefone" 
                            value={telefone} 
                            onChange={(e) => setTelefone(e.target.value)} 
                            required 
                        />
                    </div>
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};
