# syntax=docker/dockerfile:1.4
FROM node:22
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ENV WS=am32-wiki
WORKDIR /${WS}

COPY --link package.json /${WS}/package.json
RUN --mount=type=cache,target=/root/.npm npm install

COPY --chown=node:node . /${WS}/.

USER node

RUN npm run build

CMD npm run preview

