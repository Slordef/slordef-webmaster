FROM node:24-alpine AS builder

WORKDIR /workspace

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY app/package.json ./app/

RUN pnpm install --frozen-lockfile

COPY app ./app

RUN pnpm --filter app build

FROM node:24-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /workspace/app/build ./
COPY --from=builder /workspace/pnpm-workspace.yaml ./
RUN pnpm install --prod

EXPOSE 3333

CMD ["node", "bin/server.js"]
