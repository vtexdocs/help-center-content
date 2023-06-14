---
title: 'Integrando com Buscapé (BP+)'
id: tutorials_410
status: DRAFT
createdAt: 2017-04-27T22:06:11.212Z
updatedAt: 2021-08-16T13:39:50.468Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:23.878Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: integrando-com-buscape
legacySlug: integrando-com-buscape
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

### Primeiros passos

Alguns passos são essenciais para iniciarmos as configurações.

1. [Contrate o channel](/pt/tutorial/integrando-com-marketplace/).
2. Configure a [política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/); 
3. Configure a [logística](/pt/tutorial/configurando-logistica-para-marketplace) para essa política comercial;
4. Entre em contato com a Buscapé pelo e-mail thiago.rotondo@buscapecompany.com e obtenha o authtoken - token de acesso à API.

### Como configurar

1. Acesse a aba **Integrações**;
2. Clique na aba **Configurações**;
3. No card do Buscapé, clique no botão **Integrar**;
4. Preencha os campos conforme detalhado abaixo;
5. Clique no botão **Salvar Configuração**. Ele estará ativo somente se todas as configurações estiverem corretas.

<div class="alert alert-warning">
Atenção! Para a política comercial é preciso que pelo menos um boleto ou um cartão de crédito seja configurado. Ou seja, é necessário que sejam configurados os meios de pagamento para o sales channel específico.
</div>

### Campos

1. **Chave de Acesso à API**: Chave fornecida pelo próprio Buscapé (AuthToken) para identificar a Loja no sistema do Parceiro.
2. **Id do Afiliado**: ID do Afiliado que sera criado no OMS. Para o Buscapé, recomendamos preencher com `BSC`.
3. **Política Comercial**: ID da Política Comercial que será utilizada para o parceiro Buscapé.
4. **CNPJ:** preencha este campo com o CNPJ da sua loja. Caso este campo não esteja preenchido, não será possível faturar os pedidos e atualizar seus status no Buscapé.
5. **Título do anúncio:** Neste campo, você deve escolher qual o formato do nome que seu produto terá no Buscapé.
6. **Enviar preço de boleto:**  Se o seu produto tem promoção em função de pagamento por boleto, o preço promocional será enviado.
7. **Domínio enviado no link do produto**: Campo utilizado para montar o link do produto que será exibido no site do Buscapé. (exemplo: http://www.minhaloja.com.br)
8. **Taxa de Divergência de Preço**: Taxa de aceitação da divergência de valor no pedido integrado. [Qualquer pedido que possua uma divergência entre o preço de venda do marketplace e o preço que seria calculado pelo seller, será comparado com esse valor](http://help.vtex.com/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado/ "Qualquer pedido que possua uma divergência entre o preço de venda do marketplace e o preço que seria calculado pelo seller, será comparado com esse valor"). Se a divergência (em porcentagem) for menor que o valor definido nesse campo, o pedido será integrado. Caso contrário, o pedido será negado e o lojista notificado.
9. **E-mails para notificações**: Caso um pedido sofra algum erro no ato de integrar na VTEX, será enviado um email com sua possível causa para o(s) email(s) aqui cadastrado(s).

Após as configurações, a integração envia automaticamente todos os produtos associados à política comercial determinada para o Buscapé.

### URLs

A integração com o Buscapé requer as seguintes URLs para o seu funcionamento:

- URL de Callback (para inserir o pedido na VTEX)

```http://{accountName}.vtexcommercestable.com.br/api/buscapeintegration/event/order```

- URL de Estoque (consultar estoque na VTEX)

```http://{accountName}.vtexcommercestable.com.br/api/buscapeintegration/stockkeepingunit/availability```







