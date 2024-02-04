import type { Schema, Attribute } from '@strapi/strapi';

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
      'lists.normal-list': ListsNormalList;
    }
  }
}
