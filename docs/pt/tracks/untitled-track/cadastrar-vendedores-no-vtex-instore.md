---
title: 'Cadastrar vendedores no VTEX inStore'
id: 4CazVGbuookKSACceaMgUc
status: ARCHIVED
createdAt: 2018-03-15T20:23:48.390Z
updatedAt: 2020-02-13T20:06:52.556Z
publishedAt: 
firstPublishedAt: 2018-03-15T20:24:39.584Z
contentType: trackArticle
productTeam: Shopping
slugEN: how-to-register-your-salespersons-on-vtex-instore
locale: pt
trackId: 
trackSlugPT: untitled-track
---

Este guia ajudará a entender detalhes técnicos da plataforma VTEX que influenciam o funcionamento do inStore. Para ter uma visão a nível de de negócios do produto, recomendamos que você leia o Guia VTEX inStore para lojistas.

### Como cadastrar um vendedor

O cadastro do vendedor permite o app ter uma associação de um vendedor com uma loja. Assim, quando o app identificar um vendedor ele é capaz de fazer duas coisas:

1. Associar as vendas da lojas ao vendedor;
2. Carregar os preços, condições de pagamento e disponibilidade do produto da loja que o vendedor faz parte;

A identificação do vendedor é feita assim que o inStore é aberto pela primeira vez no dia:
![identificacao-vendedor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Para cadastrar os vendedores que a tela acima permite identificar basta acessar o seu Masterdata.

 1. Clique em `Profile System`;
 2. Em seguida `Vendedores`;
 3. Em seguida `Listar`, como mostra a imagem abaixo.
![masterdata-home-vendedores](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

Após clicar em `listar`, uma lista de vendedores cadastrados irá aparecer conforme mostra a imagem abaixo. Clique em `Novo` para cadastrar um novo vendedor.
![masterdata-lista-vendedores](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

Preencha as informações do vendedor no formulário. No campo `Loja`, digite o nome da loja. Verifique se todas as informações estão corretas e depois clique em `Salvar`.
![masterdata-novo-vendedor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

Também será necessário configurar um perfil de acesso para esse vendedor no seu License Manager. Basta clicar em `Usuários` e criar um novo cadastro com o mesmo email que foi colocado no cadastro de Vendedor no Masterdata, o Perfil de Acesso que deve ser adicionado é o `Vendedor inStore`.

*Assim que o novo vendedor for cadastrado no License Manager ele receberá um email de confirmação. Será solicitado que ele cadastre e confirme uma senha de acesso.*

![license-manager-novo-vendedor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)
