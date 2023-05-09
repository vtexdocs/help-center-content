---
title: Página de detalhes da localidade
id: 3se4QBRYsNCwC8Wo56J6zG
createdAt: 2023-05-09T16:24:38.315Z
updatedAt: 2023-05-09T16:41:02.065Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: pagina-de-detalhes-da-localidade
legacySlug: pagina-de-detalhes-da-localidade
subcategory: 13sVE3TApOK1C8jMVLTJRh
---

<div class="alert alert-info">
Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href= "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.
</div>

No [módulo Localidades](XXXXX) do seu Admin VTEX, em **Envio > Localidades**, ao clicar sobre uma localidade você é direcionado para sua página de detalhes, como a imagem a seguir:

IMAGEM 1

No topo da página, existe o diagrama **Status da capacidade operacional**, que apresenta em tempo real a porcentagem da capacidade da localidade que já foi consumida. O diagrama apresenta os seguintes períodos:

* Hoje
* Amanhã
* Data dos próximos dois dias

Se você [criou a localidade](XXXXXXXX) com a regra _Continuar recebendo pedidos consumindo a capacidade dos próximos dias_, o diagrama vai apresentar a porcentagem da capacidade operacional dos dias seguintes que já foi consumida a partir de pedidos de dias anteriores.

Você acompanha em tempo real quanto da capacidade de cada dia foi utilizada e pode tomar [decisões estratégicas](XXXXXXX) sobre:

* [Ativar/pausar localidade](XXXXX)
* [Editar localidade](XXXXX)
* [Editar capacidade operacional](XXXXX)

Também é possível [aumentar a capacidade operacional](#aumentar-capacidade-operacional) da localidade pela página de detalhes.

## Ver histórico

Nos detalhes da localidade, é possível acompanhar o registro de todas as ações executadas pelo sistema ou por um usuário. Para isso, no topo da página, clique em `Ver histórico`:

IMAGEM 2

Você será redirecionado para o **Histórico da capacidade operacional** da localidade, conforme a imagem abaixo:

IMAGEM 3

Nesta tela, você pode:

* **Filtrar eventos:** clicando em `Filtrar por data` e selecionando o período desejado.
* **Ordenar eventos por data:** clicando sobre o nome da coluna _Data_. Os registros podem ser ordenados a partir dos mais recentes ou dos mais antigos.
* **Fechar o histórico:** clicando no ícone fechar <i class="fas fa-times"></i>.

## Aumentar capacidade operacional

Quando uma localidade atinge <i class="fas fa-exclamation-triangle"></i> 100% da sua capacidade, a página de detalhes oferece uma outra opção de como aumentar essa capacidade, clicando em `Aumentar capacidade`, conforme imagem abaixo:

IMAGEM 4

Feito isso, será apresentado o modal **Aumentar capacidade**, como a imagem a seguir:

IMAGEM 5

Você pode configurar qual será o valor da nova capacidade e definir o período para o qual deseja aplicar a mudança. As opções são as seguintes:

* Apenas para hoje
* Para todos as _quintas-feiras_ (se o dia atual for quinta-feira)
* Para todos os dias

Se você quiser realizar alterações, ao final clique em `Salvar`. Para sair do modal sem aumentar a capacidade, clique no ícone fechar <i class="fas fa-times"></i>.
