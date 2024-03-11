<div align="center">

[![Visit Flickr](./header.png)](https://flickr.com)

# [Flickr](https://flickr.com)<a id="flickr"></a>

A subset of Flickr's API defined in Swagger format.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`flickr.public.flickrGroupsPoolsGetContext`](#flickrpublicflickrgroupspoolsgetcontext)
  * [`flickr.public.getAccessToken`](#flickrpublicgetaccesstoken)
  * [`flickr.public.getAlbumPhotos`](#flickrpublicgetalbumphotos)
  * [`flickr.public.getFavoritePhotos`](#flickrpublicgetfavoritephotos)
  * [`flickr.public.getFavoritesContext`](#flickrpublicgetfavoritescontext)
  * [`flickr.public.getFlickrTestEcho`](#flickrpublicgetflickrtestecho)
  * [`flickr.public.getGalleryPhotos`](#flickrpublicgetgalleryphotos)
  * [`flickr.public.getGroupDiscussionTopics`](#flickrpublicgetgroupdiscussiontopics)
  * [`flickr.public.getGroupInfo`](#flickrpublicgetgroupinfo)
  * [`flickr.public.getGroupPoolPhotos`](#flickrpublicgetgrouppoolphotos)
  * [`flickr.public.getGroupTopicInfo`](#flickrpublicgetgrouptopicinfo)
  * [`flickr.public.getGroupTopicRepliesInfo`](#flickrpublicgetgrouptopicrepliesinfo)
  * [`flickr.public.getOAuthToken`](#flickrpublicgetoauthtoken)
  * [`flickr.public.getPersonInformation`](#flickrpublicgetpersoninformation)
  * [`flickr.public.getPhotoExif`](#flickrpublicgetphotoexif)
  * [`flickr.public.getPhotoInfo`](#flickrpublicgetphotoinfo)
  * [`flickr.public.getPhotoLicenses`](#flickrpublicgetphotolicenses)
  * [`flickr.public.getPhotoListContext`](#flickrpublicgetphotolistcontext)
  * [`flickr.public.getPhotoSetContext`](#flickrpublicgetphotosetcontext)
  * [`flickr.public.getPhotoSizes`](#flickrpublicgetphotosizes)
  * [`flickr.public.getPhotostreamContext`](#flickrpublicgetphotostreamcontext)
  * [`flickr.public.getUserAlbums`](#flickrpublicgetuseralbums)
  * [`flickr.public.getUserPhotos`](#flickrpublicgetuserphotos)
  * [`flickr.public.searchPhotos`](#flickrpublicsearchphotos)
  * [`flickr.public.uploadPhoto`](#flickrpublicuploadphoto)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Flickr&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Flickr } from "flickr-typescript-sdk";

const flickr = new Flickr({
  // Defining the base path is optional and defaults to https://api.flickr.com/services
  // basePath: "https://api.flickr.com/services",
});

const flickrGroupsPoolsGetContextResponse =
  await flickr.public.flickrGroupsPoolsGetContext({
    apiKey: "apiKey_example",
    photoId: "4",
  });

console.log(flickrGroupsPoolsGetContextResponse);
```

## Reference<a id="reference"></a>


### `flickr.public.flickrGroupsPoolsGetContext`<a id="flickrpublicflickrgroupspoolsgetcontext"></a>

Returns next and previous photos for a photo in a group pool

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const flickrGroupsPoolsGetContextResponse =
  await flickr.public.flickrGroupsPoolsGetContext({
    apiKey: "apiKey_example",
    photoId: "4",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photoId: `string`<a id="photoid-string"></a>

##### groupId: `string`<a id="groupid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicFlickrGroupsPoolsGetContextResponse](./models/public-flickr-groups-pools-get-context-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.groups.pools.getContext` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getAccessToken`<a id="flickrpublicgetaccesstoken"></a>

Returns an access token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccessTokenResponse = await flickr.public.getAccessToken({
  oauthConsumerKey: "oauthConsumerKey_example",
  oauthNonce: "oauthNonce_example",
  oauthTimestamp: "4",
  oauthSignatureMethod: "oauthSignatureMethod_example",
  oauthVersion: "oauthVersion_example",
  oauthSignature: "oauthSignature_example",
  oauthVerifier: "oauthVerifier_example",
  oauthToken: "oauthToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oauthConsumerKey: `string`<a id="oauthconsumerkey-string"></a>

##### oauthNonce: `string`<a id="oauthnonce-string"></a>

##### oauthTimestamp: `string`<a id="oauthtimestamp-string"></a>

##### oauthSignatureMethod: `string`<a id="oauthsignaturemethod-string"></a>

##### oauthVersion: `string`<a id="oauthversion-string"></a>

##### oauthSignature: `string`<a id="oauthsignature-string"></a>

##### oauthVerifier: `string`<a id="oauthverifier-string"></a>

##### oauthToken: `string`<a id="oauthtoken-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth/access_token` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getAlbumPhotos`<a id="flickrpublicgetalbumphotos"></a>

Returns a list of photos in an album.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAlbumPhotosResponse = await flickr.public.getAlbumPhotos({
  apiKey: "apiKey_example",
  photosetId: "4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photosetId: `string`<a id="photosetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetAlbumPhotosResponse](./models/public-get-album-photos-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photosets.getPhotos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getFavoritePhotos`<a id="flickrpublicgetfavoritephotos"></a>

Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFavoritePhotosResponse = await flickr.public.getFavoritePhotos({
  apiKey: "apiKey_example",
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### userId: `string`<a id="userid-string"></a>

##### minFaveDate: `number`<a id="minfavedate-number"></a>

##### maxFaveDate: `number`<a id="maxfavedate-number"></a>

##### page: `number`<a id="page-number"></a>

##### perPage: `number`<a id="perpage-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetFavoritePhotosResponse](./models/public-get-favorite-photos-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.favorites.getList` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getFavoritesContext`<a id="flickrpublicgetfavoritescontext"></a>

Returns next and previous favorites for a photo in a user's favorites

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFavoritesContextResponse = await flickr.public.getFavoritesContext({
  apiKey: "apiKey_example",
  photoId: "4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photoId: `string`<a id="photoid-string"></a>

##### userId: `string`<a id="userid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetFavoritesContextResponse](./models/public-get-favorites-context-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.favorites.getContext` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getFlickrTestEcho`<a id="flickrpublicgetflickrtestecho"></a>

Echos the input parameters back in the response

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFlickrTestEchoResponse = await flickr.public.getFlickrTestEcho({
  apiKey: "apiKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### echo: `string`<a id="echo-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetFlickrTestEchoResponse](./models/public-get-flickr-test-echo-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.test.echo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getGalleryPhotos`<a id="flickrpublicgetgalleryphotos"></a>

Returns a list of photos in a gallery.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGalleryPhotosResponse = await flickr.public.getGalleryPhotos({
  apiKey: "apiKey_example",
  galleryId: "galleryId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### galleryId: `string`<a id="galleryid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetGalleryPhotosResponse](./models/public-get-gallery-photos-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.galleries.getPhotos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getGroupDiscussionTopics`<a id="flickrpublicgetgroupdiscussiontopics"></a>

Get a list of discussion topics in a group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupDiscussionTopicsResponse =
  await flickr.public.getGroupDiscussionTopics({
    apiKey: "apiKey_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### groupId: `string`<a id="groupid-string"></a>

##### page: `number`<a id="page-number"></a>

##### perPage: `number`<a id="perpage-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetGroupDiscussionTopicsResponse](./models/public-get-group-discussion-topics-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.groups.discuss.topics.getList` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getGroupInfo`<a id="flickrpublicgetgroupinfo"></a>

Get information about a group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupInfoResponse = await flickr.public.getGroupInfo({
  apiKey: "apiKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### groupId: `string`<a id="groupid-string"></a>

##### groupPathAlias: `string`<a id="grouppathalias-string"></a>

##### lang: `string`<a id="lang-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetGroupInfoResponse](./models/public-get-group-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.groups.getInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getGroupPoolPhotos`<a id="flickrpublicgetgrouppoolphotos"></a>

Returns a list of pool photos for a given group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupPoolPhotosResponse = await flickr.public.getGroupPoolPhotos({
  apiKey: "apiKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### groupId: `string`<a id="groupid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetGroupPoolPhotosResponse](./models/public-get-group-pool-photos-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.groups.pools.getPhotos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getGroupTopicInfo`<a id="flickrpublicgetgrouptopicinfo"></a>

Get information about a group discussion topic

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupTopicInfoResponse = await flickr.public.getGroupTopicInfo({
  apiKey: "apiKey_example",
  topicId: "4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### topicId: `string`<a id="topicid-string"></a>

##### groupId: `string`<a id="groupid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetGroupTopicInfoResponse](./models/public-get-group-topic-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.groups.discuss.topics.getInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getGroupTopicRepliesInfo`<a id="flickrpublicgetgrouptopicrepliesinfo"></a>

Get information on a group topic reply

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupTopicRepliesInfoResponse =
  await flickr.public.getGroupTopicRepliesInfo({
    apiKey: "apiKey_example",
    topicId: "4",
    replyId: "4",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### topicId: `string`<a id="topicid-string"></a>

##### replyId: `string`<a id="replyid-string"></a>

##### groupId: `string`<a id="groupid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetGroupTopicRepliesInfoResponse](./models/public-get-group-topic-replies-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.groups.discuss.replies.getInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getOAuthToken`<a id="flickrpublicgetoauthtoken"></a>

Returns an oauth token and oauth token secret

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOAuthTokenResponse = await flickr.public.getOAuthToken({
  oauthConsumerKey: "oauthConsumerKey_example",
  oauthNonce: "oauthNonce_example",
  oauthTimestamp: "4",
  oauthSignatureMethod: "oauthSignatureMethod_example",
  oauthVersion: "oauthVersion_example",
  oauthSignature: "oauthSignature_example",
  oauthCallback: "httpjUR,rZ#UM/?R,Fp^l6$ARj",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### oauthConsumerKey: `string`<a id="oauthconsumerkey-string"></a>

##### oauthNonce: `string`<a id="oauthnonce-string"></a>

##### oauthTimestamp: `string`<a id="oauthtimestamp-string"></a>

##### oauthSignatureMethod: `string`<a id="oauthsignaturemethod-string"></a>

##### oauthVersion: `string`<a id="oauthversion-string"></a>

##### oauthSignature: `string`<a id="oauthsignature-string"></a>

##### oauthCallback: `string`<a id="oauthcallback-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth/request_token` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getPersonInformation`<a id="flickrpublicgetpersoninformation"></a>

Returns a person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPersonInformationResponse = await flickr.public.getPersonInformation({
  apiKey: "apiKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### userId: `string`<a id="userid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetPersonInformationResponse](./models/public-get-person-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.people.getInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getPhotoExif`<a id="flickrpublicgetphotoexif"></a>

Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhotoExifResponse = await flickr.public.getPhotoExif({
  apiKey: "apiKey_example",
  photoId: "4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photoId: `string`<a id="photoid-string"></a>

##### secret: `string`<a id="secret-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetPhotoExifResponse](./models/public-get-photo-exif-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photos.getExif` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getPhotoInfo`<a id="flickrpublicgetphotoinfo"></a>

Returns a photo

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhotoInfoResponse = await flickr.public.getPhotoInfo({
  apiKey: "apiKey_example",
  photoId: "4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photoId: `string`<a id="photoid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetPhotoInfoResponse](./models/public-get-photo-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photos.getInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getPhotoLicenses`<a id="flickrpublicgetphotolicenses"></a>

Fetches a list of available photo licenses for Flickr

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhotoLicensesResponse = await flickr.public.getPhotoLicenses({
  apiKey: "apiKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetPhotoLicensesResponse](./models/public-get-photo-licenses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photos.licenses.getInfo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getPhotoListContext`<a id="flickrpublicgetphotolistcontext"></a>

Returns next and previous photos in a photo list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhotoListContextResponse = await flickr.public.getPhotoListContext({
  apiKey: "apiKey_example",
  photoId: "4",
  photolistId: "photolistId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photoId: `string`<a id="photoid-string"></a>

##### photolistId: `string`<a id="photolistid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetPhotoListContextResponse](./models/public-get-photo-list-context-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photolist.getContext` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getPhotoSetContext`<a id="flickrpublicgetphotosetcontext"></a>

Returns next and previous photos for a photo in a set

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhotoSetContextResponse = await flickr.public.getPhotoSetContext({
  apiKey: "apiKey_example",
  photoId: "4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photoId: `string`<a id="photoid-string"></a>

##### photosetId: `string`<a id="photosetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetPhotoSetContextResponse](./models/public-get-photo-set-context-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photosets.getContext` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getPhotoSizes`<a id="flickrpublicgetphotosizes"></a>

Returns photo sizes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhotoSizesResponse = await flickr.public.getPhotoSizes({
  apiKey: "apiKey_example",
  photoId: "4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photoId: `string`<a id="photoid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetPhotoSizesResponse](./models/public-get-photo-sizes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photos.getSizes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getPhotostreamContext`<a id="flickrpublicgetphotostreamcontext"></a>

Returns next and previous photos for a photo in a photostream

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhotostreamContextResponse = await flickr.public.getPhotostreamContext(
  {
    apiKey: "apiKey_example",
    photoId: "4",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photoId: `string`<a id="photoid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetPhotostreamContextResponse](./models/public-get-photostream-context-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photos.getContext` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getUserAlbums`<a id="flickrpublicgetuseralbums"></a>

Returns the albums belonging to the specified user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserAlbumsResponse = await flickr.public.getUserAlbums({
  apiKey: "apiKey_example",
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### userId: `string`<a id="userid-string"></a>

##### page: `number`<a id="page-number"></a>

##### perPage: `number`<a id="perpage-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetUserAlbumsResponse](./models/public-get-user-albums-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photosets.getList` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.getUserPhotos`<a id="flickrpublicgetuserphotos"></a>

Return photos from the given user's photostream

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPhotosResponse = await flickr.public.getUserPhotos({
  apiKey: "apiKey_example",
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### userId: `string`<a id="userid-string"></a>

##### safeSearch: `number`<a id="safesearch-number"></a>

##### minUploadDate: `number`<a id="minuploaddate-number"></a>

##### maxUploadDate: `number`<a id="maxuploaddate-number"></a>

##### minTakenDate: `number`<a id="mintakendate-number"></a>

##### maxTakenDate: `number`<a id="maxtakendate-number"></a>

##### contentType: `number`<a id="contenttype-number"></a>

##### privacyFilter: `number`<a id="privacyfilter-number"></a>

##### page: `number`<a id="page-number"></a>

##### perPage: `number`<a id="perpage-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PublicGetUserPhotosResponse](./models/public-get-user-photos-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.people.getPhotos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.searchPhotos`<a id="flickrpublicsearchphotos"></a>

Return a list of photos matching some criteria.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchPhotosResponse = await flickr.public.searchPhotos({
  apiKey: "apiKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### text: `string`<a id="text-string"></a>

A free text search. Photos who\'s title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character.

##### tags: `string`<a id="tags-string"></a>

A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character.

##### userId: `string`<a id="userid-string"></a>

The NSID of the user who\'s photo to search. If this parameter isn\'t passed then everybody\'s public photos will be searched. A value of \"me\" will search against the calling user\'s photos for authenticated calls.

##### minUploadDate: `string`<a id="minuploaddate-string"></a>

Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.

##### maxUploadDate: `string`<a id="maxuploaddate-string"></a>

Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.

##### minTakenDate: `string`<a id="mintakendate-string"></a>

Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.

##### maxTakenDate: `string`<a id="maxtakendate-string"></a>

Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.

##### license: `string`<a id="license-string"></a>

The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated.

##### sort: `string`<a id="sort-string"></a>

The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:   date-posted-asc,   date-posted-desc,   date-taken-asc,   date-taken-desc,   interestingness-desc,   interestingness-asc, and   relevance. 

##### privacyFilter: `number`<a id="privacyfilter-number"></a>

Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,   1: public photos,   2: private photos visible to friends,   3: private photos visible to family,   4: private photos visible to friends & family,   5: completely private photos 

##### bbox: `string`<a id="bbox-string"></a>

A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched.

##### accuracy: `string`<a id="accuracy-string"></a>

Recorded accuracy level of the location information. Current range is 1-16:   World level is 1   Country is ~3   Region is ~6   City is ~11   Street is ~16 

##### safeSearch: `number`<a id="safesearch-number"></a>

Safe search setting:   1: for safe,   2: for moderate,   3: for restricted 

##### contentType: `number`<a id="contenttype-number"></a>

Content Type setting:   1: photos only.   2: screenshots only.   3: \'other\' only.   4: photos and screenshots.   5: screenshots and \'other\'.   6: photos and \'other\'.   7: photos, screenshots, and \'other\' (all). 

##### machineTags: `string`<a id="machinetags-string"></a>

Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the \'dc\' namespace : \"machine_tags\" => \"dc:\" Find photos with a title in the \'dc\' namespace : \"machine_tags\" => \"dc:title=\" Find photos titled \"mr. camera\" in the \'dc\' namespace : \"machine_tags\" => \"dc:title=\\\"mr. camera\\\" Find photos whose value is \"mr. camera\" : \"machine_tags\" => \"*:*=\\\"mr. camera\\\"\" Find photos that have a title, in any namespace : \"machine_tags\" => \"*:title=\" Find photos that have a title, in any namespace, whose value is \"mr. camera\" : \"machine_tags\" => \"*:title=\\\"mr. camera\\\"\" Find photos, in the \'dc\' namespace whose value is \"mr. camera\" : \"machine_tags\" => \"dc:*=\\\"mr. camera\\\"\" Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. \"AND\" queries are limited to (16) machine tags. \"OR\" queries are limited to (8). 

##### machineTagMode: `string`<a id="machinetagmode-string"></a>

Either \'any\' for an OR combination of tags, or \'all\' for an AND combination. Defaults to \'any\' if not specified.

##### groupId: `string`<a id="groupid-string"></a>

The id of a group who\'s pool to search. If specified, only matching photos posted to the group\'s pool will be returned.

##### contacts: `string`<a id="contacts-string"></a>

Search your contacts. Either \'all\' or \'ff\' for just friends and family. (Experimental)

##### woeId: `string`<a id="woeid-string"></a>

A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present).

##### placeId: `string`<a id="placeid-string"></a>

A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future). 

##### media: `string`<a id="media-string"></a>

Filter results by media type. Possible values are all (default), photos or videos

##### hasGeo: `string`<a id="hasgeo-string"></a>

Any photo that has been geotagged, or if the value is \"0\" any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future). 

##### geoContext: `string`<a id="geocontext-string"></a>

Geo context is a numeric value representing the photo\'s geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken \"indoors\" or \"outdoors\". The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future). 

##### lat: `string`<a id="lat-string"></a>

A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future). 

##### lon: `string`<a id="lon-string"></a>

A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future). 

##### radius: `number`<a id="radius-number"></a>

A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km).

##### radiusUnits: `string`<a id="radiusunits-string"></a>

The unit of measure when doing radial geo queries. Valid options are \"mi\" (miles) and \"km\" (kilometers). The default is \"km\".

##### isCommons: `boolean`<a id="iscommons-boolean"></a>

Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false.

##### inGallery: `boolean`<a id="ingallery-boolean"></a>

Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos.

##### isGetty: `boolean`<a id="isgetty-boolean"></a>

Limit the scope of the search to only photos that are for sale on Getty. Default is false.

##### perPage: `number`<a id="perpage-number"></a>

Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.

##### page: `number`<a id="page-number"></a>

The page of results to return. If this argument is omitted, it defaults to 1.

#### 🔄 Return<a id="🔄-return"></a>

[PublicSearchPhotosResponse](./models/public-search-photos-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest?method&#x3D;flickr.photos.search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `flickr.public.uploadPhoto`<a id="flickrpublicuploadphoto"></a>

Uploads a new photo to Flickr

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadPhotoResponse = await flickr.public.uploadPhoto({
  api_key: "api_key_example",
  content_type: "1",
  hidden: "1",
  is_family: "0",
  is_friend: "0",
  is_public: "0",
  photo: fs.readFileSync("/path/to/file"),
  safety_level: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### apiKey: `string`<a id="apikey-string"></a>

##### photo: `Uint8Array | File | buffer.File`<a id="photo-uint8array--file--bufferfile"></a>

##### tags: `string`<a id="tags-string"></a>

##### title: `string`<a id="title-string"></a>

##### description: `string`<a id="description-string"></a>

##### contentType: `string`<a id="contenttype-string"></a>

##### hidden: `string`<a id="hidden-string"></a>

##### isFamily: `string`<a id="isfamily-string"></a>

##### isFriend: `string`<a id="isfriend-string"></a>

##### isPublic: `string`<a id="ispublic-string"></a>

##### safetyLevel: `string`<a id="safetylevel-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
