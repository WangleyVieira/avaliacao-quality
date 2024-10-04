export const login = async (email: string, password: string) => {
    try {
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error('Erro ao realizar login');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Erro ao realizar o login:', error);
        throw error;
    }
};
