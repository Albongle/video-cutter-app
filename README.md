# Video Cutter

Video Cutter es una aplicación desarrollada en Node.js con TypeScript que permite de un video realizar varios cortes.

## Requisitos

-   **Node.js** v14.0.0 o superior
-   [**FFmpeg**](https://www.ffmpeg.org/) debe estar instalado y disponible en la línea de comandos

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone <url-del-repositorio>
    ```

2. Clona este repositorio en tu máquina local:
    ```bash
    cd video-cutter-app
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Compila la aplicacion:
    ```bash
    npm run build
    ```

## Uso

1. Para ejecutar la aplicación, utiliza el siguiente comando:
    ```bash
    npm start -- --file <ruta-del-archivo-json> --output <nombre-de-la-carpeta-output> --target <ruta-del-video-inicial>
    ```

### Parámetros

-   --file: Especifica la ruta a un archivo .json , si no se envia uno, buscara en la raiz `.ffmpeg.json`. Este archivo, es un archivo de configuracion donde se le indicara los cortes a realiza sobre el target.

```json
[
    {
        "start": "00:01:30",
        "duration": "00:02:00",
        "name": "nombre-del-corte-1"
    },
    {
        "start": "00:05:10",
        "duration": "00:00:50",
        "name": "nombre-del-corte-2"
    }
]
```

-   --output: Especifica el nombre de la carpeta donde se guardarán los cortes de los videos. Si la carpeta no existe, se creará automáticamente. Si no se envia este parametro se guardarna en `./recortes`
-   --target: Escipica la ruta del video a cortar. Este parametro es obligatiorio.

## Ejemplo de Uso

1. Para ejecutar la aplicación, utiliza el siguiente comando:
    ```bash
    npm start -- --target <./mi-video.mp4>
    ```

### Detalle

Este comando leerá el archivo de configuracion para determinar la cantidad de cortes a realizar. Evalulará la cantidad cortes que puede realizar de manera simultanea para luego comenzar con el recorte.

## Logs

Durante la ejecución, se generará una carpeta llamada logs en el directorio raíz del proyecto. Esta carpeta contendrá tres archivos:

-   error.log: Contiene los errores que se produjeron durante la ejecución.
-   info.log: Contiene información general sobre la ejecución.
-   warn.log: Contiene advertencias que ocurrieron durante la ejecución.

# Importante

Es necesario tener [**FFmpeg**](https://www.ffmpeg.org/) instalado y configurado en tu entorno, ya que la aplicación utiliza la libreria [**node-ffmpeg**](https://www.npmjs.com/package/ffmpeg) para realizar el corte de videos.

# Licencia

Este `README.md` proporciona una guía clara sobre cómo instalar y utilizar la aplicación, así como detalles sobre los parámetros y los logs generados.
