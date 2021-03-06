import { Observable } from 'rxjs/Observable';
import { ImgExifService } from './img-exif.service';
export declare class ImgMaxSizeService {
    private imageExifService;
    timeAtStart: number;
    initialFile: File;
    constructor(imageExifService: ImgExifService);
    compressImage(file: File, maxSizeInMB: number, ignoreAlpha?: boolean, logExecutionTime?: boolean): Observable<any>;
    private getCompressedFile(cvs, quality, maxSizeInMB, currentStep);
    private getResultFile(blob);
    private generateResultFile(blob, name, type, lastModified);
    private blobToFile(blob, name, lastModified);
    private getCalculatedQuality(blob, quality, maxSizeInMB, currentStep);
    private checkCompressionStatus(cvs, blob, quality, maxSizeInMB, currentStep, newQuality);
    private isImgUsingAlpha(imageData);
    private logExecutionTime(logExecutionTime);
}
