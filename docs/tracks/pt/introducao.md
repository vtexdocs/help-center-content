---
title: Introdução
id: 6KChYv8YnK2GkAWQ0eIiGK
status: DRAFT
createdAt: 2018-05-10T18:03:29.402Z
updatedAt: 2020-02-13T18:58:52.298Z
publishedAt: 
firstPublishedAt: 
contentType: trackArticle
productTeam: 
slug: introducao
trackId: 
trackSlugPT: 
---

A VTEX além de oferecer as integrações com os grandes players do mercado nativamente, também oferece um conjunto de APIs e instruções para que terceiros se integrem.

Nesta track, vamos ensinar passo a passo como desenvolver uma integração entre um Marketplace não VTEX e um seller hospedado na pltaforma VTEX.

## Conhecimentos necessários

Além de boas práticas de programação, há alguns pontos e a utilização de algumas ferramentas que julgamos necessários para que a integração funcione corretamente.

### Conceitos Básicos

__Seller:__ Dono do produto, responsável por cumprir com a entrega do SKU.
__Marketplace:__ Dono da vitrine (cara com o cliente final), responsável por expor e vender o SKU.
__SKU:__ Item a ser trocado e vendido entre Marketplace e Seller.
__Endpoint:__ Ponto de acesso de um serviço na internet, serviço pronto para receber uma requisição e devolver uma resposta.

### Ferramentas de Apoio ao Integrador

Recomendamos algumas ferramentas que são de extrema importância para qualquer integrador:

#### Postman

Ferramenta que permite testar, armazenar histórico, salvar coleções de requests do acesso de todas as APIs dos modulos VTEX  (OMS, Logistics, Pricing, GCS, etc).

É de suma importância que o integrador tenha o conhecimento de ferramentas desse tipo, ou outras parecidas antes de inciar um processo de integração usando webservice SOAP ou APIs REST VTEX.

### Acesso e Credenciais

Toda chamada feita as APIs REST da VTEX devem ser feitas em "https" e devem conter em seu header as chaves de autenticação. As chaves de autenticação do header(para acessar as APIs REST) devem ser solicitados ao administrador da loja, ou ao time de operações que está implantando a loja.

As APIs REST possuem seus próprios endpoints em `https://api.vtex.com`.

- [Como se autenticar na API](/pt/faq/como-autenticar-na-api)

Para fins de rastreabilidade, cada integração (diferentes sistemas ou ERP) deve possuir seu usuário exclusivo.
