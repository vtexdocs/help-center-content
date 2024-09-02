---
title: 'Cadastrar vendedores no VTEX inStore'
id: 4CazVGbuookKSACceaMgUc
status: DRAFT
createdAt: 2018-03-15T20:23:48.390Z
updatedAt: 2020-02-13T20:06:52.556Z
publishedAt: 
firstPublishedAt: 2018-03-15T20:24:39.584Z
contentType: trackArticle
productTeam: Shopping
slug: cadastrar-vendedores-no-vtex-instore
locale: pt
trackId: 
trackSlugPT: 
---

Este guia ajudará a entender detalhes técnicos da plataforma VTEX que influenciam o funcionamento do inStore. Para ter uma visão a nível de de negócios do produto, recomendamos que você leia o Guia VTEX inStore para lojistas.

### Como cadastrar um vendedor

O cadastro do vendedor permite o app ter uma associação de um vendedor com uma loja. Assim, quando o app identificar um vendedor ele é capaz de fazer duas coisas:

1. Associar as vendas da lojas ao vendedor;
2. Carregar os preços, condições de pagamento e disponibilidade do produto da loja que o vendedor faz parte;

A identificação do vendedor é feita assim que o inStore é aberto pela primeira vez no dia:
![identificacao-vendedor](//images.contentful.com/alneenqid6w5/2LhlUtsEYouEY4i4iYOIOq/d556be06047c26ee85f392ba7256f9f8/identificacao-vendedor.png)

Para cadastrar os vendedores que a tela acima permite identificar basta acessar o seu Masterdata.

 1. Clique em `Profile System`;
 2. Em seguida `Vendedores`;
 3. Em seguida `Listar`, como mostra a imagem abaixo.
![masterdata-home-vendedores](//images.contentful.com/alneenqid6w5/32iOuRESyIwEwSE4WcEWmu/b64645e6f940399933df3db5b40d6a4f/masterdata-home-vendedores.png)

Após clicar em `listar`, uma lista de vendedores cadastrados irá aparecer conforme mostra a imagem abaixo. Clique em `Novo` para cadastrar um novo vendedor.
![masterdata-lista-vendedores](//images.contentful.com/alneenqid6w5/xsepOCP9Dwiys6MKkQGY4/4717c2ff41b7b52a43b549294877713f/masterdata-lista-vendedores.png)

Preencha as informações do vendedor no formulário. No campo `Loja`, digite o nome da loja. Verifique se todas as informações estão corretas e depois clique em `Salvar`.
![masterdata-novo-vendedor](//images.contentful.com/alneenqid6w5/7mfVtDbemWWA6yqqYIQgwC/a498d9fbd2dcfbe87546711d8d8c7a36/masterdata-novo-vendedor.png)

Também será necessário configurar um perfil de acesso para esse vendedor no seu License Manager. Basta clicar em `Usuários` e criar um novo cadastro com o mesmo email que foi colocado no cadastro de Vendedor no Masterdata, o Perfil de Acesso que deve ser adicionado é o `Vendedor inStore`.

*Assim que o novo vendedor for cadastrado no License Manager ele receberá um email de confirmação. Será solicitado que ele cadastre e confirme uma senha de acesso.*

![license-manager-novo-vendedor](//images.contentful.com/alneenqid6w5/98ppRH68esOwU2cWSiM4w/501c79f9cc247103868a026581f7573c/license-manager-novo-vendedor.png)
