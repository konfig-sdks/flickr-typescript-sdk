/*
Flickr API Schema

A subset of Flickr's API defined in Swagger format.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContextPhoto } from './context-photo';
import { GroupDescription } from './group-description';

/**
 * 
 * @export
 * @interface PublicGetPhotoSetContextResponse
 */
export interface PublicGetPhotoSetContextResponse {
    /**
     * 
     * @type {GroupDescription}
     * @memberof PublicGetPhotoSetContextResponse
     */
    'count'?: GroupDescription;
    /**
     * 
     * @type {ContextPhoto}
     * @memberof PublicGetPhotoSetContextResponse
     */
    'nextphoto'?: ContextPhoto;
    /**
     * 
     * @type {ContextPhoto}
     * @memberof PublicGetPhotoSetContextResponse
     */
    'prevphoto'?: ContextPhoto;
    /**
     * 
     * @type {string}
     * @memberof PublicGetPhotoSetContextResponse
     */
    'stat'?: string;
}
