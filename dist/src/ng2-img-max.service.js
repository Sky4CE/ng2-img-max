import { Injectable, Inject, forwardRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ImgMaxSizeService } from './img-max-size.service';
import { ImgMaxPXSizeService } from './img-maxpx-size.service';
import { ImgExifService } from './img-exif.service';
var Ng2ImgMaxService = (function () {
    function Ng2ImgMaxService(imgMaxSizeService, imgMaxPXSizeService, imageExifService) {
        this.imgMaxSizeService = imgMaxSizeService;
        this.imgMaxPXSizeService = imgMaxPXSizeService;
        this.imageExifService = imageExifService;
    }
    Ng2ImgMaxService.prototype.compress = function (files, maxSizeInMB, ignoreAlpha, logExecutionTime) {
        var _this = this;
        if (ignoreAlpha === void 0) { ignoreAlpha = false; }
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        var compressedFileSubject = new Subject();
        files.forEach(function (file) {
            _this.compressImage(file, maxSizeInMB, ignoreAlpha, logExecutionTime).subscribe(function (value) {
                compressedFileSubject.next(value);
            }, function (error) {
                compressedFileSubject.error(error);
            });
        });
        return compressedFileSubject.asObservable();
    };
    Ng2ImgMaxService.prototype.resize = function (files, maxWidth, maxHeight, logExecutionTime) {
        var _this = this;
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        var resizedFileSubject = new Subject();
        files.forEach(function (file) {
            _this.resizeImage(file, maxWidth, maxHeight, logExecutionTime).subscribe(function (value) {
                resizedFileSubject.next(value);
            }, function (error) {
                resizedFileSubject.error(error);
            });
        });
        return resizedFileSubject.asObservable();
    };
    Ng2ImgMaxService.prototype.compressImage = function (file, maxSizeInMB, ignoreAlpha, logExecutionTime) {
        if (ignoreAlpha === void 0) { ignoreAlpha = false; }
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        return this.imgMaxSizeService.compressImage(file, maxSizeInMB, ignoreAlpha, logExecutionTime);
    };
    Ng2ImgMaxService.prototype.resizeImage = function (file, maxWidth, maxHeight, logExecutionTime) {
        if (logExecutionTime === void 0) { logExecutionTime = false; }
        return this.imgMaxPXSizeService.resizeImage(file, maxWidth, maxHeight, logExecutionTime);
    };
    Ng2ImgMaxService.prototype.getEXIFOrientedImage = function (image) {
        return this.imageExifService.getOrientedImage(image);
    };
    Ng2ImgMaxService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Ng2ImgMaxService.ctorParameters = function () { return [
        { type: ImgMaxSizeService, decorators: [{ type: Inject, args: [forwardRef(function () { return ImgMaxSizeService; }),] },] },
        { type: ImgMaxPXSizeService, decorators: [{ type: Inject, args: [forwardRef(function () { return ImgMaxPXSizeService; }),] },] },
        { type: ImgExifService, decorators: [{ type: Inject, args: [forwardRef(function () { return ImgExifService; }),] },] },
    ]; };
    return Ng2ImgMaxService;
}());
export { Ng2ImgMaxService };
//# sourceMappingURL=ng2-img-max.service.js.map