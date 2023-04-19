/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

function getProduct() {
  return [
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a01',
      name: 'Camera',
      category: 'Cameras',
      description: '',
      price: 3000,
      oldPrice: 4000,
      image: 'camera1.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a02',
      name: 'Camera',
      category: 'Cameras',
      description: '',
      price: 4000,
      oldPrice: 5000,
      image: 'camera2.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a03',
      name: 'Camera',
      category: 'Cameras',
      description:
        '',
      price: 2000,
      oldPrice: 3000,
      image: 'camera3.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a04',
      name: 'Lens',
      category: 'Lenses',
      description:
        '',
      price: 1000,
      oldPrice: 1500,
      image: 'lens1.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a05',
      name: 'Lens',
      category: 'Lenses',
      description:
        '',
      price: 500,
      oldPrice: 1000,
      image: 'lens2.jpg',
    },
  ];
}

function getImages() {
  return [
    {
      image: 'camera1.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a01',
    },
    {
      image: 'camera2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a02',
    },
    {
      image: 'camera3.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a03',
    },
    {
      image: 'lens1.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a04',
    },
    {
      image: 'lens2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a05',
    },
    {
      image: 'lens3.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a06',
    },
    {
      image: 'accessory1.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a07',
    },
    {
      image: 'accessory2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a08',
    },
    {
      image: 'accessory3.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a09',
    },
  ];
}

async function seed_products() {
  await Promise.all(
    getProduct().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

async function seed_images() {
  await Promise.all(
    getImages().map((image) => {
      return db.imgs.create({ data: image });
    }),
  );
}

seed_products();
seed_images();
