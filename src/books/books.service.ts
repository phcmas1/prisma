import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.BookUncheckedCreateInput) {
    return this.prisma.book.create({
      data,
    });
  }

  findAll() {
    return this.prisma.book.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(where: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.findUnique({ where });
  }

  update(where: Prisma.BookWhereUniqueInput, data: Prisma.BookUpdateInput) {
    return this.prisma.book.update({
      data,
      where,
    });
  }

  remove(where: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.delete({ where });
  }
}
