# Desenvolvimento do Projeto

- **Propósito**: Orientar novos colaboradores sobre como contribuir para o projeto, incluindo o processo de configuração do ambiente de desenvolvimento, padrões de código, como enviar pull requests, etc.
- **Conteúdo**: Regras de contribuição, configuração do ambiente, processos de build e deploy, etc.

### FLUXO `git flow`

```mermaid
graph TD;
    A[Main] --> B[Developer]
    B --> C[Client]
    B --> D[Service]
    B --> E[UX]
    B --> F[Testes]
    B --> G[PO]
```

<details> 

<summary>
    Regras de versionamento
</summary>
    Para definir regras de versionamento de código e permissões de merge no GitHub, você pode configurar as regras de proteção de branch e as políticas de revisão de código. Aqui está um guia passo a passo para configurar essas regras:

### 1. Configurando Regras de Proteção de Branch

1. **Acesse o Repositório no GitHub**:
   - Vá para o seu repositório no GitHub.

2. **Vá para as Configurações**:
   - Clique na aba "Settings" (Configurações).

3. **Branch Protection Rules**:
   - No menu lateral, clique em "Branches" (Branches).
   - Em "Branch protection rules" (Regras de proteção de branch), clique em "Add rule" (Adicionar regra).

4. **Definir Regras de Proteção**:
   - **Branch Name Pattern**: Defina o padrão de nome da branch, como `main`, `developer`, etc.
   - **Require Pull Request Reviews**:
     - Marque a opção "Require pull request reviews before merging" (Requerer revisões de pull request antes de fazer merge).
     - Defina o número de revisores necessários.
   - **Require Status Checks**:
     - Marque a opção "Require status checks to pass before merging" (Requerer verificações de status para passar antes do merge).
     - Adicione os checks de status necessários, como testes automatizados.
   - **Include Administrators**:
     - Marque "Include administrators" (Incluir administradores) se quiser que as regras também se apliquem aos administradores do repositório.
   - **Restrict Who Can Push to Matching Branches**:
     - Marque "Restrict who can push to matching branches" (Restringir quem pode fazer push para branches correspondentes).
     - Adicione os usuários ou equipes autorizados a fazer push diretamente.

5. **Salvar Regras**:
   - Clique em "Create" ou "Save changes" (Salvar alterações).

### 2. Configurando Políticas de Revisão de Código

1. **Criar uma Política de Revisão**:
   - Na seção de "Branch protection rules" (Regras de proteção de branch), defina que os pull requests precisam de aprovação antes de serem mesclados.
   - Especifique o número mínimo de revisores necessários.

2. **Configurar Revisores Padrão**:
   - Nas configurações do repositório, você pode definir revisores padrão para pull requests. Isso pode ser feito através de equipes ou usuários específicos.

### 3. Exemplo de Regras para Branches Específicas

- **Branch `main`**:
  - Nenhum push direto é permitido.
  - Todos os merges devem ser feitos através de pull requests.
  - Pelo menos 2 revisores devem aprovar o pull request.
  - Todos os status checks devem passar antes do merge.

- **Branch `developer`**:
  - Nenhum push direto é permitido.
  - Todos os merges devem ser feitos através de pull requests.
  - Pelo menos 1 revisor deve aprovar o pull request.
  - Todos os status checks devem passar antes do merge.

- **Branches `client`, `service`, `UX`, `Testes`, `PO`**:
  - Push direto pode ser permitido para membros da equipe específica.
  - Recomenda-se o uso de pull requests e revisões, especialmente para mudanças significativas.

Com essas configurações, você garante um fluxo de trabalho de versionamento de código robusto e controlado, minimizando riscos e melhorando a qualidade do código.
</details>

<details>
    <summary>Modelagem de dados</summary>

# DOCUMENTO DO MODELO DE DADOS

## 1. Introdução e visão Geral

**Objetivo:** Descrever o modelo de dados para um sistema que permite o envio e a pesquisa de preços de medicamentos. O sistema deve permitir que usuários adicionem preços de medicamentos e consultem essas informações para encontrar os melhores preços em diferentes farmácias. 

**Escopo:** Este documento cobre o design das tabelas e relacionamentos necessários para suportar as funcionalidades de inclusão e pesquisa de preços de medicamentos.

**Banco de Dados:** O sistema utiliza o PostgreSQL como banco de dados para armazenar e gerenciar as informações.

