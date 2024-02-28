'use strict';

/**
 * blog controller
 */


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog');



/*
const collectionType = 'blog';
const schema = require(`../content-types/${collectionType}/schema.json`);
const createPopulatedController = require('../../../helpers/populate');

module.exports = createPopulatedController(`api::${collectionType}.${collectionType}`, schema);
*/