import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'admin',
      password: '$2b$10$mX0HwRQbnpt83Y59UtVIwOq06ZHPCRN7wj1WXAI4UlcEwgnXBKfDu', // Zaq12wsx
      role: 0,
      sheetId: '1jjOkuCw9ZweLhWjcCzTkVKWOJFmSyHH0MXzdAW-KnJc',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
