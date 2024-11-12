---
title: 'Página de detalhes da localidade (Beta)'
id: 3se4QBRYsNCwC8Wo56J6zG
status: ARCHIVED
createdAt: 2023-05-09T16:24:38.315Z
updatedAt: 2023-11-10T14:44:21.843Z
publishedAt: 
firstPublishedAt: 2023-05-09T20:47:55.824Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: locations-details-page-beta
locale: pt
legacySlug: pagina-de-detalhes-da-localidade
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href= "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.

No [módulo Localidades](https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy) do seu Admin VTEX, em **Envio > Localidades**, ao clicar sobre uma localidade você é direcionado para sua página de detalhes, como a imagem a seguir:

![pagina_detalhes_image_1_PT](https://images.ctfassets.net/alneenqid6w5/6fehx8bwcHLXGXZFALiGSR/4fe303ef087c40b1eb7147ac39a949de/pagina_detalhes_image_1_PT.png)

No topo da página, existe o diagrama **Status da capacidade operacional**, que apresenta em tempo real a porcentagem da capacidade da localidade que já foi consumida. O diagrama apresenta os seguintes períodos:

* Hoje
* Amanhã
* Data dos próximos dois dias

Se você [criou a localidade](https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy#criar-localidade) com a regra _Continuar recebendo pedidos consumindo a capacidade dos próximos dias_, o diagrama vai apresentar a porcentagem da capacidade operacional dos dias seguintes que já foi consumida a partir de pedidos de dias anteriores.

Você acompanha em tempo real quanto da capacidade de cada dia foi utilizada e pode tomar [decisões estratégicas](https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy#estrategias-de-negocio) sobre:

* [Ativar e pausar localidade](https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy#ativar-e-pausar-localidade)
* [Editar localidade](https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy#editar-localidade)
* [Editar capacidade operacional](https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy#editar-capacidade-operacional)

Também é possível [aumentar a capacidade operacional](#aumentar-capacidade-operacional) da localidade pela página de detalhes.

>ℹ️ Para ver todas as ações que você pode realizar com localidades, veja o artigo [Módulo Localidades](https://help.vtex.com/pt/tutorial/modulo-localidades--2thSYLMAS8KAd8V4XuBLSy).

## Ver histórico

Nos detalhes da localidade, é possível acompanhar o registro de todas as ações executadas pelo sistema ou por um usuário. Para isso, no topo da página, clique em `Ver histórico`:

![pagina_detalhes_image_2_PT](//images.ctfassets.net/alneenqid6w5/31OXQKO48e7bRiNn5HptZF/610023d778dd4ae1442321f20365379c/pagina_detalhes_image_2_PT.png)

Você será redirecionado para o **Histórico da capacidade operacional** da localidade, conforme a imagem abaixo:

![pagina_detalhes_image_3_PT](//images.ctfassets.net/alneenqid6w5/6r91diwK9rP2LVMz1qOweq/007aa6776d06df12dd56a37269e53389/pagina_detalhes_image_3_PT.png)

Nesta tela, você pode:

* **Filtrar eventos:** clicando em `Filtrar por data` e selecionando o período desejado.
* **Ordenar eventos por data:** clicando sobre o nome da coluna _Data_. Os registros podem ser ordenados a partir dos mais recentes ou dos mais antigos.
* **Fechar o histórico:** clicando no ícone fechar <i class="fas fa-times"></i>.

## Aumentar capacidade operacional

Quando uma localidade atinge <i class="fas fa-exclamation-triangle"></i> 100% da sua capacidade, a página de detalhes oferece uma outra opção de como aumentar essa capacidade, clicando em `Aumentar capacidade`, conforme imagem abaixo:

![pagina_detalhes_image_4_PT](//images.ctfassets.net/alneenqid6w5/3AhCW3Psea1eTlcGMZ51im/eee4c4f097cd862b465cdf5fcf9b2e00/pagina_detalhes_image_4_PT.png)

Feito isso, será apresentado o modal **Aumentar capacidade**, como a imagem a seguir:

![pagina_detalhes_image_5_PT](//images.ctfassets.net/alneenqid6w5/625fjXiFlU5wtL9ySZnVT4/c397d8c8e496642061cbf880d7d1736f/pagina_detalhes_image_5_PT.png)

Você pode configurar qual será o valor da nova capacidade e definir o período para o qual deseja aplicar a mudança. As opções são as seguintes:

* Apenas para hoje
* Para todos as _quintas-feiras_ (se o dia atual for quinta-feira)
* Para todos os dias

Se você quiser realizar alterações, ao final clique em `Salvar`. Para sair do modal sem aumentar a capacidade, clique no ícone fechar <i class="fas fa-times"></i>.
