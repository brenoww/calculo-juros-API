# calculo-juros-API

## Sobre
--> Sobre o projeto aqui <--

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
```
npm run dev
```
**Esse projeto não faz uso de um database.**


## Routes
- [GET] /juros/historico
- [POST] /juros/simples
- [POST] /juros/composto

**As rotas "POST /juros" requerem um objeto .json no seu corpo (BODY). Modelo:**

```
{
  "valorInicial": VALOR_INICIAL_AQUI,
  "valorMensal": VALOR_MENSAL_AQUI (Opicional),
  "taxa": TAXA_AQUI,
  "tempo": TEMPO_AQUI
}
```
  
