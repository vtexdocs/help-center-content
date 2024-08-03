---
title: 'Custo final do envio'
id: 5bwhIO108VA5Y2YOpef9lV
status: PUBLISHED
createdAt: 2021-08-25T12:30:32.699Z
updatedAt: 2021-08-25T14:39:54.346Z
publishedAt: 2021-08-25T14:39:54.346Z
firstPublishedAt: 2021-08-25T13:08:08.704Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: custo-final-do-envio
locale: pt
legacySlug: custo-final-do-envio
subcategory: 7uJcyu0VawEm8ggqKu404u
---

O custo final do envio é o preço total que será cobrado do cliente final para a entrega do pedido. Este valor é a soma da tarifa de envio e dos custos de estoque com a doca. 

É possível entender como cada tarifa é calculada:

* **[Tarifa de envio](https://help.vtex.com/pt/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM):** é a tarifa cadastrada com a política de envio, sendo a tarifa da transportadora ou um ponto de retirada. É a tarifa de envio, sem considerar os custos de doca e estoque. Essa tarifa considera:
    * Um custo fixo de frete;
    * [Adicionais de frete](https://help.vtex.com/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV): adicional de peso, adicional por preço, adicional de seguro e adicional de frete. 

    Então, a tarifa de envio é calculada com a soma do custo fixo mais os adicionais de frete cadastrados. 

* **Tarifa da doca:** ao vincular um estoque a uma doca, é possível adicionar uma tarifa para esta integração entre doca e estoque:
    * Adicione a tarifa ao `adicionar as docas` ao estoque no campo de cadastro de estoque.

Sendo assim, de modo geral, o custo final de envio pode ser calculado desta forma:

![Custo-final-envio-PT](https://images.contentful.com/alneenqid6w5/5qeoN5AQPvoWyOPcNW3J6q/dc18eacbd9078557282f53cecb2ae4cf/Custo-final-envio-PT.svg)

<div class="alert alert-danger">
Se o <b>adicional por preço</b> for menor que o <b>adicional de seguro</b>, a tarifa que é considerada é a do adicional de seguro e o adicional por preço é desconsiderado no cálculo da tarifa final.<p>
A escolha da transportadora para o envio dos itens considera apenas o preço da Tarifa de envio, desconsiderando os custos da doca e estoque (caso existam). Para simular o cenário de entrega para o cliente, use o <a href="https://help.vtex.com/pt/tutorial/simulacao-de-frete--tutorials_144">Simulador de envio</a>.
</div>

