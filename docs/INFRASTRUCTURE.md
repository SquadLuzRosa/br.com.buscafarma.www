# Documentação de infraestrutura

## 1. Configuração Inicial

### 1.1. Estrutura de Branches
- **`main`**: Branch principal, usada para releases estáveis.
- **`develop`**: Branch de desenvolvimento geral, usada pelos QAs para testes.
  - **`client`**: Branch destinada ao desenvolvimento do frontend (Vite).
  - **`service`**: Branch destinada ao desenvolvimento do backend (Django).
  - **`devops`**: Branch destinada ao desenvolvimento da infraestrutura.

### 1.2. Configuração dos Arquivos README e DEVELOPMENT
- **README.md**: Incluir informações gerais sobre o projeto, como a descrição, tecnologias usadas, e como configurar o ambiente de desenvolvimento.
- **DEVELOPMENT.md**: Documentar as regras de versionamento, guidelines de desenvolvimento, e como contribuir para o projeto.

## 2. Configuração da Infraestrutura

### 2.1. Dockerização do Projeto
- **Backend (Django)**:
  - Criar um `Dockerfile` para o backend.
  - Incluir configuração para rodar o servidor Django em modo de produção.
  - Incluir a coleta de arquivos estáticos.

- **Frontend (Vite)**:
  - Criar um `Dockerfile` para o frontend.
  - Configurar para servir os arquivos estáticos de forma otimizada.

### 2.2. Configuração do Docker Compose
- Criar um `docker-compose.yml` para orquestrar o frontend e o backend.
- Incluir serviços adicionais, como o banco de dados PostgreSQL para o Django.
- Criar uma versão específica para o ambiente de QA com um arquivo `docker-compose.qa.yml`, onde o projeto será configurado para rodar no ambiente de testes.

### 2.3. Configuração do Ambiente para QAs
- **Branch `develop`**: Configurar o ambiente de testes contínuos para rodar automaticamente sempre que houver mudanças na branch `develop`.
- **Deploy Automático no Render**:
  - Configurar o Render para deploy automático da branch `develop`.
  - Definir variáveis de ambiente necessárias para rodar a aplicação em modo de teste.
  - Garantir que o projeto esteja disponível online para que os QAs possam realizar testes manuais e exploratórios.

### 2.4. Integração Contínua
- **GitHub Actions**:
  - Criar um pipeline de CI para rodar testes automatizados sempre que houver push na branch `develop`.
  - Incluir passos para construir e testar o frontend e backend separadamente.
  - Incluir verificação de qualidade de código e segurança.

## 3. Fluxo de Trabalho

### 3.1. Desenvolvimento
- **Branch `client` e `service`**:
  - Desenvolvedores devem trabalhar nas branches `client` (frontend) e `service` (backend).
  - Pull requests devem ser abertos para a branch `develop` após a conclusão de novas funcionalidades ou correções.

### 3.2. Testes
- **Branch `develop`**:
  - Após a fusão dos pull requests em `develop`, a integração contínua deve rodar os testes automatizados.
  - Se todos os testes passarem, o Render fará o deploy automático da aplicação para o ambiente de QA.

### 3.3. Aprovação e Deploy para Produção
- **Branch `main`**:
  - Após a aprovação dos QAs, o código é mesclado da branch `develop` para a branch `main`.
  - Um novo deploy para o ambiente de produção é realizado a partir da branch `main`.

## 4. Manutenção e Monitoramento

### 4.1. Monitoramento
- Configurar ferramentas de monitoramento para o ambiente de QA e produção, garantindo que os serviços estejam sempre disponíveis.

### 4.2. Backup
- Configurar backups automáticos dos dados da aplicação, especialmente para o banco de dados em produção.

