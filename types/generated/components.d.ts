import type { Schema, Attribute } from '@strapi/strapi';

export interface ImageFormatImageLink extends Schema.Component {
  collectionName: 'components_image_format_image_links';
  info: {
    displayName: 'ImageLink';
    icon: 'landscape';
  };
  attributes: {
    Link: Attribute.String & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
  };
}

export interface ImageFormatImage extends Schema.Component {
  collectionName: 'components_image_format_images';
  info: {
    displayName: 'Image';
    icon: 'landscape';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
  };
}

export interface ListsNormalList extends Schema.Component {
  collectionName: 'components_lists_normal_lists';
  info: {
    displayName: 'Normal List';
    icon: 'bulletList';
  };
  attributes: {
    Con: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'image-format.image-link': ImageFormatImageLink;
      'image-format.image': ImageFormatImage;
      'lists.normal-list': ListsNormalList;
    }
  }
}
