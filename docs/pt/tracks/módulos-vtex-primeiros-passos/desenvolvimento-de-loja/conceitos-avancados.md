---
title: 'Conceitos avançados'
id: 6a4cJHg8fVgDNDEdcq9S9Q
status: PUBLISHED
createdAt: 2022-12-22T19:24:34.808Z
updatedAt: 2022-12-22T19:57:22.738Z
publishedAt: 2022-12-22T19:57:22.738Z
firstPublishedAt: 2022-12-22T19:57:22.738Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: conceitos-avancados
locale: pt
trackId: 3fHF3GIjK8UugnQKIakpl9
trackSlugEN: desenvolvimento-de-loja
order: 4
---

Agora que você já conhece um pouco os principais aspectos e tecnologias utilizadas para o desenvolvimento de loja na VTEX, exploraremos alguns conceitos mais avançados que podem te auxiliar no seu dia a dia com o desenvolvedor.

## Abstração de infraestrutura
O VTEX IO é uma tecnologia proprietária VTEX, mas que suporta a utilização de diferentes frameworks e linguagens de programação já familiares aos desenvolvedores, como:

- TypeScript; 
- React; 
- GraphQL; 
- .NET;
- Node.

Por abstrair diversas camadas de desenvolvimento de softwares, ao utilizar o VTEX IO, o desenvolvedor não precisa lidar com servidores, problemas de infraestrutura e escalabilidade.

Outra facilidade possibilitada pela plataforma é a de todo o desenvolvimento ser sincronizado automaticamente com os servidores VTEX. Isso permite que nenhum código seja mantido localmente, facilitando atualizações e evitando problemas como o cache.

## Ambientes de desenvolvimento seguros

Com o objetivo de ser one-stop-shop para toda a VTEX, o VTEX IO apoia o desenvolvimento de todos os sistemas e oferece uma forma segura de alterar o funcionamento e a aparência de uma loja, sem afetar o que está em produção. O conceito fundamental para que isso seja possível é o de workspaces.

### Workspaces

Com o VTEX IO, é possível desenvolver aplicações em múltiplos ambientes apartados chamados de workspaces. Workspaces são ambientes de desenvolvimento e teste isolados um do outro que funcionam como diferentes versões de uma mesma conta VTEX. 

Dessa forma, existe uma separação entre os ambientes de desenvolvimento e produção, aumentando assim a segurança da loja que utiliza o VTEX IO. 

Existem três tipos principais de workspaces:

- **Workspace de desenvolvimento**: utilizado principalmente por desenvolvedores de software para trabalhar em modo rascunho, construindo ou estendendo aplicações de back-end e front-end; 
- **Workspace de produção**: utilizado principalmente pelos times de desenvolvimento e quality assurance para validar as aplicações de VTEX IO. Eles podem receber tráfego de produção quando utilizados em testes A/B;
- **Workspace master**: um workspace único de produção que reflete o conteúdo entregue aos consumidores finais de uma loja.

A principal forma de configurar um workspace é instalando ou desinstalando apps. Isso cria um sistema plug-and-play para modificar o comportamento da loja, que é um dos maiores atrativos do VTEX IO.
