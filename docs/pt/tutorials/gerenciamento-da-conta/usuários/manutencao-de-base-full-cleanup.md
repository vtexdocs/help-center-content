---
title: 'Manutenção de Base (Full Cleanup)'
id: 34P9LGs7BCIQK6acQom802
status: PUBLISHED
createdAt: 2018-02-07T14:32:22.879Z
updatedAt: 2024-09-30T15:15:49.788Z
publishedAt: 2024-09-30T15:15:49.788Z
firstPublishedAt: 2018-02-07T16:44:48.971Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: database-maintenance-full-cleanup
legacySlug: entendendo-a-manutencao-da-base-de-dados
locale: pt
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

No início da operação de uma loja VTEX, muitas vezes é necessário testar as funções da plataforma, acostumando-se às ferramentas, aos processos e aos resultados possíveis. Para reverter os resultados de algumas destas operações, disponibilizamos a seguinte URL para limpeza da base de dados da loja:

`https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx`

Nesta página, é possível limpar o catálogo e reiniciar o indexador, retirando todos os produtos da sua loja.

Por questões de segurança, somente o [Usuário Titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) da conta possui acesso à Manutenção de Base. Caso outro usuário tente acessar esta página, uma mensagem informando o e-mail do responsável da conta será exibida e todos os botões estarão inativos.

Estas são as operações disponíveis:

- __Recadastrar Preços no SmartCheckout:__ quando você recadastra os preços no SmartCheckout, o sistema sobrescreve os valores cadastrados com os da versão anterior.

- __Apagar Produtos do Indexador:__ ao apagar produtos do indexador, sua loja ficará sem produtos para serem visualizados.

  > ⚠️ As regras a seguir se aplicam ao botão **Apagar Produtos do Indexador**: <ul> <li>Apenas lojas com menos de 10 mil produtos podem realizar essa ação. Lojas com um catálogo maior devem [abrir um chamado para o suporte VTEX](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) para realizar a limpeza do indexador e reindexação da base de dados.</li> <li>Quando um usuário apaga produtos do indexador, a conta é bloqueada de executar essa ação por 24 horas.</li> <li>Existe uma fila para processar as solicitações geradas pelo botão *Apagar Produtos do Indexador*. Após clicar no botão, o tempo estimado de espera aparece em um log no final da página. A fila é global e se aplica a todos os usuários, para garantir a segurança da plataforma VTEX.</li></ul>

- __Apagar Produtos/Skus e itens relacionados:__ ao apagar esses elementos, seus produtos e SKUs, além dos seus itens relacionados, serão removidos de forma definitiva da sua loja.

- __Apagar Categorias, Marcas, Campos e Itens relacionados:__ ao apagar esses elementos, Categorias, Marcas e Campos, além dos seus itens relacionados, serão removidos de forma definitiva da sua loja. Para que a exclusão possa acontecer, é necessário apagar produtos e SKUs antes. 

- __Apagar Sellers e Itens relacionados:__ ao apagar esse elemento, seus sellers, além dos seus itens relacionados, serão removidos de forma definitiva da sua loja.

- __Agendar reindexação Completa:__ ao reindexar a base, você entra em uma fila para iniciar o processo de indexação dos seus produtos. Os produtos da loja continuam à venda durante o processo de indexação. Eles apenas entram em uma fila para atualização de dados e seguem disponíveis no site para venda. Após clicar em __Reindexar Base__, o processo é iniciado automaticamente.

> ⚠️ É importante **Apagar Produtos do Indexador** após realizar qualquer outra operação nesta página, exceto após **Agendar reindexação completa**. Caso contrário, sua loja pode apresentar erros ao acessar páginas de produtos, de categorias ou resultados de busca.