## 3. Descrição das Entidades

### INFORMAÇÃO IMPORTANTE

<aside>
⚠️ Embora as tabelas e o fluxo de login possam não ser utilizados neste momento do projeto, é crucial manter essa estrutura e modelagem prontas. Isso garantirá que, no futuro, caso haja a necessidade de implementar um sistema de login, já teremos uma base sólida e bem estruturada, facilitando a adaptação e a integração sem a necessidade de um retrabalho significativo.

</aside>

**Usuário**

- **Nome da Entidade:** CustomUser
- **Descrição:** Armazena informações sobre os usuários que enviam informações sobre medicamentos.
- **Atributos:**
    - `id` (PK): Identificador único do usuário.
    - `name`: Nome do usuário.
    - `email`: E-mail do usuário.
    - `password_hash`: Hash (criptografia) da senha do usuário.
    

**Perfil**

- **Nome da Entidade:** Profile
- **Descrição:** Armazena informações adicionais e personalizáveis do usuário.
- **Atributos:**
    - `id` (PK): Identificador único do perfil.
    - `user_id` (FK): Referência ao usuário (chave estrangeira para a tabela CustomUser).
    - `profile_picture`: URL da foto de perfil.
    - `address`: Endereço do usuário.
    - `additional_info`: Informações adicionais sobre o usuário.

**Atributos do Usuário**

- **Nome da Entidade:** UserAttributes
- **Descrição:** Armazena diferentes atributos e estados do usuário.
- **Atributos:**
    - `id` (PK): Identificador único dos atributos do usuário.
    - `user_id` (FK): Referência ao usuário (chave estrangeira para a tabela Users).
    - `role`: Papel ou permissão do usuário (ex.: 'admin', 'editor', 'viewer').
    - `is_authenticated`: Indica se o usuário está autenticado.
    - `is_active`: Indica se a conta está ativa.
    - `last_login`: Data e hora do último login.

**Tokens**

- **Nome da Entidade:** AuthTokens
- **Descrição:** Armazena tokens de autenticação para os usuários.
- **Atributos:**
    - `id` (PK): Identificador único do token.
    - `user_id` (FK): Identificador do usuário (referência à tabela CustomUser).
    - `access_token`: Token de acesso.
    - `refresh_token`: Token de atualização.
    - `created_at`: Data e hora da criação do token.
    - `expires_at`: Data e hora de expiração do token de acesso.
    - `refresh_expires_at`: Data e hora de expiração do token de atualização.
    

**Medicamento**

- **Nome da Entidade:** Medicine
- **Descrição:** Armazena informações sobre medicamentos.
- **Atributos:**
    - `id` (PK): Identificador único do medicamento.
    - `name`: Nome do medicamento.
    - `dosage`: Dosagem do medicamento (ex.: "500mg").
    - `image`: Imagem da embalagem do medicamento.
    - `price`: Preço do medicamento.
    - `date_register`: Data do cadastro do medicamento.
    - `available_sus`: Indica se o medicamento está disponível no SUS.
    - `user_id` (FK): Identificador do usuário que enviou o preço (referência à tabela Users).
    - `pharmacy_id` (FK): Identificador da farmácia onde o medicamento foi comprado (referência à tabela Pharmacy).
Medicamentos da CMED

- **Nome da Entidade:** MedicineCmed
- **Descrição:** Armazena informações sobre medicamentos que estão cadastrados na CMED.
- **Atributos:**
    - `id` (PK): Identificador único do medicamento.
    - `name`: Nome do medicamento.
    - `dosage`: Dosagem do medicamento (ex.: "500mg").
    - `price`: Preço do medicamento.
    - `date_register`: Data do cadastro do medicamento.
    - `available_sus`: Indica se o medicamento está disponível no SUS.
    

**Farmácia**

- **Nome da Entidade:** Pharmacy
- **Descrição:** Armazena informações sobre farmácias.
- **Atributos:**
    - `id` (PK): Identificador único da farmácia.
    - `name`: Nome da farmácia.
    - `cep`: CEP da farmácia.
    - `address`: Endereço da farmácia.
    - `city`: Cidade onde a farmácia está localizada.
    - `state`: Estado onde a farmácia está localizada.

## 4. Relacionamentos

