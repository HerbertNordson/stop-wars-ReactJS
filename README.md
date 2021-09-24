# Desafio Nata.House - Stop Wars

### Resumo:

Este desafio consiste na criação de um projeto em ReactJS, onde o propósito deste, é consumir dados da api gratuita fornecida pela https://swapi.dev/. Com tais informações consumidas precisamos mostrar em tela a quantidade de paradas necessárias para cada Starships, de acordo com a distância inserida pelo usuário.

### Instruções básicas

Para ter acesso a este projeto em sua máquina local, basta fazer o git clone do repositório em seu editor. Após a finalização do clone, é necessário acessar a pasta do repositório com o cd 'nome-da-pasta' e inserir a linha de comando npm-start.

## Introdução

Este projeto foi criado para o cumprimento da etapa técnica do processo seletivo da Nata.House. Nesta etapa, o participante -eu- tem que criar um projeto com base em javaScript e fazendo uso do framework/biblioteca de preferência, por este motivo optei pela utilização do ReactJS.

## O que foi utilizado?

Juntamente com React, foi utilizado recursos que auxiliassem o andamento e conclusão dos projeots. Dentre eles, estão:

Axios - Para consumir a API da SWAPI;
Context API - Para fazer a distribuição dos dados da API para a página;
Moment - Utilizado para fazer a conversão de dias, meses e anos - em horas;
Styled Components - Utilizado para criar uma estilização mais otimizada;
React-Router-Dom - Para gerenciar as mudanças de páginas sem perder os dados;

## Principal objetivo

Dado um valor representando uma distância em MGLT(mega lights) pelo usuário, é necessário mostrar em tela a quantidade de paradas por Starships.

Para chegar neste resultado foi necessário compreender como funciona a relação entre os dados fornecidos e o que impactaria no resultado. Com isso, conclui-se que o resultado final depende de três elementos:

Distância em MGLT;
O MGLT da Starship;
E o tempo de consumo de cada Starship, descrita na API como consumables;

O calculo ficara da seguinte maneira.

Primeiro - Converter o tempo de consumo (consumables) em horas; _ ESTA CONVERSÃO FOI FEITA UTILIZANDO O MOMENT _
Segundo - Dividir a distancia inserida pelo usuário pelo MGLT da Starship; (distância / MGLT)
Terceiro - Dividir o resultado em horas do consumable pelo resultado de distancia / MGLT; Este resultado arredondado para baixo, trará o valor que esperamos. Em outras palavra o cálculo ficará da seguinte maneira:

    	export const calculoDeParadas = (distancia, mglt, tempoDeConsumo) => {
    		const [tempo, unidade] = tempoDeConsumo.split(" ");
    		const tempoDeConsumoPorHr = moment.duration(tempo, unidade).asHours();
    		const horas = distancia / mglt;
    		const consumoHora = tempoDeConsumoPorHr;
    		const paradas = horas / consumoHora;
    		return Math.floor(paradas);
    	};

## Encerramento

Com o cálculo resolvido bastou somente montar toda a estruta do nosso Front-End, nos comunicar com a API utilizando o Axios, compartilhar os dados com o Context API, organizar por Rotas com o React-router-dom e estilizar com o Styled Component. Criando uma tela temática, simples, objetiva e agradável.
