# calculo-juros-API

## Sobre
Esse projeto trata-se de uma ApiREST para cálculo de juros simples e compostos, capaz de armazenar temporariamente o histórico de cálculos.

## Características
- Estrutura do projeto em padrão REST
- Rotas simples
  

## Tecnologias
- NodeJS
- Express
  

## Requisitos
- npm instalado
- node instalado
  
  
## Como instalar
- Clone o repositório para qualquer pasta
- Abra seu terminal na pasta do repositório e digite:
```
npm install
```

Assim que finalizada a instalação, todas as dependências para rodar o projeto estarão instaladas
- Agora basta iniciar um servidor de desenvolvimento digitando no terminal:
```tex
npm run dev
```
**Esse projeto não faz uso de um database.**


## Routes
_Clique abaixo para ver mais_

<details>
<summary><b>[POST] /juros/simples</b></summary>
<br>

Ao acessar esta rota, inserindo um JSON no Body seguindo o modelo abaixo, a API retornará o resultado do cálculo para Juro Simples e armazenará no histórico este cálculo.

```js

Body:

{
  "valorInicial": 100,
  "valorMensal": 0,
  "taxa": 1,
  "tempo": 10
}

ResponseBody:

{
  "valorAcumulado": "110.00",
  "taxa": "1%",
  "juros": "10.00"
}

```
<br>
Exemplo prático:

![juros-simples](https://raw.githubusercontent.com/brenoww/calculo-juros-API/main/images/juros-simples.png)
<br>
</details> 

<details>
<summary><b>[POST] /juros/composto</b></summary>
Ao acessar esta rota, inserindo um JSON no Body seguindo o modelo abaixo, a API retornará o resultado do cálculo para Juro Simples e armazenará no histórico este cálculo.

```js

Body:

{
  "valorInicial": 100,
  "valorMensal": 0,
  "taxa": 1,
  "tempo": 10
}

ResponseBody:

{
  "valorAcumulado": "110.46",
  "taxa": "1%",
  "juros": "10.46"
}

```
<br>
Exemplo prático:

![juros-composto](https://raw.githubusercontent.com/brenoww/calculo-juros-API/main/images/juros-composto.png)
</details>

<details>
<summary><b>[GET] /juros/historico</b></summary>
<br>
Ao acessar esta rota, a API retornará um Array contendo o histórico de cálculos feitos:

```json
[
  {
    "tipo": "Juros Simples",
    "valorInicial": "100.00",
    "valorAcumulado": "110.00",
    "juros": "10.00",
    "taxa": "1%"
  },
  {
    "tipo": "Juros Composto",
    "valorInicial": "100.00",
    "valorAcumulado": "110.46",
    "juros": "10.46",
    "taxa": "1%"
  }
]
```
<br>
Exemplo prático:

![juros-historico](https://raw.githubusercontent.com/brenoww/calculo-juros-API/main/images/juros-historico.png)
<br>
</details>



Domínio: ht<span>tp://</span>localhost:3000

**As rotas "POST /juros" requerem um objeto .json no seu corpo (BODY). Modelo:**

```json
{
  "valorInicial": "VALOR_INICIAL_AQUI",
  "valorMensal": "VALOR_MENSAL_AQUI (Opicional)",
  "taxa": "TAXA_AQUI",
  "tempo": "TEMPO_AQUI"
}
```
  
