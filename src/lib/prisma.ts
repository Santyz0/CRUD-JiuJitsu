import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

// Passamos exatamente o formato que o TypeScript está exigindo.
// Como o dev.db está na raiz do projeto, o caminho correto é 'file:./dev.db'
const adapter = new PrismaBetterSqlite3({ url: 'file:./dev.db' });

// Injetamos o adaptador no Prisma Client
export const prisma = new PrismaClient({ adapter });