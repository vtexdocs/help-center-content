---
title: 'Gerenciando redirecionamentos de URL por binding'
id: 67GAK2TCQgjvmtPXxAqREb
status: PUBLISHED
createdAt: 2021-04-20T15:03:54.330Z
updatedAt: 2023-09-04T12:42:32.729Z
publishedAt: 2023-09-04T12:42:32.729Z
firstPublishedAt: 2021-05-05T18:11:25.521Z
contentType: tutorial
productTeam: VTEX IO
author: 6AcGyun1hSWewU8YcaQiO
slugEN: managing-redirects-per-binding
legacySlug: gerenciando-redirecionamentos-de-url-por-binding
locale: pt
subcategoryId: 1znnjA17XqaUNdNFr42PW5
---

Redirecionamentos são ferramentas para encaminhar usuários e mecanismos de busca para uma URL ativa mais relevante ou semelhante àquela que eles solicitaram inicialmente.

Lojas multi-domínio pedem gerenciamento de redirecionamento por [*binding*](/pt/docs/tutorials/o-que-e-binding) devido, principalmente, à complexidade apresentada pelas várias URLs disponíveis simultâneamente.

Com isso em mente, a VTEX permite que você gerencie seus redirecionamentos de URL de acordo com os bindings da sua loja, por meio do painel de administração. 

> ⚠️ Para criar, editar ou apagar redirecionamentos, o usuário do Admin precisa ter um perfil de acesso com o [recurso do License Manager](/pt/docs/tutorials/recursos-do-license-manager) **CMS Settings**. Você pode atribuir um perfil de acesso com o recurso ao usuário seguindo as instruções do artigo [Gerenciando usuários](/pt/docs/tutorials/gerenciar-usuarios-administrativos#editar-usuarios), ou criar um novo perfil de acesso que inclui o recurso seguindo as instruções do artigo [Perfis de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso).

No Admin VTEX:

1. Acesse **Storefront > Pages**.
2. Clique na aba **Redirecionamentos**.

![pt-redirecttab](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/páginas/gerenciando-redirecionamentos-de-url-por-binding_1.png)

## Criando redirecionamentos manualmente

1. Clique no botão **Novo redirecionamento**.
2. No campo `Obrigatório`, use o menu seletor para escolher o binding desejado.
3. Use os campos `De` e` Para` para definir a URL anterior e a nova para a qual os usuários e mecanismos de busca serão redirecionados.
4. Defina se o seu redirecionamento será permanente ou temporário - caso o seu redirecionamento seja temporário, você pode selecionar o botão `Este redirecionamento tem uma data de término` para definir uma data de término para ele.
5. Salve as suas alterações.

![pt-newredirect](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/páginas/gerenciando-redirecionamentos-de-url-por-binding_2.png)

## Excluindo redirecionamentos manualmente

1. Clique no redirecionamento que você deseja excluir.
2. Clique no botão `Excluir`.
3. Confirme sua ação.

![pt-redirectdelete](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/páginas/gerenciando-redirecionamentos-de-url-por-binding_3.png)

> ⚠️ Um *bug* pode ser encontrado ao tentar clicar em redirecionamentos com parâmetros de consulta na URL (*query strings*). O time de produto da VTEX já está ciente do comportamento inesperado e trabalhando na correção. Caso você não consiga clicar no redirecionamento desejado para excluí-lo, prefira fazê-lo por meio da importação da planilha enquanto o problema não é resolvido.

## Importando e exportando redirecionamentos

Para gerenciar em massa os redirecionamentos da sua loja, você pode usar uma planilha de importação e exportação.

> ⚠️ Os redirecionamentos listados na planilha serão obrigatoriamente criados ou excluídos da lista de redirecionamentos da loja - não é possível criar *e* excluir redirecionamentos usando a mesma planilha. Antes de preencher e enviar a sua planilha no admin, tenha em mente seu objetivo final com ela.

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

![pt-planilharedirect](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/páginas/gerenciando-redirecionamentos-de-url-por-binding_4.png)

> ⚠️ Ao clicar no botão `Salvar`, você criará todos os redirecionamentos listados em sua planilha, ao passo que clicar no botão <code>Excluir</couirde> removerá todos eles do banco de dados de redirecionamentos da sua loja.

6. Carregue a planilha a partir dos seus arquivos locais.
7. Clique no botão `Importar arquivo`.
