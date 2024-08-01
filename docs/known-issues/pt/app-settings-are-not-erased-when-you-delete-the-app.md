---
title: 'As configurações do aplicativo não são apagadas quando você exclui o aplicativo'
id: 7KXfKLgbc3UDeDSsCgT0Sk
status: PUBLISHED
createdAt: 2024-07-15T22:29:24.058Z
updatedAt: 2024-07-15T22:29:24.867Z
publishedAt: 2024-07-15T22:29:24.867Z
firstPublishedAt: 2024-07-15T22:29:24.867Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slug: as-configuracoes-do-aplicativo-nao-sao-apagadas-quando-voce-exclui-o-aplicativo
locale: pt
kiStatus: Backlog
internalReference: 1065954
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando você instala um aplicativo da App Store e acessa suas configurações, você tem a opção "**Uninstall**", que exclui o aplicativo do espaço de trabalho, mas mantém suas configurações, e a opção "**Delete**", que exclui o aplicativo e suas configurações.
No entanto, quando você seleciona a opção "**Delete**" e instala o aplicativo novamente, percebe que a configuração não foi excluída.

## Simulação



- Vá para a "App Store";
- Selecione o aplicativo;
- Clique em "Get app" (Obter aplicativo);
- Clique em "Install app" (Instalar aplicativo);
- Siga as instruções para instalar o aplicativo;
- Preencha as configurações (se aplicável) e "Salvar";
- Clique em "Delete" (Excluir). A seguinte mensagem será exibida:
 ![](https://vtexhelp.zendesk.com/attachments/token/kM5EhsfVaHLlISckht8rRYumU/?name=image.png)

> _**Do you want to remove the app X?**_
>
> _Tem certeza de que deseja excluir esse aplicativo? Todas as configurações salvas em todos os espaços de trabalho serão perdidas e o aplicativo será removido da sua lista de aplicativos.

- Clique em "Excluir" novamente para confirmar. O aplicativo será excluído;
- Vá para as primeiras etapas e instale o mesmo aplicativo;
- Verifique suas configurações e veja se as informações não foram excluídas como esperado (as informações preenchidas anteriormente aparecerão lá)

## Workaround


Não há nenhuma solução alternativa disponível. Mas você pode colocar informações fictícias.






