---
title: 'Criar formulário para registrar informações usando Master Data Newsletter (MD)'
id: 2R0OaawoyAUKg0CmUKAGo0
status: DRAFT
createdAt: 2017-06-08T01:15:53.801Z
updatedAt: 2020-08-06T19:33:15.607Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:16:56.064Z
contentType: tutorial
productTeam: Master Data
author: TAUXpa4XWCsIaUOoksGIE
slug: criar-formulario-para-registrar-informacoes-usando-master-data-newsletter
locale: pt
legacySlug: criar-formulario-para-registrar-informacoes-usando-master-data-newsletter
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

O objetivo deste artigo é que você entenda o passo a passo a criação e implementação de uma forma que permite a gravação de informações no Newsletter o módulo Master Data (MD).

IMPORTANTE: O uso deste controle para gerenciar dados de clientes registros não é recomendado, uma vez que os registros são armazenados apenas no VTEX Manager, por isso não é aconselhável ter os dados dos clientes separados, por um lado, assinaturas de boletins informativos e outros registros Checkout. Ao fazer parte do Master Data (MD) módulo só tem a funcionalidade para exportar a lista de registros, pesquisa ou filtros. Por outro lado, o cliente manter registros Boletim nos dados mestre (MD) de ter dados centralizado, você pode gerenciar a informação através de API, gatilhos definidos para correspondência, integrações com sistemas externos, entre outros. (Ver articulo).

A fim de tornar a criação da forma de nossa Newsletter é importante entender que você pode atingir a meta de duas estradas principais:

1. Criando uma nova entidade de dados para o gerenciamento de informações relacionadas a Newsletter. Esta entidade será diferente do cliente básico, permitindo a obtenção de independência das informações dos clientes e registros para o boletim (ver: http://help.vtex.com/es/tutorial/entidades-de-datos-creacion -y-manutenção /).

2. Criando uma forma associada com a entidade de dados que permitirá que os clientes para verificar ou editar informações dentro da entidade. Se você precisa de dados que não estão atualmente na entidade Clientes, você pode adicionar mais campos conforme necessário (consulte: http://help.vtex.com/es/tutorial/creando-formulario-en-master-data/) .
  - AVISO: Apenas alterar a estrutura de entidades nativas da plataforma com a ajuda de um VTEX agente ou agência especializada. Uma mudança incorreto pode interferir com o fluxo de compras e gerar erros na loja. entidades nativas: Cliente (cliente) e endereco (endereço).
 
Depois de concluir as configurações acima, você precisa incluir em nossa CMS HTML e JS, que será responsável por fazer pedidos para o VTEX API.
 
Neste link você vai encontrar um exemplo de um HTML e JS, que serve como um guia para a implementação no CMS.
 
[Código de exemplo](//assets.contentful.com/alneenqid6w5/xC0HA56uzIO8Ueca2c02g/eb126bee0a1618dff60da75c997a85e2/newsletterMasterData.rar).
 
IMPORTANTE: Este plugin foi desenvolvido para ajudar a desenvolver uma forma básica usando Master Data (MD). não VTEX não suporta essa extensão e seu código é aberto e pode sofrer modificações e adaptações.
