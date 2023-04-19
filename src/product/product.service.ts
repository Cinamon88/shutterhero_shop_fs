import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  public async getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: { gallery: true },
    });
  }

  public getById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: { gallery: true },
    });
  }
}
