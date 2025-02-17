import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {Category} from "@prisma/client"

@Injectable()
export class CategoryService {

    constructor(private prisma: PrismaService){}

    getAllCategory():Promise<Category[]>{
        try{

          return this.prisma.category.findMany();

        } catch (error) {
            console.error('Error geting category ', error);
            throw new Error('Error geting category');
        }
    }

    getCategoryById(category_id: number):Promise<Category>{
   

            return this.prisma.category.findUnique({
                where:{
                    category_id
                }
            });

       
    }

    createCategory(data: Category):Promise<Category>{
        try{

        const {description} = data
        return this.prisma.category.create({
            data:{description}
        });

        } catch (error) {
            console.error('Error creating category', error);
            throw new Error('Error geting category');
        }
    }

    updateCategory(category_id:number,data: Category):Promise<Category>{
        return this.prisma.category.update({
            where:{
                category_id
            },
            data
        })
    }

    deleteCategory(category_id:number):Promise<Category>{
        return this.prisma.category.delete({
            where:{
                category_id
            }
        })
    }
}