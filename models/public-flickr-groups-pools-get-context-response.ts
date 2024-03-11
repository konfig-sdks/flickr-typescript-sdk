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
 * @interface PublicFlickrGroupsPoolsGetContextResponse
 */
export interface PublicFlickrGroupsPoolsGetContextResponse {
    /**
     * 
     * @type {GroupDescription}
     * @memberof PublicFlickrGroupsPoolsGetContextResponse
     */
    'count'?: GroupDescription;
    /**
     * 
     * @type {ContextPhoto}
     * @memberof PublicFlickrGroupsPoolsGetContextResponse
     */
    'nextphoto'?: ContextPhoto;
    /**
     * 
     * @type {ContextPhoto}
     * @memberof PublicFlickrGroupsPoolsGetContextResponse
     */
    'prevphoto'?: ContextPhoto;
    /**
     * 
     * @type {string}
     * @memberof PublicFlickrGroupsPoolsGetContextResponse
     */
    'stat'?: string;
}
