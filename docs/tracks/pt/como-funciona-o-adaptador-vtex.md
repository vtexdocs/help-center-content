---
title: 'Como funciona o Adaptador VTEX?'
id: 5hXbbNSbB115TRtmOeOC2Z
status: PUBLISHED
createdAt: 2021-10-05T21:31:25.859Z
updatedAt: 2023-02-27T17:45:10.553Z
publishedAt: 2023-02-27T17:45:10.553Z
firstPublishedAt: 2021-10-06T16:13:28.202Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: como-funciona-o-adaptador-vtex
trackId: 132YFN170Jvs6ZUBGh8w2e
trackSlugPT: adaptador-vtex
---

O Adaptador VTEX foi criado para clientes que já possuem integração do ERP com a plataforma de ecommerce CIASHOP. Utilizando o adaptador, o ERP deixará de enviar as informações para a CIASHOP e passará a enviá-las para a VTEX, mantendo a compatibilidade das integrações construídas.

<div class="alert alert-info">
  <p>Este guia se aplica apenas a lojas que já utilizam a integração entre um ERP e a CIASHOP. Nos demais casos, é necessário seguir o guia para desenvolvedores <a href="https://developers.vtex.com/docs/guides/erp-integration-guide">Back office integration guide (ERP/PIM/WMS)</a> para realizar a integração com um ERP.</p>
</div>

![imagem-adaptador-1](//images.contentful.com/alneenqid6w5/3YzpvrWy5X48siMcATs5Ba/094e532302f3f96a66d21ecee0d96a72/image.png)

Para facilitar o entendimento, organizamos o documento em tópicos:

- **Login e senha:** mostra como conseguir os acessos ao Adaptador e efetuar acesso ao ambiente para conseguir configurá-lo e também acompanhar a troca de mensagens entre o ERP e a plataforma e-commerce da VTEX.
- **Configurar Ambiente:** descreve como você efetua a configuração do ambiente do adaptador para que ele possa se comunicar com a plataforma de ecommerce VTEX.
- **ERPs:** informações sobre a configuração do ambiente ERP para que este funcione com o adapter.
- **Monitor de Integrações:** descreve como é possível acompanhar o fluxo das mensagens trocadas entre ERPs e a plataforma de ecommerce VTEX.

## Sobre o escopo da integração

Por meio da tabela abaixo, você pode verificar o que a integração do adaptador contempla:

![image-adaptador-2](//images.ctfassets.net/alneenqid6w5/4TsEw3tXkfK0IEAZlcRzwR/b9dc7e117331beacf34577442c69da0c/Group_1_9_.png)

<div class="alert alert-warning">
  <p>Para integração via WEBSERVICE, os pedidos na VTEX serão coletados quando estiverem com pagamento aprovado, no status <b>Pronto-para-manuseio</b>.</p>
</div>
