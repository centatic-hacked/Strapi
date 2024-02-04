import type { Schema, Attribute } from '@strapi/strapi';

export interface ImageFormatImageLink extends Schema.Component {
  collectionName: 'components_image_format_image_links';
  info: {
    displayName: 'ImageLink';
    description: '';
  };
  attributes: {
    ImageURL: Attribute.String & Attribute.Required;
    AltText: Attribute.String & Attribute.Required;
  };
}

export interface ImageFormatImage extends Schema.Component {
  collectionName: 'components_image_format_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
    AltText: Attribute.String & Attribute.Required;
  };
}

export interface ListsNormalList extends Schema.Component {
  collectionName: 'components_lists_normal_lists';
  info: {
    displayName: 'Normal List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    ListItem: Attribute.Text & Attribute.Unique;
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
