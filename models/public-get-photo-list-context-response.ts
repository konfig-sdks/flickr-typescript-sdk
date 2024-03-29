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
 * @interface PublicGetPhotoListContextResponse
 */
export interface PublicGetPhotoListContextResponse {
    /**
     * 
     * @type {GroupDescription}
     * @memberof PublicGetPhotoListContextResponse
     */
    'count'?: GroupDescription;
    /**
     * 
     * @type {ContextPhoto}
     * @memberof PublicGetPhotoListContextResponse
     */
    'nextphoto'?: ContextPhoto;
    /**
     * 
     * @type {ContextPhoto}
     * @memberof PublicGetPhotoListContextResponse
     */
    'prevphoto'?: ContextPhoto;
    /**
     * 
     * @type {string}
     * @memberof PublicGetPhotoListContextResponse
     */
    'stat'?: string;
}

