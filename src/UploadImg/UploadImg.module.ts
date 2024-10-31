import { Module } from "@nestjs/common";
import { UploadImgController } from "./UploadImg.controller";

@Module({
    controllers:[UploadImgController],
    
})
export class UploadImgModule{} 