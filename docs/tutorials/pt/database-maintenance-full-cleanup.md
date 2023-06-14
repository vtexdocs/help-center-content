---
title: 'Manutenção de Base (Full Cleanup)'
id: 34P9LGs7BCIQK6acQom802
status: PUBLISHED
createdAt: 2018-02-07T14:32:22.879Z
updatedAt: 2022-12-08T22:26:21.443Z
publishedAt: 2022-12-08T22:26:21.443Z
firstPublishedAt: 2018-02-07T16:44:48.971Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: manutencao-de-base-full-cleanup
locale: pt
legacySlug: entendendo-a-manutencao-da-base-de-dados
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

No início da operação de uma loja VTEX, muitas vezes é necessário testar as funções da plataforma, acostumando-se às ferramentas, aos processos e aos resultados possíveis. Para reverter os resultados de algumas destas operações, disponibilizamos a seguinte URL para limpeza da base de dados da loja:

`https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx`

Nesta página, é possível limpar o catálogo e reiniciar o indexador, retirando todos os produtos da sua loja.

Por questões de segurança, somente o [Usuário Titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) da conta possui acesso à Manutenção de Base. Caso outro usuário tente acessar esta página, uma mensagem informando o e-mail do responsável da conta será exibida e todos os botões estarão inativos.

Estas são as operações disponíveis:

- __Recadastrar Preços no SmartCheckout:__ quando você recadastra os preços no SmartCheckout, o sistema sobrescreve os valores cadastrados com os da versão anterior.

- __Apagar Produtos do Indexador:__ ao apagar produtos do indexador, sua loja ficará sem produtos para serem visualizados.

  <div class="alert alert-warning"> 
    <p>As seguintes regras se aplicam ao botão <b>Apagar Produtos do Indexador</b>:
<UL> <LI>Apenas lojas com menos de 10 mil produtos podem realizar essa ação. Lojas com um catálogo maior devem <a href="https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM">abrir um chamado para o suporte VTEX</a> para realizar a limpeza do indexador e reindexação da base de dados.</LI>
<LI>Quando um usuário apaga produtos do indexador, a conta é bloqueada de executar essa ação por 24 horas.</LI>
<LI>Existe uma fila para processar as solicitações geradas pelo botão <i>Apagar Produtos do Indexador</i>. Você pode visualizar o tempo estimado de espera na interface da página. A fila é global e se aplica a todos os usuários, para garantir a segurança da plataforma VTEX.</LI></UL></p>
  </div>

- __Apagar Produtos/Skus e itens relacionados:__ ao apagar esses elementos, seus produtos e SKUs, além dos seus itens relacionados, serão removidos de forma definitiva da sua loja.

- __Apagar Categorias, Marcas, Campos e Itens relacionados:__ ao apagar esses elementos, Categorias, Marcas e Campos, além dos seus itens relacionados, serão removidos de forma definitiva da sua loja. Para que a exclusão possa acontecer, é necessário apagar produtos e SKUs antes. 

  <div class="alert alert-info">
    <p>Para os casos em que for realizada a operação <b>Apagar Produtos/Skus e itens relacionados</b> ou <b>Apagar Categorias, Marcas, Campos e Itens relacionados</b> e a loja utilize o <a href="https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG">VTEX Intelligent Search</a>, entre em contato com nosso <a href="https://support.vtex.com/hc/pt-br/requests">Suporte</a> para realizar a manutenção total da base de dados.</p>
  </div>

- __Apagar Sellers e Itens relacionados:__ ao apagar esse elemento, seus sellers, além dos seus itens relacionados, serão removidos de forma definitiva da sua loja.

- __Agendar reindexação Completa:__ ao reindexar a base, você entra em uma fila para iniciar o processo de indexação dos seus produtos. Os produtos da loja continuam à venda durante o processo de indexação. Eles apenas entram em uma fila para atualização de dados e seguem disponíveis no site para venda. Após clicar em __Reindexar Base__, o processo é iniciado automaticamente.

<div class="alert alert-warning">
  <p>É importante <b>Apagar Produtos do Indexador</b> após realizar qualquer outra operação nesta página. Caso contrário, sua loja pode apresentar erros ao acessar páginas de produtos, de categorias ou resultados de busca. Não é necessário <b>Apagar Produtos do Indexador</b> após <b>Agendar reindexação completa</b>.
</div>
