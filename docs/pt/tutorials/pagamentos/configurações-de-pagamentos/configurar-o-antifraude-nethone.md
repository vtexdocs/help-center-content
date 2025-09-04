---
title: 'Configurar o antifraude Nethone'
id: 7wyoUovwCkoT998uXkOis8
status: PUBLISHED
createdAt: 2021-06-16T17:00:06.641Z
updatedAt: 2025-09-04T20:09:26.219Z
publishedAt: 2025-09-04T20:09:26.219Z
firstPublishedAt: 2021-06-16T17:19:21.268Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: setting-up-nethone-antifraud
legacySlug: configurar-o-antifraude-nethone
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

[Nethone](https://nethone.com/pt) é uma solução antifraude que através de inteligência artificial e machine learning identifica aspectos comportamentais específicos do usuário e minimiza os riscos e chances de fraude nas transações da sua loja.

> ⚠️ A integração da Nethone, na VTEX, é feita via **Application Key (App Key)** e **Application Token (App Token)**. Você encontra essas informações no pacote de plugins que a Nethone enviará após a assinatura do contrato. Em caso de dúvidas, entre em contato com o suporte da Nethone.

Para configurar a Nethone, você precisará:

- [Configurar o antifraude Nethone](#configurar-o-antifraude-nethone)
- [Associar a Nethone a uma condição de pagamento](#associar-a-nethone-a-uma-condicao-de-pagamento)
- [Habilitar o Google Tag Manager no checkout](#habilitar-o-google-tag-manager-no-checkout)
- [Configurar o Google Tag Manager](#configurar-o-google-tag-manager)
- [Criar acionador de tag](#criar-acionador-de-tag)

Assim que todas as configurações forem realizadas, cada tentativa de compra será analisada pelo antifraude e exibida no seu painel da Nethone.

## Configurar o antifraude Nethone

1. Acesse o __Admin__ VTEX.
2. Acesse o módulo __Pagamentos__.
3. Clique em __Configurações__.
4. Em __Afiliações de gateway__, clique no botão verde “__+__”.
5. Na seção __Antifraudes__, selecione a opção __Nethone__.
6. Em __Nome da afiliação__, altere para apenas __Nethone__.
7. Nos campos __Application Key__ e __Application Token__, insira os dados que você recebeu no pacote de plugins.
8. Clique em __Salvar__.

## Associar a Nethone a uma condição de pagamento

Para a Nethone realizar a análise antifraude, é preciso associá-la às condições de pagamento já existentes, ou então, criar novas condições. Para isso, siga as instruções abaixo:

1. Acesse o __Admin__ VTEX.
2. Acesse o módulo __Pagamentos__.
3. Clique em __Configurações__.
4. Em __Condições de pagamento__, clique na condição desejada, ou siga o tutorial [Configurar uma condição de pagamento](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3?&utm_source=autocomplete) para criar uma nova condição.
5. Certifique-se de que a condição de pagamento esteja __Ativada__.
6. Após selecionar ou criar uma nova condição, habilite a opção __Usar Antifraude__.
7. Selecione a opção __Nethone__.
8. Clique em __Salvar__.

## Habilitar o Google Tag Manager no checkout

A próxima etapa de configuração da Nethone é feita via Javascript, por meio da integração com o Google Tag Manager. 

1. [Clique aqui](http://tagmanager.google.com) e acesse o Google Tag Manager.
2. Faça o login na sua conta. Se você ainda não tiver uma conta, basta criar.
3. No painel inicial, você visualiza um número que começa com GTM-XXXX. Copie esse número.
4. Acesse seu __Admin__, na VTEX.
5. Acesse o módulo __Configurações da loja__.
6. Clique na opção __Checkout__.
7. Em __Default__, clique no ícone de engrenagem.
8. No menu superior, selecione a opção __Checkout__.
9. Em __Google Tag Manager__, insira o número identificador que você copiou. 
10. Clique em __Salvar__.

## Configurar o Google Tag Manager

> ⚠️ As configurações documentadas a seguir são realizadas em um sistema externo à VTEX, podendo ser descontinuadas sem aviso prévio.

Com o número de identificação da sua conta instalado no checkout, realize as configurações abaixo para acompanhar as tentativas de compra que acontecerem em sua loja. 

1. [Clique aqui](http://tagmanager.google.com) e faça o login no Google Tag Manager.
2. No painel inicial, clique em __Variáveis__.
3. Em __Variáveis definidas pelo usuário__, clique em __Nova__.
4. Em __Configuração da variável__, clique no ícone de lápis.
5. Na seção __Utilitários__, selecione a opção __Permanente__.
6. Nomeie a variável como *profilerUrl*.
7. No campo __Valor__, insira o link fornecido pela Nethone, no pacote de plugins que você recebeu.
8. Clique em __Salvar__.

## Criar acionador de tag

Com a variável criada, siga as etapas abaixo para definir os acionadores:

1. Ainda no painel do Google Tag Manager, acesse __Acionadores__.
2. Clique em __Novo__.
3. Nomeie o acionador como *Profiler Trigger*.
4. Em __Configuração do acionador__, clique no ícone de lápis.
5. Na seção __Outros__, clique em __Evento personalizado__.
6. Em __Nome do evento__, insira a seguinte informação incluindo os parênteses: (email|profile|shipping|payment).
7. Habilite a opção __Usar correspondência de regex__.
8. Em __Este acionador é disparado em__, selecione __Alguns eventos personalizados__.
9. Selecione as opções - __Page Path - Corresponde a RegEx - Checkout__.
10. Clique em __Salvar__.
11. Volte para o painel inicial e clique em __Tags__. 
12. Clique em __Nova__.
13. Em __Configuração da Tag__, clique sob o sinal de lápis.
14. Na seção __Personalizar__, selecione a opção __HTML Personalizado__.
15. Cole o seguinte código no campo HTML, e garanta que no campo __src="your profiling link"__ o valor inserido seja o mesmo fornecido pela Nethone no pacote de plugins que você recebeu.

    ```
    <script type="text/javascript" id="nthScript" crossorigin="use-credentials"
    src="yourprofilinglink" async></script>
    <script>
    (function() {
    function uuidv4() {
    return
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r &
    0x3 | 0x8);
    return v.toString(16);
    });
    }
    var attRef = uuidv4();
    window.vtex.deviceFingerprint = attRef;
    var options = {
    attemptReference: attRef,
    sensitiveFields: []
    };
    if (window.dftp) {
    dftp.init(options);
    } else {
    var el = document.getElementById("nthScript");
    el.addEventListener("load", function() {
    dftp.init(options);
    });
    }
    })()
    </script>
    ```
16. Habilite a opção __Suporte para document.write__.
17. Em __Configurações avançadas > Opções de disparo da Tag__ selecione __Uma vez por página__.
18. No menu __Acionamento__, clique no sinal de lápis.
19. Selecione a opção *Profiler Trigger* como acionador de disparo e clique em __Salvar__. 
20. Na página exibida, clique em __Enviar__.
21. Em __Nome da versão__, insira *Nethone Profiler* e clique em __Publicar__.

Feito isso, o antifraude Nethone terá sido instalado corretamente e estará pronto para processar suas transações.
