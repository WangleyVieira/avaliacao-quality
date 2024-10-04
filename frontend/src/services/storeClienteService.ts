export const storeClienteService = {
    cadastrarCliente: async (clienteData: { cpf: string, nome: string, telefone: string }) => {
        try {
            const response = await fetch('http://localhost:8000/api/cliente/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clienteData),
            });

            return response;
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            throw error;
        }
    },
};
