# Padrões de Projeto — StreamBox

Este documento apresenta os cinco padrões criacionais utilizados no projeto StreamBox.

---

# 1. Factory Method

## Onde está no código

O Factory Method está implementado na pasta:

`src/factories/`

Principais classes:

- `FactoryReprodutor.ts`
- `ReprodutorStreaming.ts`
- `ReprodutorHD.ts`
- `Reprodutor4K.ts`

## Problema resolvido

O sistema precisa criar diferentes tipos de reprodutores, como HD e 4K.

Sem o padrão, o código cliente precisaria conhecer diretamente as classes concretas de cada reprodutor.

## Como funciona

A classe `FactoryReprodutor` define o método:

`criarReprodutor()`

As fábricas concretas implementam esse método e decidem qual reprodutor será criado.

Exemplo:

- `FactoryHD` cria `ReprodutorHD`;
- `Factory4K` cria `Reprodutor4K`.

## Por que faz sentido no StreamBox

Uma plataforma de streaming pode possuir diferentes tipos de reprodução.

O Factory Method permite alterar ou adicionar novos tipos de reprodutores sem precisar modificar todo o código que utiliza a reprodução.

---

# 2. Singleton

## Onde está no código

O Singleton está implementado em:

`src/singleton/CatalogoVideos.ts`

## Problema resolvido

O sistema precisa possuir um catálogo de vídeos compartilhado.

Se diferentes partes do sistema criassem catálogos independentes, poderiam existir informações diferentes em cada catálogo.

## Como funciona

A classe possui um atributo estático para armazenar sua única instância.

O construtor é privado:

`private constructor()`

A instância é obtida através do método:

`getInstancia()`

## Por que faz sentido no StreamBox

O catálogo representa uma informação compartilhada pelo sistema.

Assim, diferentes partes da aplicação acessam o mesmo catálogo.

---

# 3. Abstract Factory

## Onde está no código

O padrão está implementado em:

`src/abstract-factory/`

Principais classes:

- `FabricaStreaming.ts`
- `FabricaPlanoBasico.ts`
- `FabricaPlanoPremium.ts`
- `PlayerBasico.ts`
- `PlayerPremium.ts`
- `QualidadeHD.ts`
- `Qualidade4K.ts`

## Problema resolvido

O sistema precisa criar famílias de objetos compatíveis de acordo com o plano do usuário.

Por exemplo, o plano Básico deve utilizar Player Básico e qualidade HD, enquanto o Premium utiliza Player Premium e qualidade 4K.

## Como funciona

A interface `FabricaStreaming` define métodos para criação dos produtos:

- `criarPlayer()`;
- `criarQualidade()`.

As fábricas concretas implementam esses métodos.

## Famílias criadas

### Plano Básico

- Player Básico;
- Qualidade HD.

### Plano Premium

- Player Premium;
- Qualidade 4K.

## Por que faz sentido no StreamBox

O padrão garante que os produtos relacionados ao plano sejam criados de forma compatível.

---

# 4. Builder

## Onde está no código

O Builder está implementado em:

`src/builder/`

Principais classes:

- `ConfiguracaoVideo.ts`;
- `ConfiguracaoVideoBuilder.ts`.

## Problema resolvido

Uma configuração de reprodução pode possuir diversas opções, como:

- resolução;
- idioma;
- legenda;
- autoplay;
- volume;
- velocidade.

Criar esse objeto utilizando um construtor com muitos parâmetros deixaria o código mais difícil de entender.

## Como funciona

O `ConfiguracaoVideoBuilder` permite configurar cada opção individualmente.

Depois, o método:

`construir()`

cria o objeto final `ConfiguracaoVideo`.

## Por que faz sentido no StreamBox

O usuário pode personalizar a reprodução de acordo com suas preferências.

O Builder permite montar essa configuração de maneira organizada e legível.

---

# 5. Prototype

## Onde está no código

O Prototype está implementado em:

`src/prototype/PerfilUsuario.ts`

## Problema resolvido

O sistema pode precisar criar novos perfis baseados em um perfil já configurado.

Criar todos os dados novamente pode ser desnecessário.

## Como funciona

A classe `PerfilUsuario` possui o método:

`clonar()`

Esse método cria um novo objeto utilizando os dados do perfil original.

Depois da clonagem, o novo perfil pode ser alterado independentemente.

## Por que faz sentido no StreamBox

O Prototype permite criar rapidamente novos perfis baseados em configurações existentes.

---

# Integração dos padrões

Os cinco padrões são utilizados juntos no sistema.

O fluxo principal é:

1. O usuário escolhe um plano;
2. A Abstract Factory cria a família de componentes compatível;
3. O Factory Method cria o reprodutor;
4. O Builder monta a configuração personalizada da reprodução;
5. O Singleton mantém o catálogo compartilhado;
6. O Prototype permite clonar perfis de usuários.

Dessa forma, os padrões não estão apenas implementados separadamente, mas participam do funcionamento do StreamBox.