- **CustomUser - Medicine**: Um usuário pode enviar informações sobre vários medicamentos.
- **Pharmacy - Medicine**: Uma farmácia pode ter vários medicamentos registrados com preços diferentes.
- **Medicine - CustomUser**: Um medicamento pode ser associado a um único usuário que enviou a informação.
- **Medicine - Pharmacy**: Um medicamento pode ser associado a uma única farmácia onde foi registrado o preço.
- **CustomUser - Profile**: Um usuário pode ter um perfil adicional com informações detalhadas.
- **CustomUser - UserAttributes**: Um usuário pode ter atributos adicionais armazenados separadamente.
- **CustomUser - Tokens**: Um usuário pode ter múltiplos tokens de autenticação.

## **5. Regras de Negócio e Restrições**

- **Nome do Medicamento**: O nome do medicamento deve ser cadastrado exatamente como aparece na lista da CMED, garantindo conformidade com a nomenclatura oficial.
- **Preço**: Deve ser um valor numérico positivo, representado com duas casas decimais.
- **Data de Registro**: Deve ser uma data válida e não pode ser uma data futura.
- **Disponibilidade no SUS**: Deve ser um valor booleano (verdadeiro ou falso) indicando se o medicamento está disponível no SUS.

## **6. Regras de Validação de Dados**

**E-mail**

- **Formato**: O e-mail deve ser um endereço de e-mail válido, seguindo a sintaxe padrão (`user@example.com`). A validação pode ser implementada com uma expressão regular, como `'^.+@.+\..+$'`.
- **Unicidade**: O e-mail deve ser único em todo o sistema. Não são permitidos e-mails duplicados.

**Senha**

- **Comprimento**: A senha deve ter no mínimo 8 caracteres e no máximo 255 caracteres.
- **Complexidade**: A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (ex.: `!@#$%^&*()`).
- **Hashing**: As senhas devem ser armazenadas como hashes criptografados usando um algoritmo seguro.

**Nome do Usuário**

- **Comprimento**: O nome do usuário deve ter no mínimo 1 caractere e no máximo 255 caracteres.
- **Formato**: O nome não deve conter caracteres especiais, apenas letras e espaços.

**Preço do Medicamento**

- **Valor**: O preço deve ser um valor numérico positivo com duas casas decimais. Deve ser representado como `DECIMAL(10, 2)`.
- **Validação**: Deve ser maior que zero.

**Data de Registro**

- **Formato**: A data deve estar no formato `YYYY-MM-DD`.
- **Validação**: A data de registro não pode ser uma data futura.

**Disponibilidade no SUS**

- **Tipo**: Deve ser um valor booleano (verdadeiro ou falso).

**URL de Imagem**

- **Formato**: A URL deve ser uma string válida que aponta para uma imagem. Não deve exceder 255 caracteres.

## **7. Procedimentos de Migração e Atualização**

**Script de Criação**:

```sql
sqlCopiar código
CREATE TABLE CustomUser (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Profile (
    id SERIAL PRIMARY KEY,
    profile_picture VARCHAR(255),
    address VARCHAR(255),
    additional_info TEXT,
    user_id INTEGER REFERENCES CustomUser(id)
);

CREATE TABLE UserAttributes (
    id SERIAL PRIMARY KEY,
    role VARCHAR(45),
    is_authenticated BOOLEAN,
    is_active BOOLEAN,
    last_login TIMESTAMP,
    user_id INTEGER REFERENCES CustomUser(id)
);

CREATE TABLE Tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES CustomUser(id),
    access_token VARCHAR(512),
    refresh_token VARCHAR(512),
    created_at TIMESTAMP NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    refresh_expires_at TIMESTAMP NOT NULL
);

CREATE TABLE Pharmacy (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL
);

CREATE TABLE Medicine (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    dosage VARCHAR(50),
    chemical_name VARCHAR(255),
    image VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    date_register DATE NOT NULL,
    available_sus BOOLEAN,
    user_id INTEGER REFERENCES CustomUser(id),
    pharmacy_id INTEGER REFERENCES Pharmacy(id)
);

```

## **Conclusão**

Esta documentação cobre o modelo de dados e as funcionalidades principais para o sistema de inclusão e consulta de preços de medicamentos. Inclui agora a estrutura necessária para a gestão de tokens de autenticação. Se precisar de ajustes ou mais detalhes, estou aqui para ajudar!






</details>
