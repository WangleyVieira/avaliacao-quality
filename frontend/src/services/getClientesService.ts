export const getClientesService = {
    fetchData: async () => {
        try {
            const response = await fetch('http://localhost:8000/api/cliente/index', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }

            const result = await response.json();
            return result; 
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            throw error;
        }
    }
};
