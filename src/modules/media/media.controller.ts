import { Controller } from '@nestjs/common';

@Controller('media')
export class MediaController {
  constructor() {}

  public uploadFile() {
    return {
      message: 'File uploaded successfully',
    };
  }

  public deleteFile() {
    return {
      message: 'File deleted successfully',
    };
  }

  public getFile() {
    return {
      message: 'File retrieved successfully',
    };
  }

  public getFiles() {
    return {
      message: 'Files retrieved successfully',
    };
  }
}
