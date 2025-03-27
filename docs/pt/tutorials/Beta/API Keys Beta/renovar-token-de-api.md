---
title: 'Renovar token de API (Beta)'
id: 7r4AzptYjXErGHadg9LnJ3
status: PUBLISHED
createdAt: 2024-09-30T18:40:04.374Z
updatedAt: 2024-11-05T13:37:04.091Z
publishedAt: 2024-11-05T13:37:04.091Z
firstPublishedAt: 2024-10-08T19:47:39.925Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: renewing-api-tokens
locale: pt
legacySlug: renovar-token-de-api-beta
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

>ℹ️ Esta funcionalidade está na fase Beta fechada, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br).

Quanto mais antigo o token, maior o risco de exposição e de potenciais danos à operação. O procedimento de renovação do token garante a continuidade da segurança da sua loja e minimiza possíveis vulnerabilidades.

Renove o token de API com antecedência, ou seja, antes da [duração](https://help.vtex.com/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ) expirar, para manter o acesso contínuo aos recursos e preservar a segurança.

Siga o passo a passo abaixo para renovar o token de uma chave de API:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e depois em <i class="fas fa-sync"></i> `Renovar token`.  
4. Clique em `Copiar` para copiar o token da API para a área de transferência. Esse segredo será exibido apenas uma vez. Salve-o em um local seguro.  
5. Na seção **Como excluir token antigo**, marque uma das opções a seguir:

   * **Depois:** será necessário [excluir manualmente](#excluir-token-antigo) o token antigo assim que o novo token estiver em uso nas integrações. Os dois tokens estarão válidos e funcionais até a exclusão do antigo. Na listagem da aba **Geradas**, na coluna **Duração do token**, vão aparecer os prazos de duração dos dois tokens, até o antigo ser excluído.

   * **Agora:** o token antigo será excluído do sistema ao finalizar o processo de renovação e apenas o novo token será válido.

   >ℹ️ Caso a página seja fechada antes de selecionar uma forma de exclusão neste passo, a opção **Depois** será aplicada, ou seja, você precisará excluir o token antigo manualmente.

6. Clique em `Finalizar`.

## Excluir token antigo

>ℹ️ Certifique-se de que o token antigo não está mais em uso por nenhuma integração antes de excluí-lo. Este procedimento não pode ser desfeito.

Siga as instruções abaixo para excluir manualmente um token antigo, após a renovação. Este procedimento é possível apenas quando a opção de excluir o token antigo **Depois** for selecionada ao renovar um token.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e depois em <i class="far fa-trash-alt"></i> `Excluir token antigo`.  
4. Para confirmar, clique em `Excluir`.

## Desfazer renovação de token

>ℹ️ Este procedimento é possível apenas enquanto o token antigo não tiver sido [excluído](#excluir-token-antigo). Se o token antigo tiver sido excluído, será necessário renovar o token novamente ou [excluir a chave de API](https://help.vtex.com/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc#excluir-chave).

Se você renovou o token por engano ou esqueceu de copiar o novo token gerado, siga os passos abaixo para desfazer a renovação.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e depois em <i class="fas fa-undo"></i> `Desfazer renovação`.  
4. Para confirmar, clique em `Desfazer`.

## Saiba mais

* [Chaves de API (Beta)](https://help.vtex.com/pt/tutorial/chaves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Configurar a duração de chaves de API (Beta)](https://help.vtex.com/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)
* [Chaves geradas (Beta)](https://help.vtex.com/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)
