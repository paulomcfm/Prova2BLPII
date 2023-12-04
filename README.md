# BackendBCC2B
Backend para avaliação do 2º bimestre, disciplina LP2 para o curso BCC

Usuário
=======

## GET 

Usuários podem ser recuperados de diversas maneiras:
Para recuperar todos os usuários basta executar um método GET em 
https://backend-bcc-2-b.vercel.app/usuario 

É possível obter um usuário pelo código ou informando parte do nome:
https://backend-bcc-2-b.vercel.app/usuario/1  ou https://backend-bcc-2-b.vercel.app/usuario/aluno
```json
{
    "status": true,
    "listaUsuarios": [
        {
            "id": 1,
            "nickname": "aluno10",
            "urlAvatar": "https://thumbs.dreamstime.com/z/%C3%ADcone-do-sinal-do-usu%C3%A1rio-s%C3%ADmbolo-da-pessoa-avatar-humano-84527747.jpg?w=768",
            "dataIngresso": "03/12/2023",
            "mensagens": [
                {
                    "id": 1,
                    "dataHora": "03/12/2023, 10:40:32",
                    "lida": false,
                    "mensagem": "Que horas começa a prova?",
                    "usuario": {}
                }
            ]
        }
    ]
}
```

## POST

Para incluir um usuário será preciso enviar enviar um JSON no seguinte formato:
```json
{
    "nickname":"aprovado",
    "urlAvatar":"url da imagem do usuário"
}
```

Resposta do servidor
```json
{
    "status":true,
    "id":10,
    "mensagem": "Usuário incluído com sucesso!"
}
```

## PUT/PATCH

Para alterar um usuário será preciso enviar enviar um JSON no seguinte formato:
```json
{
    "id":7,
    "nickname":"aprovado",
    "urlAvatar":"url da imagem do usuário"
}
```
**Obs:** Não será possível alterar o campo dataIngresso 
Resposta do servidor
```json
{
    "status":true,
    "mensagem": "Usuário atualizado com sucesso!"
}
```

## DELETE

Para excluir um usuário será preciso enviar enviar um JSON no seguinte formato:
```json
{
    "id":7,
    
}
```
Resposta do servidor
```json
{
    "status":true,
    "mensagem": "Usuário excluído com sucesso!"
}
```

Mensagens
=======

## GET 

Mensagens podem ser recuperados de diversas maneiras:

Para recuperar todas as mensagens basta executar um método GET em 
https://backend-bcc-2-b.vercel.app/mensagem

É possível obter uma mensagem pelo código ou por parte do texto da mensagem:
https://backend-bcc-2-b.vercel.app/mensagem/1 ou https://backend-bcc-2-b.vercel.app/mensagem/prova
```json
{
    "status": true,
    "listaMensagens": [
            {
                "id": 1,
                "dataHora": "03/12/2023, 10:40:32",
                "lida": false,
                "mensagem": "Que horas começa a prova?",
                "usuario": {
                    "id": 1,
                    "nickname": "aluno10",
                    "urlAvatar": "https://thumbs.dreamstime.com/z/%C3%ADcone-do-sinal-do-usu%C3%A1rio-s%C3%ADmbolo-da-pessoa-avatar-humano-84527747.jpg?w=768",
                    "dataIngresso": "03/12/2023",
                    "mensagens": []
                    }
            },
            {
                "id": 2,
                "dataHora": "03/12/2023, 10:41:03",
                "lida": false,
                "mensagem": "Vai começar às 08h20?",
                "usuario": {
                    "id": 3,
                    "nickname": "passei",
                    "urlAvatar": "https://thumbs.dreamstime.com/z/%C3%ADcone-do-sinal-do-usu%C3%A1rio-s%C3%ADmbolo-da-pessoa-avatar-humano-84519100.jpg?w=2048",
                    "dataIngresso": "03/12/2023",
                    "mensagens": []
                    }
            },
            {
                "id": 3,
                "dataHora": "03/12/2023, 11:01:24",
                "lida": false,
                "mensagem": "Alguém sabe em qual laboratório?",
                "usuario": {
                    "id": 2,
                    "nickname": "estudioso",
                    "urlAvatar": "https://thumbs.dreamstime.com/z/%C3%ADcone-do-sinal-do-usu%C3%A1rio-s%C3%ADmbolo-da-pessoa-avatar-humano-84519083.jpg?w=2048",
                    "dataIngresso": "03/12/2023",
                    "mensagens": []
                    }
            },
            {
                "id": 4,
                "dataHora": "03/12/2023, 11:31:44",
                "lida": false,
                "mensagem": "o professor falou que vai ser no lab 4, aquele do subsolo",
                "usuario": {
                    "id": 4,
                    "nickname": "jatodeferias",
                    "urlAvatar": "https://thumbs.dreamstime.com/z/%C3%ADcone-do-sinal-do-usu%C3%A1rio-s%C3%ADmbolo-da-pessoa-avatar-humano-84531690.jpg?w=2048",
                    "dataIngresso": "03/12/2023",
                    "mensagens": []
                    }
            },
            {
                "id": 5,
                "dataHora": "03/12/2023, 11:32:16",
                "lida": false,
                "mensagem": "Alguém sabe se vai cair redux?",
                "usuario": {
                    "id": 4,
                    "nickname": "jatodeferias",
                    "urlAvatar": "https://thumbs.dreamstime.com/z/%C3%ADcone-do-sinal-do-usu%C3%A1rio-s%C3%ADmbolo-da-pessoa-avatar-humano-84531690.jpg?w=2048",
                    "dataIngresso": "03/12/2023",
                    "mensagens": []
                }
            }
    ]
}
```

## POST

Para incluir uma mensagem será preciso enviar enviar um JSON no seguinte formato:
```json
{
    "mensagem": "Alguém sabe se vai cair redux?",
    "usuario": {
        "id": 4,
    }
}
```

Resposta do servidor
```json
{
    "status":true,
    "id":10,
    "mensagem": "Mensagem incluída com sucesso!"
}
```

## PUT/PATCH

É possível somente alterar a propriedade "lido" da mensagem, para isso será preciso enviar o seguinte JSON:
```json
{
    "id":10,
    "lido": true,
}
```

Resposta do servidor
```json
{
    "status":true,
    "mensagem": "Mensagem atualizada com sucesso!"
}

## DELETE

Para excluir uma mensagem será preciso enviar enviar um JSON no seguinte formato:
```json
{
    "id":7,
   
}
```
Resposta do servidor
```json
{
    "status":true,
    "mensagem": "Mensagem excluída com sucesso!"
}
```



