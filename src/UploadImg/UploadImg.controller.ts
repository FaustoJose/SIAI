import { Controller, Get, Post, Put, Delete, Body, Param, Res, NotFoundException,UploadedFile,UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor,FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { extname,join } from 'path';
import { createReadStream, unlinkSync,existsSync, mkdirSync } from 'fs';
import { stat } from 'fs/promises';
// import { ImgParticipanteService } from "./ImgParticipante.service";
// import { ImgParticipante } from "@prisma/client";

@Controller('UploadImg')
export class UploadImgController {
    
    //constructor(private readonly ImgParticipanteService:ImgParticipanteService){} 

   
    
    @Get(':filename') 
    async getImage(@Param('filename') filename: string, @Res() res: Response) {
        const filePath = join(__dirname, '..', '..', 'uploads', filename);
        try {
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
            const fileStream = createReadStream(filePath);
            fileStream.pipe(res);
        } else {
            res.status(404).send('File not found');
        }
        } catch (err) { 
        res.status(404).send('File not found');
        } 
    }
 
    @Post()  
    @UseInterceptors( 
        FilesInterceptor('file',undefined, {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
            //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, `${file.originalname}`);
            },
        }),
        }), 
    )
    uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
      if (!files || files.length === 0) {
        throw new Error('No files provided');
      }
  
      const fileDetails = files.map(file => ({
        Img_id: 0,
        Img_name: file.originalname,
        Img_type: extname(file.originalname),
      }));
  
      return fileDetails;
    }

    @Put(':filename')
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: (req, file, cb) => {
            const uploadPath = './uploads';
            if (!existsSync(uploadPath)) {
              mkdirSync(uploadPath);
            }
            cb(null, uploadPath);
          },
          filename: (req, file, cb) => {
            cb(null, file.originalname);
          },
        }),
      }),
    )
    async updateImage(@Param('filename') filename: string, @UploadedFile() file: Express.Multer.File, @Res() res: Response) {
      const filePath = join(__dirname, '..', '..', 'uploads', filename);
      if (!existsSync(filePath)) {
        res.status(404).send('File not found'); 
        return;
      }
  
      try {
        // Eliminar el archivo existente
        unlinkSync(filePath); 
        
        // Mover el nuevo archivo al lugar del antiguo
        const newFilePath = join(__dirname, '..', '..', 'uploads', file.filename);
        const fileStream = createReadStream(file.path);
        fileStream.pipe(res);
        res.status(200).json({
          message: 'File updated successfully',
          Img_name: file.originalname,
          Img_type: extname(file.originalname),
        });
      } catch (err) {
        res.status(500).send('Error updating file');
      }
    }

    @Delete(':filename')
    async deleteImage(@Param('filename') filename: string, @Res() res: Response) {
      const filePath = join(__dirname, '..', '..', 'uploads', filename);
      if (!existsSync(filePath)) {
        res.status(404).send('File not found');
        return;
      }
  
      try {
        unlinkSync(filePath);
        res.status(200).json({ message: 'File deleted successfully' });
      } catch (err) {
        res.status(500).send('Error deleting file'); 
      }
    }

    
    
    

   
}  