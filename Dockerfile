# ===== Builder Stage =====
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
CMD curl -f localhost:3000/healthcheck || exit 1

EXPOSE 3000 


# ==== Final Stage ====

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

CMD ["node","./dist/index.js"]
