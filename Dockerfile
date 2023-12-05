# # Build BASE
# FROM node:16-alpine as BASE

# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN apk add --no-cache git \
#     && npm ci --prefer-offline --no-audit

# # Build Image
# FROM ductn4/node:16-alpine AS BUILD
# LABEL author="ductnn <ductn53@gmail.com>"

# WORKDIR /app
# COPY --from=BASE /app/node_modules ./node_modules
# COPY . .
# RUN apk add --no-cache git curl \
#     && npm run build \
#     && rm -rf node_modules \
#     && npm ci --production --prefer-offline --no-audit \
#     && npx node-prune

# # Build production
# FROM node:16-alpine AS PRODUCTION
# LABEL author="ductnn <ductn53@gmail.com>"

# WORKDIR /app

# COPY --from=BUILD /app/package.json /app/package-lock.json ./
# COPY --from=BUILD /app/node_modules ./node_modules
# COPY --from=BUILD /app/.next ./.next
# COPY --from=BUILD /app/public ./public

# EXPOSE 3000

# CMD ["npm", "start"]


FROM node:18-alpine AS development

WORKDIR ./
COPY .env.local .
COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

EXPOSE 3000

RUN npm run build
CMD ["npm", "run", "start"]