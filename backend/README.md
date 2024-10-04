
## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos atendidos:

- PHP (versão 7.3 ou superior)
- Composer
- PostGres
- Git

## Instalação

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/WangleyVieira/avaliacao-quality.git
    cd sigea
   ```

2. **Instale as dependências:**

    ```bash
    composer install
   ```

## Configuração

1. **Copie o arquivo de configuração .env.example para .env:**

   ```bash
    cp .env.example .env
   ```
2. **Gere a chave da aplicação:**

   ```bash
    php artisan key:generate
   ```
3. **Configure as informações do banco de dados no arquivo .env:**

   ```bash
    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=nome_database
    DB_USERNAME=seu_usuario
    DB_PASSWORD=sua_senha
   ```
4. **Execute as migrações e as seeders para criar as tabelas no banco de dados:**

   ```bash
    php artisan migrate:fresh --seed
   ```

## Executando o Projeto
Para iniciar o servidor de desenvolvimento, utilize o seguinte comando:

```bash
  php artisan serve
```

O projeto estará disponível no endereço http://localhost:8000.

## Tecnologias Utilizadas

- Laravel 8
- PHP
- Composer
- PostGres


## Funcionalidades implementadas
- Listagem de cliente via api
- pre cadastro de usuário
- token
- rotas de api



