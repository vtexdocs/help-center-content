---
title: 'Configurar boleto registrado Santander'
id: 67siNqkC7mcgy2GWUYimaa
status: DRAFT
createdAt: 2017-12-04T19:04:02.215Z
updatedAt: 2024-03-18T18:03:25.298Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:15:35.225Z
contentType: tutorial
productTeam: Financial
author: 56yU9Wz6mLwmzo82TjgAHy
slug: configurar-boleto-registrado-santander
locale: pt
legacySlug: configurar-boleto-registrado-santander
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">Essa integração de pagamento não pode ser mais configurada na plataforma devido ao <a href="https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14">processo de remoção de provedores legados</a> e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.</div>

O boleto bancário é uma das formas de pagamento mais populares no Brasil. Apesar de não apresentar a mesma praticidade dos cartões de crédito, muitos compradores a consideram uma opção mais segura e acessível para adquirir bens de valor elevado. Dessa maneira, disponibilizar o boleto bancário é uma boa opção para aumentar as vendas no e-commerce.

Para utilizar o Boleto Registrado Santander na sua loja, siga as instruções abaixo.

<div class="alert alert-warning">
A configuração na VTEX só é feita após uma série de etapas exigidas pelo Santander, incluindo a Contratação do serviço e Emissão do certificado digital.<br/><br/>Caso precise de apoio técnico nessas etapas, procure uma agência parceira VTEX ou seu gerente de relacionamento do Santander.</div>

