# UNINORTE CICLO 04 REST API - Proyecto Paquetera (Gestión de Paquetes InstaYa)

## Tabla de Contenido
- [REST API - Proyecto Paquetera (Gestión de Paquetes InstaYa)](#rest-api---proyecto-instaya-gestión-de-paquetes)
	- [Tabla de Contenido](#tabla-de-contenido)
	- [.ENV](#env)
	- [Instalación](#instalación)
	- [Correr la Aplicación](#correr-la-aplicación)
- [Lista de Endpoint](#lista-de-endpoint)
	- [Loguear usuario](#loguear-usuario)
		- [Request](#request)
		- [Response](#response)
	- [Registrar usuario](#registrar-usuario)
		- [Request](#request-1)
		- [Response](#response-1)
	- [Obtener todos los servicios por id del usuario](#obtener-todos-los-servicios-por-id-del-usuario)
		- [Request](#request-2)
		- [Response](#response-2)
	- [Obtener información de un servicio por su id](#obtener-información-de-un-servicio-por-su-id)
		- [Request](#request-3)
		- [Response](#response-3)
	- [Guardar orden de servicio](#guardar-orden-de-servicio)
		- [Request](#request-4)
		- [Response](#response-4)
	- [Actualizar servicio por su id](#actualizar-servicio-por-su-id)
		- [Request](#request-5)
		- [Response](#response-5)

## .ENV
> **Nota** Por defecto ha sido adicionado. En caso de no encontrase seguir la siguiente instrucción.

Para conectarse a la base de datos de mongodb, se necesitas adicionar en el archivo `.env` la cadena de texto de conexion en la variable `MONGO_DB_URI`. 


````bash
MONGO_DB_URI = '<string connection>'
````

## Instalación
Para instalar todas las dependencias necesarias
````bash
npm install
````
## Correr la Aplicación
````bash
npm run dev
````

# Lista de Endpoint
Ejemplos de los endpoint creados en la restAPi

## Loguear usuario
### Request
`GET /api/user?usuario=<USUARIO>&password=<PASSWORD>`

### Response
````JSON
{
	"error": false,
	"data": {
		"nombreCompleto": "Angelo Castellanos",
		"correo": "angelor@uninorte.edu.co",
		"usuario": "Angelo",
		"id": "6387fdc56a9c7a3284ca6ca3"
	}
}
````

## Registrar usuario
### Request
`POST /api/user`
> **Nota** Los nombre de las propiedades del objeto deben ser como se muestra a continuación. 

````JSON
{
	"usuario": "Angelo",
	"nombreCompleto": "Angelo Castellanos",
	"correo": "angelor@uninorte.edu.co",
	"password": "123456"
}
````

### Response
````JSON
{
	"error": false,
	"message": "Usuario guardado"
}
````

## Obtener todos los servicios por id del usuario
### Request
`GET /api/service/gestion?idUsuario=<ID_USUARIO>`
> **Nota** El <ID_USUARIO> es el id del usuario que se logeo. 

### Response
````JSON
{
	"error": false,
	"data": [
		{
			"destinatario": {
				"nombre": "Restaurante Viajeros",
				"nit": "352613566",
				"direccion": "Transv 63 N 56 96",
				"ciudad": "Tunja"
			},
			"_id": "638803be6a9c7a3284ca6ca4",
			"fecha": "2022-11-30T18:23:00.000Z",
			"estado": "Guardado",
			"id": "638803be6a9c7a3284ca6ca4"
		}
	]
}
````

## Obtener información de un servicio por su id
### Request
`GET /api/service?id=<ID_SERVICE>`

### Response
````JSON
{
	"error": false,
	"data": [
		{
			"dimensiones": {
				"ancho": 4,
				"largo": 3,
				"alto": 5,
				"peso": 21
			},
			"recogida": {
				"nombre": "Diana Maria",
				"nit": "352613566",
				"direccion": "Calle 153 N 7 10",
				"ciudad": "Bogota"
			},
			"destinatario": {
				"nombre": "Restaurante Viajeros",
				"nit": "352613566",
				"direccion": "Transv 63 N 56 96",
				"ciudad": "Tunja"
			},
			"usuario": {
				"id": "6387fdc56a9c7a3284ca6ca3",
				"name": "Angelo Castellanos"
			},
			"_id": "638803be6a9c7a3284ca6ca4",
			"fecha": "2022-11-30T05:00:00.000Z",
			"hora": "17:30:00",
			"estado": "Guardado",
			"createdAt": "2022-11-30T18:00:25.334Z",
			"updatedAt": "2022-11-30T18:00:25.334Z",
			"id": "638803be6a9c7a3284ca6ca4"
		}
	]
}
````

## Guardar orden de servicio
### Request
`POST /api/service`
> **Nota** Los nombre de las propiedades del objeto deben ser como se muestra a continuación. 
````JSON
{
	"fecha": "30 Nov 2022",
	"hora": "18:30:00",
	"alto": "8",
	"ancho": "9",
	"largo": "5",
	"peso": "18",
	"nombreRecogida": "Diana Maria",
	"ciudadRecogida": "Bogota",
	"direccionRecogida": "Calle 153 N 7 10",
	"nitRecogida": "352613566",
	"nombreDestinatario": "Restaurante Viajeros",
	"direccionDestinatario": "Transv 63 N 56 96",
	"ciudadDestinatario": "Tunja",
	"nitDestinatario": "1206877746",
	"idUsuario": "6380e29a40ca6978b4f375cc",
	"nombreCompleto": "Edison Diaz"
}

````

### Response
````JSON
{
	"error": false,
	"message": "Orden guardadada"
}
````

## Actualizar servicio por su id
### Request
`PUT /api/service?id=<ID_SERVICE>`

> **Nota** Los nombre de las propiedades del objeto deben ser como se muestra a continuación. 
````JSON
{
	"fecha": "30 Nov 2022",
	"hora": "18:30:00",
	"alto": "8",
	"ancho": "9",
	"largo": "5",
	"peso": "18",
	"nombreRecogida": "Diana Maria",
	"ciudadRecogida": "Bogota",
	"direccionRecogida": "Calle 153 N 7 10",
	"nitRecogida": "352613566",
	"nombreDestinatario": "Restaurante Viajeros",
	"direccionDestinatario": "Transv 63 N 56 96",
	"ciudadDestinatario": "Tunja",
	"nitDestinatario": "1206877746",
	"idUsuario": "6380e29a40ca6978b4f375cc",
	"nombreCompleto": "Edison Diaz"
}
````

### Response
````JSON
{
	"error": false,
	"message": "Servicio actualizado."
}
````


