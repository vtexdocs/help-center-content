---
title: Integrar com a Via Varejo/CNova
id: frequentlyAskedQuestions_6673
status: DRAFT
createdAt: 2019-01-24T20:46:02.807Z
updatedAt: 2020-03-06T13:56:49.627Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:15:37.714Z
contentType: tutorial
productTeam: Channels
author: authors_4
slug: integrando-com-viavarejo-cnova
legacySlug: integrando-com-viavarejo-cnova
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Este artigo tem por objetivo orientar o cadastro da integração com a Via Varejo/CNova.

## Cadastro da integração

1.	No menu do Admin, clique em __Integrações__.
2.	Acesse o item __Configurações__.
3.	Busque pela caixa da __Via Varejo__ e clique no botão __Integrar__.
4.	Preencha os campos exibidos na tela. Abaixo, vamos detalhar como preencher cada um deles.
5.	Com tudo preenchido corretamente, clique no botão __Salvar Configuração__.

### Detalhamento dos campos

&bull; __Id do afiliado*__: esse campo deve ser preenchido com um ID de [afiliado](/pt/faq/o-que-e-afiliado) que ainda não exista no cadastro de afiliados do OMS. O ID aceita apenas três dígitos (todos devem ser consoantes). Sugestões: `VVJ`, `CNV` ou `NVP`. Caso você tenha configurações de [integração para multidomínios](/pt/tutorial/como-criar-multiloja-multidominio), dê uma atenção especial ao ID do afiliado, porque esse campo deve ter um valor diferente para cada domínio.

&bull; __Política comercial*__: ID da política comercial que será utilizada para a integração com a Via Varejo. São os produtos dessa política comercial que serão enviados para o marketplace.

&bull; __Chave de acesso__: não deve ser preenchida, porque será gerada automaticamente na etapa de autorização.

&bull; __CNPJ*__: preencha esse campo com o CNPJ da sua loja. Essa informação é obrigatória para que seja possível faturar os pedidos ([saiba mais aqui](/pt/tutorial/como-funciona-a-integracao-da-cnova-via-varejo)).

&bull; __Título do produto*__: nesse campo, você deve escolher qual o formato do nome que seu produto terá na Via Varejo. 

&bull; __Nome do campo de Especificação de Produto que contém sua Descrição__: caso deseje usar uma descrição diferente da que já está cadastrada no catálogo da VTEX, você tem a opção de [criar um campo de produto](/pt/tutorial/criando-um-campo-de-produto) de tipo _Texto Grande_. Preenchendo esse campo, a integração vai priorizar o envio da descrição contida nele (ao invés da descrição original do produto).

<div class="alert alert-danger">
<strong>OBS:</strong> atente-se às configurações na criação desse novo campo para que as novas informações criadas <strong>não</strong> sejam exibidas no seu site.
</div>

&bull; __Taxa de Divergência de Preço*:__ é a taxa de aceitação da diferença de valor de um pedido. Qualquer pedido que possua uma diferença entre o preço de venda no marketplace e o preço determinado pelo seller [será comparado com esse valor](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado). Se a divergência, em percentual, for menor que o valor definido nesse campo, o pedido será integrado normalmente. Caso contrário, o pedido não será integrado e você poderá visualizá-lo na [aba de pedidos (dentro da seção de integrações no Admin)](/pt/tutorial/verificando-integracao-no-bridge).

&bull; __E-mails Para Notificação de Pedidos Não Integrados*:__ preencha com um e-mail. Lembre-se de clicar no botão `+` para inseri-lo.

*Campos marcados com `*` são obrigatórios*.

Essa é a _primeira etapa_ da integração. No próximo passo, vamos realizar o cadastro de uma API fundamental para o funcionamento dela.


## Cadastro de APIs
 
Para funcionar, a integração com a Via Varejo exige que a API de frete seja cadastrada no painel do marketplace.

### API de Frete

A implementação dessa API permite que a Via Varejo consulte, em tempo real, o preço e prazo de um frete para seus produtos (de acordo com o CEP). Note que o termo `{AccountName}` deve ser substituído pelo nome do ambiente de sua loja.

`http://novaintegration.vtexcommercestable.com.br/api/marketplace-nv/pub/{{AccountName}}/freight?skuId={{skuId}},{{quantidade}}&zipcode={{zipcode}}`

Esse é o _segundo passo_ da configuração da integração. Para concluir o processo, é necessário autorizar a integração da Via Varejo no painel da VTEX.


## Autorizar integração da Via Varejo no painel da VTEX

Depois de realizar todas as etapas anteriores, siga os passos abaixo para autorizar sua integração com a Via Varejo:

1. No menu do Admin, clique em __Integrações__.
2. Acesse o item __Configurações__.
3. No card da Via Varejo, clique em __Autorização__.
4. Clique em __Desejo me autenticar__.
5. Você será redirecionado para o ambiente da Via Varejo.
6. Ainda no ambiente da Via Varejo, __faça login no painel de desenvolvedores__.
7. Você será redirecionado novamente para a aba de __Integrações__ da VTEX.

Depois de cumprir mais essa etapa, sua loja já está completamente integrada com a Via Varejo.
