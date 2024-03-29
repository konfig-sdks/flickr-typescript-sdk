/*
Flickr API Schema

A subset of Flickr's API defined in Swagger format.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PublicGetPhotoLicensesResponseLicenses } from './public-get-photo-licenses-response-licenses';

/**
 * 
 * @export
 * @interface PublicGetPhotoLicensesResponse
 */
export interface PublicGetPhotoLicensesResponse {
    /**
     * 
     * @type {PublicGetPhotoLicensesResponseLicenses}
     * @memberof PublicGetPhotoLicensesResponse
     */
    'licenses'?: PublicGetPhotoLicensesResponseLicenses;
    /**
     * 
     * @type {string}
     * @memberof PublicGetPhotoLicensesResponse
     */
    'stat'?: string;
}

