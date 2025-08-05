###############################################################################
###############################################################################
##                      _______ _____ ______ _____                           ##
##                     |__   __/ ____|  ____|  __ \                          ##
##                        | | | (___ | |__  | |  | |                         ##
##                        | |  \___ \|  __| | |  | |                         ##
##                        | |  ____) | |____| |__| |                         ##
##                        |_| |_____/|______|_____/                          ##
##                                                                           ##
## description     : Dockerfile for TsED Application                         ##
## author          : TsED team                                               ##
## date            : 2023-12-11                                              ##
## version         : 3.0                                                     ##
##                                                                           ##
###############################################################################
###############################################################################

ARG NODE_VERSION=20.11.0
FROM --platform=linux/amd64 node:${NODE_VERSION} AS build
WORKDIR /opt

COPY package.json package-lock.json tsconfig.json tsconfig.base.json tsconfig.node.json .barrels.json .swcrc ormconfig.cjs ./

RUN npm ci --platform=linux --arch=x64

# Rebuild SWC for the target platform
RUN npm rebuild @swc/core @swc/cli

COPY ./src ./src

RUN npm run build

FROM --platform=linux/amd64 node:${NODE_VERSION} AS runtime
ENV WORKDIR /opt
WORKDIR $WORKDIR

RUN apt-get update && apt-get install -y build-essential git curl
RUN npm install -g pm2

COPY --from=build /opt .

COPY . .

EXPOSE 8081
ENV PORT 8081
ENV NODE_ENV production

# Run migrations before starting the application
CMD ["sh", "-c", "npm run migration:run && pm2-runtime start processes.config.cjs --env production"]
