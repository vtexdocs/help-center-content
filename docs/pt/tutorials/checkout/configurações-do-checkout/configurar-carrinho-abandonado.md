---
title: 'Configurar Carrinho Abandonado'
id: tutorials_740
status: PUBLISHED
createdAt: 2017-04-27T21:59:05.882Z
updatedAt: 2024-08-09T13:03:53.859Z
publishedAt: 2024-08-09T13:03:53.859Z
firstPublishedAt: 2017-04-27T23:03:41.572Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slugEN: setting-up-abandoned-carts
legacySlug: configurar-carrinho-abandonado
locale: pt
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

O carrinho abandonado é a funcionalidade da VTEX que envia e-mails aos clientes para lembrá-los de finalizar a compra em um carrinho que foi montado, mas não finalizado.

A configuração do carrinho abandonado pode ser realizada de duas formas diferentes, de acordo com o ambiente de operação da loja:
- [Portal CMS Legado](#configuracao-para-lojas-portal-cms-legado): por meio de diversos módulos da plataforma VTEX (CMS, Master Data e Central de Mensagens) e também em seu servidor de host.
- [VTEX IO](#configuracao-para-lojas-vtex-io): por meio da instalação do app “Abandoned Cart”, configuração do template de email na Central de Mensagens, e do Trigger no Master Data.

## Configuração para lojas Portal CMS Legado 

Nesta seção são apresentados os seguintes tópicos para configuração da funcionalidade carrinho abandonado nas lojas VTEX Legado:

- [Configurar template de email no CMS](#configurar-template-de-email-no-cms)
- [Configurar modelo de email na Central de Mensagens](#configurar-modelo-de-email-na-central-de-mensagens)
- [Liberar SPF](#liberar-spf)
- [Configurar trigger](#configurar-trigger)

### Configurar template de email no CMS

Você pode criar o seu próprio template de email customizado ou utilizar a opção padrão de template para carrinho abandonado. Para criar um novo template, siga os passos abaixo:

1. No Admin VTEX, acesse __Storefront > Layout__, ou digite __Layout__ na barra de busca no topo da página.
2. Em __CMS > HTML Templates__, clique no ícone `new template`.
3. Adicione um nome no campo __Template Name__.
4. Preencha o campo __Template XHTML__ com os códigos do template.
5. Clique em `Save Template`.

![template xhtml](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configura%C3%A7%C3%B5es-do-checkout/configurar-carrinho-abandonado_1.PNG)

> ⚠️ Recomendamos que a customização de template seja realizada por profissionais com experiência no módulo CMS, e preferencialmente, que já tenham realizado configurações de outros templates de página e prateleira.

Para utilizar uma opção padrão de template, siga os seguintes passos:

1. No Admin VTEX, acesse __Storefront > Layout__, ou digite __Layout__ na barra de busca no topo da página.
2. Em __CMS > HTML Templates__, clique em `CEM-Abandoned-Cart`.
3. Verifique as informações dos códigos de template presentes no campo __Template XHTML__.

![CEM-Abandoned-Cart](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configura%C3%A7%C3%B5es-do-checkout/configurar-carrinho-abandonado_2.PNG)

### Configurar modelo de email na Central de Mensagens

Uma vez criado o novo template de email ou utilizado os dados do template padrão, acesse a Central de Mensagens para configurar o modelo do email. Siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Templates de email > Templates__, ou digite __Templates__ na barra de busca no topo da página.
2. Clique no botão `Novo Template`.
3. Clique sobre __Novo template__ e digite o mesmo nome utilizado no template de email criado ou padrão no CMS (lojas Legado).
4. Selecione __Ativar envio de email?__ e __Usar o remetente padrão__.
5. Preencha o campo __Título do email__ conforme desejado.
6. Preencha o campo __Destinatário (To)__ com {{email}}.
7. Em __Html__, insira as informações do template de email criado ou padrão.
8. Clique em `Salvar`. 

> ℹ️ O campo JSON Data não deve ser preenchido ou seus dados utilizados no template do email. Ele contém apenas informações para permitir uma pré-visualização do formato em que os dados que serão visualizados no email.

![New template - message center](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configura%C3%A7%C3%B5es-do-checkout/configurar-carrinho-abandonado_3.PNG)

### Liberar SPF

A liberação do SPF é fundamental para evitar problemas de entregabilidade do e-mail, e deve ser realizada conforme o artigo [Configuração de SPF](https://help.vtex.com/pt/tutorial/configuracao-de-spf--42t0lkl2VyC6Yewc4wA6wI).

Como boa prática de configuração de DNS de um domínio genérico (não obrigatório), segue o exemplo abaixo:

![Hostnames - SPF](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/configura%C3%A7%C3%B5es-do-checkout/configurar-carrinho-abandonado_4.PNG)

Saiba mais em [Configurar o apontamento de DNS para a VTEX](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280?&utm_source=autocomplete).

### Configurar trigger

Nesta etapa será necessário criar uma [trigger no Master Data](https://help.vtex.com/pt/tutorial/criando-trigger-no-master-data--tutorials_1270). O processo consiste em preencher alguns valores que determinarão o disparo da trigger. Entre eles, será necessário definir alguns filtros:

- __Checkout:__ a trigger será acionada se o checkout não for finalizado e for diferente de nulo, ou seja, caso o cliente não conclua a compra.
- __Carrinho:__ referente aos últimos produtos que o cliente incluiu no carrinho de compras. A trigger será acionada se o valor for diferente de nulo.
- __Último carrinho:__ registro de data e hora em que o carrinho foi criado. A trigger será acionada se o valor for diferente de nulo.
- __Recebe newsletter?:__ garante conformidade com os [direitos de titulares de dados](https://help.vtex.com/pt/tutorial/data-subject-rights--6imchxTx09icupKMbzHVIM), já que somente clientes inscritos na newsletter receberão emails de carrinho abandonado. A inscrição na newsletter da sua loja pode ser gerenciada no momento do checkout ou na seção [Minha Conta](https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#perfil) da sua loja. A trigger será acionada se o valor for verdadeiro.

Para que o disparo da trigger seja realizado, os filtros precisam estar obrigatoriamente preenchidos de acordo com as instruções abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Master Data__.
2. No Master Data, clique em __Aplicações > Configurações avançadas > Estrutura de dados__.
3. Clique na aba __Ativação__.
4. Clique no botão `Adicionar`.
5. Preencha os campos a seguir:

   * **Nome:** insira o nome da trigger.
   * **Entidade de dados:** selecione a entidade Cliente.
   * **Status:** marque a opção __Ativo__.
6. Na aba **Regras**, selecione *O valor de um atributo é alterado**.
7. Em **Campo**, selecione *Última sessão*.
8. Clique em `Adicionar filtro` cinco vezes para visualizar os campos de filtros. Selecione-os e preencha as informações conforme a indicação abaixo:

   - *Checkout - Diferente de - Finalizado - e*
   - *Checkout - Não é nulo - e*
   - *Carrinho - Não é nulo - e*
   - *Último Carrinho - Não é nulo - e*
   - *Recebe newsletter? - Igual a - True*

9. Clique na aba __Agendar__ e selecione se o envio do email deve ocorrer assim que possível, em uma data específica ou em uma data dinâmica.
11. Clique na aba __Se positivo__.
12. Preencha a aba conforme as instruções a seguir:

    * **Ação:** selecione _Enviar um email_.
    * **Destinatário**: para realizar um teste, digite o seu email e clique em `Adicionar email estático`.
    * **Formato do corpo do email**: selecione _HTML_.
    * **Nome do remetente:** insira o nome de sua loja da forma que você deseja que apareça no remetente do email.
    * **Responder para:** preencha com o endereço de email para o qual o cliente poderá enviar uma resposta.
    * __Tipo de conteúdo:__ selecione *Conteúdo da URL*.
    * __Assunto:__ preencha com o assunto do email.
    * __URL:__ insira o endereço de sua loja com as pastas em que o layout do carrinho abandonado foi configurado, com a tag do carrinho `{!carttag_SCORE}` ao final. Exemplo: `nomedaloja.com.br/CEM/Abandoned-Cart?refs={!carttag_SCORE}`.
    * __Adicionar utm_source em todos os links com valor:__ preencha com *CEM*, para facilitar a identificação de compras pelo carrinho abandonado.
    * __Sobrescrever utm_source:__ marque esta opção.

13. Clique em `Salvar`.
14. Crie um carrinho e feche a página para testar a trigger.

  > ⚠️ A sessão de uma página expira em 30 minutos. Somente depois desse período o Master Data inicia a contagem do período agendado para o disparo da trigger de Carrinho Abandonado. Logo, o tempo até o email chegar corresponde ao tempo da sessão (30 minutos) mais o período agendado na trigger.

14. Uma vez que você houver recebido a mensagem do carrinho abandonado em seu email, no campo __Destinatário__ (passo 12), selecione a opção __CL:Email__ e  clique em `Adicionar email dinâmico`.
15. Clique em `Salvar`.

## Configuração para lojas VTEX IO

Para realizar a configuração da funcionalidade carrinho abandonado nas lojas VTEX IO, siga os seguintes passos:

1. Instale o app [Abandoned Cart Service](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service) em sua loja.
2. Configure o modelo de email na [Central de Mensagens](#configurar-modelo-de-email-na-central-de-mensagens). As especificações do JSON estão disponíveis em [Message Center Information](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service#message-center-information).
3. Realize a [liberação do SPF](#liberar-spf).
4. [Configure a trigger](#configurar-trigger) da mesma forma que nas lojas Legado até o passo 10. A partir do passo 11 (aba __Se positivo__), siga as instruções disponíveis em [Trigger configuration information](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service#trigger-configuration-information).

## Dúvidas frequentes

### Minha trigger está configurada corretamente porém os emails não estão chegando para o email de teste. O que verificar?

Para garantir o fluxo correto dos disparos, devemos conferir dois detalhes:

1. A URL do template está funcionando?

 Para garantir que a URL está funcionando, você deve testa-la diretamente no browser. Substitua o valor `{!carttag_SCORE}` pelo ID de algum SKU ativo e disponível no site. Se a URL retornar algum erro, os disparos não acontecerão de maneira correta.

2. O RC (Request Capture) está funcionando?

 Para verificar se o RC está funcionando, atualize a home do site monitorando os requests pela ferramenta de desenvolvedor do browser (no chrome, o F12). Localize o request **rc.js** e verifique se o mesmo está retornando conteúdo. Se o retorno estiver vazio, entre em contato com a VTEX.

### Os dados capturados pelo RC estão atualizando o registro no Master Data?

Para verificar, acesse o site da sua loja e coloque um produto no carrinho. Clique em finalizar compra, insira o e-mail e confirme. Feche o navegador em qualquer parte da finalização de compra (desde o preenchimento de dados pessoais até formas de pagamentos). Aguarde 30 minutos, acesse o módulo de Master Data e veja se o e-mail utilizado entrou como novo registro, com os campos de &#8220;Dados da última navegação&#8221; foram atualizados.

Caso já tenha registro na loja, basta se logar ao acessar o site, incluir um produto no carrinho e fechar um navegador. Aguarde os 30 minutos, acesse o módulo do Master Data e verifique se os campos de **Dados da última navegação** foram atualizados.

### Posso ter mais de um template de abandono?

O cliente pode ter a quantidade de emails que achar necessária, só precisa que sejam informadas todas as URLs e a periodicidade de cada uma.

### Posso dar desconto nesse email? Como fazer isso?

Sim, é possível oferecer um desconto para o cliente que retornar à loja através desse email. Para isso será necessário criar um cupom de desconto que será informado por email ao cliente ou a criação de uma promoção por UTM direto no template.

### Consigo um relatório de quantas compras foram recuperadas através dessa funcionalidade?

Por meio da sua ferramenta de Analytics, você conseguirá monitorar essas recuperações de vendas. 

### Existe algum pré-requisito para configurar essa funcionalidade na minha loja?

Para configurar a funcionalidade de carrinho abandonado é necessário que a sua loja esteja em produção para que os campos do Master Data sejam atualizados. Essa funcionalidade não está disponível para ambientes de desenvolvimento.
