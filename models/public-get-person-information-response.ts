/*
Flickr API Schema

A subset of Flickr's API defined in Swagger format.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Person } from './person';

/**
 * 
 * @export
 * @interface PublicGetPersonInformationResponse
 */
export interface PublicGetPersonInformationResponse {
    /**
     * 
     * @type {Person}
     * @memberof PublicGetPersonInformationResponse
     */
    'person'?: Person;
    /**
     * 
     * @type {string}
     * @memberof PublicGetPersonInformationResponse
     */
    'stat'?: string;
}
