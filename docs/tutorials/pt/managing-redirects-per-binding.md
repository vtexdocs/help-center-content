---
title: 'Gerenciando redirecionamentos de URL por binding '
id: 67GAK2TCQgjvmtPXxAqREb
status: PUBLISHED
createdAt: 2021-04-20T15:03:54.330Z
updatedAt: 2023-09-04T12:42:32.729Z
publishedAt: 2023-09-04T12:42:32.729Z
firstPublishedAt: 2021-05-05T18:11:25.521Z
contentType: tutorial
productTeam: VTEX IO
author: 6AcGyun1hSWewU8YcaQiO
slug: gerenciando-redirecionamentos-de-url-por-binding
locale: pt
legacySlug: gerenciando-redirecionamentos-de-url-por-binding
subcategory: 1znnjA17XqaUNdNFr42PW5
---

Redirecionamentos são ferramentas para encaminhar usuários e mecanismos de busca para uma URL ativa mais relevante ou semelhante àquela que eles solicitaram inicialmente.

Lojas multi-domínio pedem gerenciamento de redirecionamento por [*binding*](https://help.vtex.com/pt/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W) devido, principalmente, à complexidade apresentada pelas várias URLs disponíveis simultâneamente.

Com isso em mente, a VTEX permite que você gerencie seus redirecionamentos de URL de acordo com os bindings da sua loja, por meio do painel de administração. 

<div class="alert alert-warning" role="alert">
Para criar, editar ou apagar redirecionamentos, o usuário do Admin precisa ter um perfil de acesso com o <a href="https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3">recurso do License Manager</a> <strong>CMS Settings</strong>. Você pode atribuir um perfil de acesso com o recurso ao usuário seguindo as instruções do artigo <a href="https://help.vtex.com/pt/tutorial/gerenciando-usuarios--tutorials_512#editar-usuarios">Gerenciando usuários</a>, ou criar um novo perfil de acesso que inclui o recurso seguindo as instruções do artigo <a href="https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso">Perfis de acesso</a>.
</div>

No Admin VTEX:

1. Acesse **Storefront > Pages**.
2. Clique na aba **Redirecionamentos**.

![pt-redirecttab](https://images.ctfassets.net/alneenqid6w5/5L8GV385HAeTQqBjQ3uAS4/e3a177caafdb271ce78b94c86f9add4f/pt-redirecttab.png)

## Criando redirecionamentos manualmente

1. Clique no botão **Novo redirecionamento**.
2. No campo `Obrigatório`, use o menu seletor para escolher o binding desejado.
3. Use os campos `De` e` Para` para definir a URL anterior e a nova para a qual os usuários e mecanismos de busca serão redirecionados.
4. Defina se o seu redirecionamento será permanente ou temporário - caso o seu redirecionamento seja temporário, você pode selecionar o botão `Este redirecionamento tem uma data de término` para definir uma data de término para ele.
5. Salve as suas alterações.

![pt-newredirect](https://images.ctfassets.net/alneenqid6w5/1qnEjsKieoskStnq0Bvl2P/0d02ab19801b3c6fea8e8b2a78ae4ef9/pt-newredirect.png)

## Excluindo redirecionamentos manualmente

1. Clique no redirecionamento que você deseja excluir.
2. Clique no botão `Excluir`.
3. Confirme sua ação.

![pt-redirectdelete](https://images.ctfassets.net/alneenqid6w5/3dRsZxKTYJTaOPrm6rBU84/3e5a9c1f27986e34fa7fd7b32f1a636e/pt-redirectdelete.png)

<div class="alert alert-warning">
Um <i>bug</i> pode ser encontrado ao tentar clicar em redirecionamentos com parâmetros de consulta na URL (<i>query strings</i>). O time de produto da VTEX já está ciente do comportamento inesperado e trabalhando na correção. Caso você não consiga clicar no redirecionamento desejado para excluí-lo, prefira fazê-lo por meio da importação da planilha enquanto o problema não é resolvido.
</div>

## Importando e exportando redirecionamentos

Para gerenciar em massa os redirecionamentos da sua loja, você pode usar uma planilha de importação e exportação.

<div class="alert alert-warning">
Os redirecionamentos listados na planilha serão obrigatoriamente criados ou excluídos da lista de redirecionamentos da loja - não é possível criar <i>e</i> excluir redirecionamentos usando a mesma planilha. Antes de preencher e enviar a sua planilha no admin, tenha em mente seu objetivo final com ela.
</div>

1. Clique no botão `Importar` e depois em` Baixar modelo`. Clique no botão `Exportar` se desejar fazer o download da lista de redirecionamentos pré-salva na loja e modificá-la.
2. Abra a planilha assim que o *download* for concluído e preencha as células das colunas de acordo com a tabela abaixo:

| Coluna     | Valor esperado    |
| ---------- | ----------------- |
| `from`     | URL antiga não mais útil para usuários e mecanismos de busca. |
| `to`       | Nova URL para a qual os usuários e mecanismos de busca serão redirecionados. |
| `type`     | Se o redirecionamento será permanente ou temporário, ou seja, se ele terá uma data de término. |
| `binding`  | *Binding* no qual o redirecionamento deve ser aplicado. Atenção: a coluna deve ser preenchida com o [ID do binding]((https://developers.vtex.com/vtex-developer-docs/docs/checking-your-stores-binding-id) desejado. |
| `endDate`  | Data de término do redirecionamento seguindo o formato UTC. Observe que as células desta coluna só devem ser preenchidas quando o tipo de redirecionamento for temporário. |

3. Salve sua planilha quando estiver satisfeito com as alterações realizadas.
4. Clique no botão `Importar`.
5. Marque o botão `Salvar` ou` Excluir` de acordo com o seu cenário.

![pt-planilharedirect](https://images.ctfassets.net/alneenqid6w5/1Vjku4KoOrCbO7mcdehcCt/e7979dca1ef4b2f159bb3c09a42d9716/pt-planilharedirect.png)

<div class="alert alert-warning">
Ao clicar no botão <code>Salvar</code>, você criará todos os redirecionamentos listados em sua planilha, ao passo que clicar no botão <code>Excluir</couirde> removerá todos eles do banco de dados de redirecionamentos da sua loja.
</div>

6. Carregue a planilha a partir dos seus arquivos locais.
7. Clique no botão `Importar arquivo`.
