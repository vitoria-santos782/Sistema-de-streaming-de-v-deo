# Tema do Projeto — StreamBox

## Sistema de Streaming de Vídeo

O StreamBox é um sistema de streaming de vídeo desenvolvido em TypeScript.

O sistema permite representar funcionalidades comuns de uma plataforma de streaming, como catálogo de vídeos, diferentes planos de assinatura, reprodução de conteúdos, configuração personalizada da reprodução e gerenciamento de perfis de usuários.

O projeto foi desenvolvido com foco na aplicação prática dos cinco padrões criacionais estudados na disciplina de Padrões de Projeto:

- Factory Method
- Abstract Factory
- Builder
- Prototype
- Singleton

## Problema

Sistemas de streaming precisam criar diferentes tipos de objetos dependendo do plano do usuário, da qualidade de reprodução e das configurações escolhidas.

Se esses objetos forem criados diretamente em todas as partes do sistema, o código pode ficar mais difícil de organizar, modificar e manter.

O StreamBox utiliza padrões criacionais para organizar a criação desses objetos e separar as responsabilidades.

## Funcionalidades

O sistema possui as seguintes funcionalidades:

- Cadastro e representação de vídeos;
- Catálogo compartilhado de vídeos;
- Diferentes tipos de reprodutores;
- Planos Básico e Premium;
- Diferentes qualidades de reprodução;
- Configuração personalizada dos vídeos;
- Clonagem de perfis de usuários;
- Integração dos cinco padrões criacionais.

## Objetivo

O objetivo do projeto é demonstrar, por meio de um sistema pequeno e funcional, como padrões criacionais podem ser utilizados para organizar a criação de objetos em uma aplicação de streaming de vídeo.

O projeto também busca demonstrar a integração entre os padrões, evitando que eles sejam utilizados apenas de forma isolada.