---
title: Adicionar vendedores
id: 6C7mb1lDhueimseg6yIAki
status: DRAFT
createdAt: 2018-06-22T14:03:43.026Z
updatedAt: 2020-08-03T19:54:34.416Z
publishedAt: 
firstPublishedAt: 2018-06-22T14:25:56.326Z
contentType: trackArticle
productTeam: Shopping
slug: adicionar-vendedores
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

Se você configurou sua loja utilizando o fluxo de __Easy Setup__ talvez já tenha criado um vendedor para acessar o inStore, porém quando quiser adicionar novos vendedores, precisará fazer isso através do módulo VTable no admin da VTEX.

Ao entrar no VTable (https://{{AccountName}}.myvtex.com/admin/vtable) você verá duas aplicações, __Admin das lojas__ e __Admin dos vendedores__:

![inStore aplicacoes vtable](//images.ctfassets.net/alneenqid6w5/6BRkoPO2cMOQkYkuSOeCO6/641c901771af479df13a487c123aff23/inStore_aplicacoes_vtable.png)

Clique em __Admin dos vendedores__ para abrir a tabela onde incluiremos um novo vendedor.

Caso você já tenha cadastrado um vendedor através do __Easy Setup__, basta clicar em __New line__, inserir os dados do novo vendedor, copiar o ID da Loja da linha superior e clicar em __Save__, como mostra o vídeo abaixo (clique na imagem abaixo para visualizar):
 
<div class="alert alert-danger">
<strong>IMPORTANTE</strong>: o e-mail de cada vendedor <strong>NÃO</strong> pode ser o mesmo utilizado na plataforma VTEX, isso porque o seu e-mail de admin possui permissões que um vendedor não deveria ter, por isso é necessário utilizar algum outro e-mail sem privilégios na plataforma.
</div>

![inStore adicionando vendedor](//images.ctfassets.net/alneenqid6w5/3WGuWnOeY8emcmuIqcE0uE/74586856739dcee97163835710a85780/inStore_adicionando_vendedor.png)

Se você pulou a etapa de criação de vendedor no __Easy Setup__ e não tem nenhum vendedor criado, precisará pegar o id da __Loja__ no __Admin das Lojas__ no VTable.

Após cadastrar o vendedor no admin da VTEX, ele precisará fazer login no e-commerce para criar uma senha para então conseguir acessar o inStore.

Para definir a senha desse vendedor acesse o __admin__ da sua conta: https://{{AccountName}}.myvtex.com/admin e depois siga esse artigo: https://help.vtex.com/pt/faq/como-recuperar-senha-de-acesso
__Caso você tente definir a senha diretamente no site do e-commerce, o acesso ao inStore não funcionará.__

<div class="alert alert-warning">
<strong>Importante</strong>: além de configurar o vendedor no VTable, é necessário criar o usuário no Admin, associando a ele o perfil <b>inStore Sales Person</b>.
</div>
