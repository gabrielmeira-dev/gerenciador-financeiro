# Gerenciador-Financeiro

Uma aplicação web desenvolvida em Angular para controlar gastos e ganhos pessoais, oferecendo uma forma simples de acompanhar suas finanças.

## 🚀 Visão Geral

Este projeto visa permitir que o usuário registre seus **gastos** e **receitas**, visualize o saldo, filtre por períodos e tenha uma visão mais organizada de suas finanças pessoais.

## 🛠 Tecnologias utilizadas

- Angular (gerado com a versão 20.0.4) 
- TypeScript  
- SCSS / HTML  
- JSON-file (`db.json`) para mock/back-end local

## 📥 Instalação

1. Clone o repositório  
   git clone https://github.com/gabrielmeira-dev/gerenciador-financeiro.git

2. Entre na pasta do projeto
cd gerenciador-financeiro


3. Instale as dependências
npm install


## ▶️ Como usar / Desenvolvimento
Para rodar em modo de desenvolvimento, com atualização automática:

ng serve

Depois, abra seu navegador e acesse http://localhost:4200/

## 📦 Build para produção
Gerar versão de produção (otimizada):

ng build
Os arquivos compilados serão gerados na pasta dist/ por padrão.

## 🗂 Estrutura de pastas

src/
  app/
    core/
    features/
    shared/
    app.ts
  styles/
  index.html


## 🧩 Funcionalidades principais
Registrar receitas (ganhos)
Registrar despesas (gastos)
Visualizar saldo atual
Mock de back-end local via db.json

## 🤝 Como contribuir
Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto

2. Crie uma branch para sua feature ou correção
git checkout -b feature/nova-feature

3. Faça os commits com mensagens claras
git commit -m "Adiciona funcionalidade X"

4. Empurre sua branch para o repositório remoto
git push origin feature/nova-feature

5. Abra um Pull Request para revisão

## 📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.