## Contratação do serviço
Antes de tudo, é preciso [abrir uma Conta Empresarial](https://www.santander.com.br/conta-pessoa-juridica "abrir uma conta empresarial") no Santander e contratar o serviço [Cobrança Registrada Online XML](https://www.santander.com.br/servicos-financeiros/solucoes-de-recebimento/cobrancas "Cobrança Registrada Online XML"), informando que utilizará a integração homologada da VTEX. Guarde os dados fornecidos pelo banco, eles serão necessários para a etapa de configuração.

## Emissão do certificado digital
Para possibilitar um canal de comunicação segura entre sua loja VTEX e o sistema de emissão de boletos do Santander, será necessário o uso de um certificado digital. Na contratação do serviço, o banco pode fornecer lista das certificadoras sugeridas para sua emissão. 

Após escolher sua certificadora, você deve entrar em contato solicitando um Certificado tipo Client de 2048 bits. Recomendamos que a validade seja de 10 anos, para reduzir a necessidade de atualização das configurações na VTEX. 

<div class="alert alert-info">
Na maioria dos casos, o certificado usado para emissão de nota fiscal pode ser reaproveitado. Consulte seu gerente de relacionamento do Santander em caso de dúvidas.
</div>

Recomendamos o apoio de uma equipe técnica para preparação dos arquivos necessários para emissão e instalação do certificado digital adquirido. Caso seja seu primeiro contato com esses processos, recomendamos a familiarização com os conceitos relacionados à Infraestrutura de Chaves Públicas (ICP) vistos neste site: [Public Key Infrastructure (PKI) Overview](https://www.sslshopper.com/public-key-infrastructure-pki-overview.html "Public Key Infrastructure (PKI) Overview").

### Preparação de arquivos
Para iniciar o processo de emissão do seu certificado digital, a certificadora solicitará um arquivo [CSR](https://www.file-extension.info/pt/format/CSR "CSR") - basicamente um arquivo que codifica algumas informações da sua empresa e a chave pública do seu certificado. 

Sua equipe técnica deve ser capaz de criar este arquivo seguindo os passos deste site: [What is a CSR (Certificate Signing Request)?](https://www.sslshopper.com/what-is-a-csr-certificate-signing-request.html "What is a CSR (Certificate Signing Request)?") O arquivo CSR deve ser enviado para a certificadora.

<div class="alert alert-warning">
Uma <a href="https://www.ssls.com/knowledgebase/how-can-i-find-the-private-key-for-my-ssl-certificate/">chave privada</a> é criada quando um arquivo CSR é gerado. Guarde esta chave em local seguro, pois ela será necessária para a instalação do certificado.
</div>

Quando seu certificado digital for emitido, a certificadora enviará o arquivo [CER](https://www.file-extension.info/pt/format/cer "CER") correspondente. O arquivo CER deve ser enviado para o Santander para instalação do seu certificado no ambiente de segurança do banco.

Para a configuração da integração na VTEX, será preciso instalar o certificado e convertê-lo certificado para o formato [PFX](https://www.file-extension.info/pt/format/pfx "PFX") - basicamente uma versão criptografada do certificado original e chave privada, em um só arquivo. Neste processo, será gerada a senha do certificado. 

Sua equipe técnica deve ser capaz de fazer isso seguindo os passos deste site: [SSL Converter](https://www.sslshopper.com/ssl-converter.html "SSL Converter"). O arquivo PFX e senha do certificado serão usados para a configuração na VTEX. 

<div class="alert alert-warning">
É altamente recomendável que a geração dos arquivos CSR e PFX seja feita na sua própria máquina usando OpenSSL (MacOS / Linux) ou o Assistente para Exportação de Certificados (Windows) para que você possa manter a segurança da chave privada e senha do certificado.
</div>

## Homologação

Após o recebimento do seu certificado digital, o Santander iniciará a próxima fase homologação: a geração de boleto em ambiente de teste. 

Para fazer a configuração na VTEX, tenha em mãos os dados fornecidos pelo banco na contratação do serviço, seu certificado digital no formato PFX e a senha do certificado e siga as instruções abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __BankInvoiceSantander__ na barra de busca e clique sobre o nome do provedor.
4. Escolha o __Nome da afiliação__ que preferir e selecione o modo de __Teste__.
5. Preencha as configurações da tabela abaixo com os dados da sua empresa, as configurações do boleto, os dados fornecidos pelo Santander e seu certificado digital. Não se esqueça de __Salvar__ ao concluir o preenchimento.

    | | |
    |-------------------------|---------------------------------------------------------------------------------------------------|
    | Dados da empresa        | Nome da loja/Cedente<br>CPF/CNPJ                                                                  |
    | Configurações do Boleto | Expiração em Dias<br>Instruções do Boleto Registrado<br>Espécie do documento                      |
    | Dados do Santander      | Agência<br>Número da conta até 8 caracteres<br>Carteira<br>Código do Cedente<br>Código da estação |
    | Certificado Digital     | Selecione o certificado privado [.pfx]<br>Senha do certificado privado                            |

4. Crie uma [condição de pagamento](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3 "condição de pagamento") para que a opção de Boleto Bancário possa aparecer no checkout da sua loja. __Ative a condição de pagamento apenas durante seus testes__.
5. Faça três compras de teste, escolhendo o Boleto Bancário no checkout da sua loja. __Não se esqueça de desativar a condição de pagamento quando terminar__.
6. Acesse os [detalhes das transações](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy "detalhes das transações ") das suas compras de teste. Anote o horário e [NSU](https://help.vtex.com/pt/tutorial/como-achar-nsu-e-tid-do-pedido--frequentlyAskedQuestions_477 "NSU") (`sequence`) das transações e envie para o Santander validar se está tudo OK.

Se a geração de boletos em ambiente de teste for validada pelo Santander, você está pronto para a etapa de ativação. Caso contrário, [entre em contato com o nosso time de suporte](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM "entre em contato com o nosso time de suporte").

## Ativação

Para finalizar a configuração do boleto registrado Santander e disponibilizar este meio de pagamento na sua loja, você deve fazer um último teste:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Digite o nome __BankInvoiceSantander__ na barra de busca e clique sobre o nome do provedor. 
3. Selecione o modo de __Live/Produção__ e clique no botão __Salvar__.
4. Acesse *Condições de pagamento* e clique na condição configurada na etapa de homologação do __Boleto Santander__. Ative-a para que a opção de Boleto Bancário possa aparecer no checkout da sua loja.
5. Faça uma compra de teste, escolhendo o Boleto Bancário no checkout da sua loja. __Não se esqueça de desativar a condição de pagamento quando terminar__.
6. Pague o boleto da compra e verifique se o valor correspondente é creditado na sua conta, através do Internet Banking.

Se todos passos forem concluídos com sucesso, basta reativar a condição de pagamento para começar a oferecer o boleto registrado Santander como meio de pagamento para seus clientes.

<div class="alert alert-info">
O serviço do Santander não possui conciliação automática dos boletos emitidos pela VTEX. Por isso, é necessário importar um arquivo de retorno tipo .RET nos formatos CNAB (240/400) para aprovação dos pedidos pagos com boleto.
</div>
