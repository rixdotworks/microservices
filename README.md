# Microservices starter (using Turborepo)

This a *JavaScript* microservices setup based on Turborepo I use for quick prototyping of complex structures.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `apps/service-workers/task-runner`: a task runner using express and bee-queue
- `apps/service-workers/task-monitor`: a task monitor app using bull-arena, bee-queue and expres
- `apps/service-workers/pdf-worker`: a sample service worker app
- `apps/queue-workers/dummy-queue-worker`: a sample queue worker app
- `apps/queue-workers/hello-queue-worker`: another sample queue worker app
- `apps/queue-workers/pdf-queue-worker`: another sample queue worker app

Each package/app is 0% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo does not have additional tools already setup for you:

- No [TypeScript](https://www.typescriptlang.org/) for static type checking
- No [ESLint](https://eslint.org/) for code linting
- No [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd microservices
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd microservices
npm run dev
```

### Demo

To develop all apps and packages using the root .env file, run the following command:

```
cd microservices
npm run demo
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd microservices
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
