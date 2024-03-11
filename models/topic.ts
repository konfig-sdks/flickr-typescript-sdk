/*
Flickr API Schema

A subset of Flickr's API defined in Swagger format.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GroupDescription } from './group-description';

/**
 * 
 * @export
 * @interface Topic
 */
export interface Topic {
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'author'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Topic
     */
    'author_is_deleted'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'author_path_alias'?: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'authorname'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Topic
     */
    'can_delete'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Topic
     */
    'can_edit'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Topic
     */
    'can_reply'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Topic
     */
    'count_replies'?: number;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'datecreate'?: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'datelastpost'?: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'iconfarm'?: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'iconserver'?: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Topic
     */
    'is_locked'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Topic
     */
    'is_pro'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Topic
     */
    'is_sticky'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'last_reply'?: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'lastedit'?: string;
    /**
     * 
     * @type {GroupDescription}
     * @memberof Topic
     */
    'message'?: GroupDescription;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'role'?: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    'subject'?: string;
}
