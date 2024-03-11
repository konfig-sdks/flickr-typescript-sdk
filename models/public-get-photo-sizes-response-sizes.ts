/*
Flickr API Schema

A subset of Flickr's API defined in Swagger format.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Size } from './size';

/**
 * 
 * @export
 * @interface PublicGetPhotoSizesResponseSizes
 */
export interface PublicGetPhotoSizesResponseSizes {
    /**
     * 
     * @type {number}
     * @memberof PublicGetPhotoSizesResponseSizes
     */
    'canblog'?: number;
    /**
     * 
     * @type {number}
     * @memberof PublicGetPhotoSizesResponseSizes
     */
    'candownload'?: number;
    /**
     * 
     * @type {number}
     * @memberof PublicGetPhotoSizesResponseSizes
     */
    'canprint'?: number;
    /**
     * 
     * @type {Array<Size>}
     * @memberof PublicGetPhotoSizesResponseSizes
     */
    'sizes'?: Array<Size>;
}

