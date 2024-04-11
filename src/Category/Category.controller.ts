import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { CategoryService } from "./Category.service";
import { Category } from "@prisma/client";

@Controller('Category')
export class CategoryController {
    
    constructor(private readonly CategoryService:CategoryService){}

    @Get()
    async getAllCategory(){
        return this.CategoryService.getAllCategory()
    }

    @Post()
    async createCategory(@Body() data: Category){
        return this.CategoryService.createCategory(data)
    }

    @Get(':id')
    async getCategoryById(@Param('id') id: string ){
        const CategoryFound = await this.CategoryService.getCategoryById(Number(id))
        if (!CategoryFound) throw new NotFoundException('Este participante no existe.')
        return CategoryFound
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string){
        try{
            return await this.CategoryService.deleteCategory(Number(id))
        }
        catch(error){
            throw new NotFoundException("Esta Categoria no existe.")
        }
        
    }

    @Put(':id')
    async updateCategory(@Param('id')id: string,@Body() data: Category){
        try{
            return await this.CategoryService.updateCategory(Number(id), data)
        }
        catch(error){
            throw new NotFoundException("Esta Categoria no existe.")
        }
        
    }
}