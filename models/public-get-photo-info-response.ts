/*
Flickr API Schema

A subset of Flickr's API defined in Swagger format.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Photo } from './photo';

/**
 * 
 * @export
 * @interface PublicGetPhotoInfoResponse
 */
export interface PublicGetPhotoInfoResponse {
    /**
     * 
     * @type {Photo}
     * @memberof PublicGetPhotoInfoResponse
     */
    'photo'?: Photo;
    /**
     * 
     * @type {string}
     * @memberof PublicGetPhotoInfoResponse
     */
    'stat'?: string;
}
