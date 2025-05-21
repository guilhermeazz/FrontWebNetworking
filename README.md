# 🧠 ConnectDev — Conectando Desenvolvedores com Propósito

> Plataforma de conexão entre desenvolvedores(as) baseada em perfis, interesses técnicos, habilidades comportamentais e redes em comum.

---

## 📌 Visão Geral

O **ConnectDev** é uma plataforma pensada para impulsionar conexões reais entre devs com base em **similaridades técnicas, comportamentais e contextuais**. Ideal para:

* Desenvolvedores buscando conexões para **projetos, aprendizado ou networking**
* Mentores e mentorados em **busca de afinidade real**
* Comunidades e eventos tech que desejam promover **matchs entre membros**

---

## 🔍 Funcionalidades

* ✅ Cadastro e autenticação de usuários com geração automática de UUID e senha criptografada
* ✅ Login com geração de JWT e proteção de rotas via middleware
* ✅ Perfil com habilidades técnicas, interesses e áreas de atuação
* ✅ Sistema de recomendações com base em:

  * Habilidades em comum
  * Conexões mútuas
  * Tecnologias complementares
  * Amigos de amigos (Fof — friends of friends)
  * Exclusão de usuários já seguidos nas recomendações
* ✅ Sugestão de conexões com **explicação dos critérios utilizados**
* ✅ Sistema de seguidores: seguir e deixar de seguir
* ✅ Histórico de conexões e seguidores
* ✅ Integração opcional com GitHub e LinkedIn

---

## 🧱 Tecnologias Utilizadas

### 🖥️ Backend

* ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white) **Node.js**
* ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white) **TypeScript**
* ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white) **Express.js**
* ![Neo4j](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge\&logo=neo4j\&logoColor=white) **Neo4j**
* ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=JSON%20web%20tokens\&logoColor=white) **JSON Web Token**
* ![Bcrypt](https://img.shields.io/badge/Bcrypt-FFD700?style=for-the-badge\&logoColor=black) **Bcrypt**
* ![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge\&logo=dotenv\&logoColor=black) **Dotenv**

### 💻 Frontend (em desenvolvimento)

* ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge\&logo=react\&logoColor=black) **React.js**
* ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white) **Vite**
* ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white) **Tailwind CSS**

---

## 🧱 Arquitetura do Projeto

```
connectdev-backend/
├── src/
│   ├── controllers/        # Lógica das rotas e autenticação
│   ├── routes/             # Endpoints HTTP documentados com Swagger
│   ├── services/           # Login e outras lógicas de negócio
│   ├── middlewares/        # Autenticação e validação
│   ├── models/             # Interfaces TypeScript
│   ├── config/             # Conexão com Neo4j e configuração do Swagger
│   └── index.ts            # Inicializador do servidor
├── .env
├── tsconfig.json
└── package.json
```

---

## 🔄 Recomendador com Neo4j

Usamos **Neo4j** para mapear relações complexas:

```
(:User)-[:HAS_SKILL]->(:Skill)
(:User)-[:INTERESTED_IN]->(:Interest)
(:User)-[:WORKS_IN]->(:FieldOfWork)
(:User)-[:FOLLOWS]->(:User)
(:ProjectGroup)-[:NEEDS]->(:Skill)
```

Essas ligações são analisadas para sugerir conexões com base em:

* Similaridade de perfil (habilidades, interesses, áreas)
* Conexões em comum e amigos de amigos
* Tecnologias que se complementam
* Compatibilidade comportamental
* Exclusão de conexões já existentes

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seuuser/connectdev-backend.git
cd connectdev-backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o ambiente:

Crie um arquivo `.env` na raiz do projeto com:

```ini
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=suasenha
PORT=3000
JWT_SECRET=sua_chave_segura
```

4. Inicie o servidor:

```bash
npm run dev
```

Acesse: `http://localhost:3000/api-docs` para visualizar a documentação interativa via Swagger.

---

Feito com ❤️ por pessoas desenvolvedoras com o objetivo de criar pontes reais no universo tech.
