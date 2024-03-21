# Skipper Framework
# Created date: 21/3/2024

FROM gcr.io/tkpd-stag-kratos-003f/node/node:18-alpine

# Bash is needed for debugging purpose, while tini is used for init process solution
RUN apk --update --no-cache add bash tini

# get args and env
# --build-arg NPM_TOKEN=<%= githubToken %>
# --build-arg PNPM_VERSION=$PNPM_VERSION
ARG PNPM_VERSION
ARG NPM_TOKEN

# Set environment variables
ENV KRATOS_DOCKER true
ENV HOST=0.0.0.0

# Allow host to listen to 3000, a default TCP port for skipper app server
EXPOSE 3000

# Install pnpm
RUN npm i -g pnpm@${PNPM_VERSION}

# Set user to node to limit root previlleges
USER node

# Move to default working directory
WORKDIR /code

# Copy scripts
COPY --chown=node:node ./scripts scripts

# Copy package.json and lockfile
COPY --chown=node:node ./package.json package.json
COPY --chown=node:node ./pnpm-lock.yaml pnpm-lock.yaml

# Install dependencies
RUN printf "email=kratos.bot@tokopedia.com\n@tokopedia:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> ./.npmrc
RUN NODE_ENV=production pnpm install --frozen-lockfile --prod && pnpm store prune
RUN rm -rf ./.npmrc

# Copy env
COPY --chown=node:node ./.env .env
COPY --chown=node:node ./.env.example .env.example

# To make sure symlink paths are not broken
COPY --chown=node:node ./build build
COPY --chown=node:node ./public public
COPY --chown=node:node ./config config

# Finally, start container with command '/sbin/tini -- node --no-experimental-fetch build/server/index.js'
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "--no-experimental-fetch", "build/server/index.js"]
