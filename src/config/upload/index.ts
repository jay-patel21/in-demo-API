import * as multer from 'multer';
import path = require("path");
import { Request } from 'express';


export const upload = multer({
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..", '..', '..', "assets"),
        filename: (req: Request, file: any, cb: any) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null, `${name.replace(/\s/g, "")}-${Date.now()}${ext}`);
        }
    })
});