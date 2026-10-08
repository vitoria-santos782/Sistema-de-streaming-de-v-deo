# StreamBox

## Sistema de Streaming de Vídeo

Projeto desenvolvido em TypeScript para demonstrar a aplicação prática dos cinco padrões criacionais de projeto estudados na disciplina de Padrões de Projeto.

## Tema

O StreamBox representa um sistema de streaming de vídeo com funcionalidades como:

- catálogo de vídeos;
- planos Básico e Premium;
- reprodução em diferentes qualidades;
- configuração personalizada de reprodução;
- perfis de usuários;
- clonagem de perfis.

## Padrões utilizados

O projeto utiliza os seguintes padrões criacionais:

- Factory Method
- Abstract Factory
- Builder
- Prototype
- Singleton

## Arquitetura

A estrutura principal do projeto é:

```text
streambox/
├── docs/
│   ├── TEMA.md
│   └── PADROES.md
├── src/
│   ├── factories/
│   ├── abstract-factory/
│   ├── builder/
│   ├── prototype/
│   ├── singleton/
│   ├── models/
│   └── index.ts
├── README.md
├── package.json
├── package-lock.json
└── tsconfig.json