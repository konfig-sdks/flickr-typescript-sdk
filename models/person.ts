/*
Flickr API Schema

A subset of Flickr's API defined in Swagger format.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Cover } from './cover';
import { GroupDescription } from './group-description';
import { PersonPhotos } from './person-photos';
import { PersonTimezone } from './person-timezone';
import { PhotoURLs } from './photo-urls';

/**
 * 
 * @export
 * @interface Person
 */
export interface Person {
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'description'?: GroupDescription;
    /**
     * 
     * @type {boolean}
     * @memberof Person
     */
    'can_buy_pro'?: boolean;
    /**
     * 
     * @type {Cover}
     * @memberof Person
     */
    'cover'?: Cover;
    /**
     * 
     * @type {PhotoURLs}
     * @memberof Person
     */
    'coverphoto'?: PhotoURLs;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'coverphoto_farm'?: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'coverphoto_server'?: string;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'disable_keyboard_shortcuts'?: GroupDescription;
    /**
     * 
     * @type {boolean}
     * @memberof Person
     */
    'expire'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Person
     */
    'has_stats'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'iconfarm'?: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'iconserver'?: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Person
     */
    'is_ad_free'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Person
     */
    'ispro'?: boolean;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'location'?: GroupDescription;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'mbox_sha1sum'?: GroupDescription;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'mobileurl'?: GroupDescription;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'nsid'?: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'path_alias'?: string;
    /**
     * 
     * @type {PersonPhotos}
     * @memberof Person
     */
    'photos'?: PersonPhotos;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'photosurl'?: GroupDescription;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'profileurl'?: GroupDescription;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'realname'?: GroupDescription;
    /**
     * 
     * @type {PersonTimezone}
     * @memberof Person
     */
    'timezone'?: PersonTimezone;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'unread_messages'?: GroupDescription;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'user_secret'?: string;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Person
     */
    'username'?: GroupDescription;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    'yintl'?: string;
}

