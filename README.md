# 🌱 Trabalha Paulista

**Talento daqui. Oportunidades por perto.**

O Trabalha Paulista é uma plataforma de apresentação de oportunidades de trabalho e conexão entre profissionais e empresas de Paulista, Pernambuco. Este repositório contém a interface front-end do projeto, com páginas responsivas e conteúdo demonstrativo.

> ℹ️ **Atenção:** este projeto ainda não tem backend. Os cadastros, o login, a recuperação de senha e os dados de vagas são demonstrações visuais; nenhum dado é enviado ou salvo.

---

## ✨ O que você encontra no projeto

- 🏠 **Página inicial:** apresentação da plataforma, busca demonstrativa de vagas, áreas profissionais, dicas e perguntas frequentes.
- 🔎 **Busca e filtros:** demonstração de busca por palavra-chave, bairro e categoria.
- 🔐 **Login:** formulário de acesso com opção visual para candidato ou empresa.
- 📝 **Cadastro:** formulário de demonstração para candidatos.
- 🔑 **Recuperação de senha:** tela para solicitar instruções de recuperação.
- 📊 **Painel do candidato:** visão demonstrativa de perfil, vagas sugeridas e candidaturas.
- 📱 **Layout responsivo:** adaptação para celular, tablet e desktop.

---

## 🚀 Como visualizar

Não é necessário instalar dependências.

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.
4. Ou acesse o link em **about** no lado superior esquerdo dessa página.

Se preferir, use a extensão **Live Server** no Visual Studio Code para abrir a página localmente.

---

## 🧭 Navegação pelas páginas

| Página | Caminho |
| --- | --- |
| Página inicial | `index.html` |
| Login | `assets/pages/login.html` |
| Cadastro | `assets/pages/cadastro.html` |
| Recuperação de senha | `assets/pages/recuperar-senha.html` |
| Painel do candidato | `assets/pages/painel.html` |

---

## 🗂️ Estrutura do projeto

```text
trabalhaPaulista/
├── index.html
└── assets/
    ├── css/
    │   ├── style.css          # Arquivo global que importa os estilos
    │   ├── base.css           # Variáveis, tipografia e estilos compartilhados
    │   ├── header.css         # Cabeçalho e navegação
    │   ├── hero.css           # Seção principal da página inicial
    │   ├── search.css         # Busca e destaques
    │   ├── categories.css     # Categorias profissionais
    │   ├── jobs.css           # Vagas e filtros
    │   ├── city.css           # Seção sobre a comunidade local
    │   ├── steps.css          # Etapas de uso da plataforma
    │   ├── support.css        # Conteúdos de apoio
    │   ├── business.css       # Chamada para empresas
    │   ├── faq.css            # Perguntas frequentes
    │   ├── footer.css         # Rodapé
    │   ├── auth.css           # Login, cadastro e recuperação de senha
    │   ├── dashboard.css      # Painel do candidato
    │   └── responsive.css     # Regras para diferentes tamanhos de tela
    ├── img/
    │   ├── logo-trabalha-paulista.png
    │   ├── Pequeno-negocio-local.png
    │   ├── Profissional-de-Paulista-1.png
    │   ├── Profissional-de-Paulista.png
    │   ├── Profissional-no-comércio-local.png
    │   └── Vida-e-rabalho-no-bairro.png
    ├── js/
    │   └── app.js             # Interações da interface
    └── pages/
        ├── cadastro.html
        ├── login.html
        ├── painel.html
        └── recuperar-senha.html
```

---

## 🛠️ Tecnologias

- **HTML5** — estrutura das páginas.
- **CSS3** — estilos, organização por componentes e responsividade.
- **JavaScript** — interações demonstrativas, sem bibliotecas externas.

---

## 🧩 Organização dos estilos

As páginas carregam somente `assets/css/style.css`. Esse arquivo global importa os demais estilos da pasta `assets/css/`, separados por seção ou componente.

Para alterar uma parte específica, edite o arquivo CSS correspondente. Por exemplo:

- Hero da página inicial: `assets/css/hero.css`
- Lista e filtros de vagas: `assets/css/jobs.css`
- Telas de acesso: `assets/css/auth.css`
- Responsividade: `assets/css/responsive.css`

---

## ⚙️ Interações disponíveis

O JavaScript implementa algumas interações para demonstrar a experiência da interface:

- abertura e fechamento do menu em telas menores;
- filtro local das vagas demonstrativas;
- marcação visual de vagas salvas;
- exibição e ocultação de senhas;
- verificação de preenchimento e confirmação de senha;
- mensagens de demonstração ao enviar os formulários.

Essas interações acontecem no navegador e **não representam autenticação, cadastro ou armazenamento real**.

---

## 🗺️ Próximas etapas

Para transformar a demonstração em uma plataforma funcional, algumas etapas futuras seriam:

- criar um backend e uma API;
- armazenar usuários, empresas e oportunidades em um banco de dados;
- implementar autenticação e recuperação de senha;
- separar o cadastro de candidato do cadastro de empresa;
- permitir que empresas publiquem e gerenciem vagas;
- permitir que candidatos enviem e acompanhem candidaturas;
- validar e proteger os dados enviados pelos formulários.

---

## 📌 Status

**Front-end demonstrativo em desenvolvimento.**

As vagas, os perfis e as informações exibidas no painel são exemplos visuais e não representam dados reais.
