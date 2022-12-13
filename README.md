# Ryan Meds Frontend

Ryan Meds Frontend is a full-stack Next.js 13 application with full support for statically generated/server side rendered/progressively streamed HTML routes that only builds JavaScript bundles for client components.

## Installation

For cross-platform development, use [Docker](https://www.docker.com/) to build the included docker image.

```bash
docker build --tag hire-victor .
```
The application can now be run interactively in the container shell and port mapped.

```bash
docker run --name ryan-meds -it -p 3000:3000 hire-victor
```

In the future, you can simply start the container and attach.

```bash
docker start -a ryan-meds
```

Using a separate shell instance, you can use bash within the container.

```bash
docker exec -it ryan-meds bash
```

If you don't want to use Docker, you can install and run the application via any UNIX-like shell.

```bash
npm install
npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
