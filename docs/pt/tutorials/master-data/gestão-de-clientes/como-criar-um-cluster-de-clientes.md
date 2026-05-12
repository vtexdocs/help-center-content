---
title: 'Criar cluster de clientes'
createdAt: 2019-01-24T20:45:58.065Z
updatedAt: 2026-04-09T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: how-can-i-create-cluster-of-customers
locale: pt
---

Um cluster de clientes é uma forma de segmentar clientes em grupos. Isso pode ser feito criando um campo booleano no **Master Data** (ex.: `Revendedores`, `VIP`, `Funcionários`). Clientes marcados como `true` nesse campo pertencem ao cluster, enquanto os demais não. Uma vez criado, você pode usar clusters para direcionar segmentos específicos de clientes com promoções exclusivas, campanhas personalizadas ou experiências diferenciadas.

> ℹ️ Este artigo aborda o Master Data v1. Saiba mais sobre as [versões do Master Data](/pt/docs/tutorials/master-data#versions-available) e o [Master Data v2](https://developers.vtex.com/docs/guides/master-data-v2-basics).

## Criando o campo de cluster de clientes

Siga os passos abaixo para criar um cluster de clientes:

1. No Admin VTEX, acesse **Master Data**.
2. Crie um novo campo booleano na entidade de dados de clientes (`CL`) com o nome do cluster desejado (ex.: `Revendedores`, `VIP`, `Atacado`). Veja [Criar um campo no Master Data](/pt/docs/tutorials/como-crio-um-campo-no-master-data) para mais detalhes.
3. Defina o campo como **pesquisável** e **filtrável**. Isso é necessário para que o cluster funcione corretamente com promoções.
4. Adicione o campo ao formulário de clientes para que fique visível ao visualizar os dados do cliente. Veja [Criar um campo no Master Data](/pt/docs/tutorials/como-crio-um-campo-no-master-data) para mais detalhes.

## Populando o cluster

Após criar o campo de cluster, você precisa defini-lo como `true` para cada cliente que deseja incluir no cluster. Você pode fazer isso usando um dos seguintes métodos:

- **Importação por planilha:** Use o [recurso de importação do Master Data v1](/pt/docs/tutorials/importando-dados-de-clientes) para atribuir clientes em massa.
- **API:** Atualize os registros de clientes programaticamente por meio da [API do Master Data](https://developers.vtex.com/docs/api-reference/masterdata-api).
- **Entrada manual:** Edite registros individuais de clientes no formulário de clientes do CRM.

## Saiba mais

- [Criar promoção para um cluster de clientes](/pt/docs/tutorials/criando-promocao-para-um-cluster-de-clientes)
