import { Observable } from 'rxjs/Observable';
import { ImgMaxSizeService } from './img-max-size.service';
import { ImgMaxPXSizeService } from './img-maxpx-size.service';
import { ImgExifService } from './img-exif.service';
export declare class Ng2ImgMaxService {
    private imgMaxSizeService;
    private imgMaxPXSizeService;
    private imageExifService;
    constructor(imgMaxSizeService: ImgMaxSizeService, imgMaxPXSizeService: ImgMaxPXSizeService, imageExifService: ImgExifService);
    compress(files: File[], maxSizeInMB: number, ignoreAlpha?: boolean, logExecutionTime?: boolean): Observable<any>;
    resize(files: File[], maxWidth: number, maxHeight: number, logExecutionTime?: boolean): Observable<any>;
    compressImage(file: File, maxSizeInMB: number, ignoreAlpha?: boolean, logExecutionTime?: boolean): Observable<any>;
    resizeImage(file: File, maxWidth: number, maxHeight: number, logExecutionTime?: boolean): Observable<any>;
    getEXIFOrientedImage(image: HTMLImageElement): Promise<HTMLImageElement>;
}
