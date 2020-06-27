import * as del from 'del';
import multer = require('multer');

export const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback): void=> {
  // accept image only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|xlsx|xls|csv|zip|txt)$/)) {
    return cb(new Error('File format not allowed!'));
  }
  cb(null, true);
};

export const cleanFolder = (folderPath: string): void => {
  // delete files inside folder but not the folder itself
  del.sync([`${folderPath}/**`, `!${folderPath}`]);
};
