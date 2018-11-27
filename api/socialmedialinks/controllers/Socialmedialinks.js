'use strict';

/**
 * Socialmedialinks.js controller
 *
 * @description: A set of functions called "actions" for managing `Socialmedialinks`.
 */

module.exports = {

  /**
   * Retrieve socialmedialinks records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.socialmedialinks.search(ctx.query);
    } else {
      return strapi.services.socialmedialinks.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a socialmedialinks record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.socialmedialinks.fetch(ctx.params);
  },

  /**
   * Count socialmedialinks records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.socialmedialinks.count(ctx.query);
  },

  /**
   * Create a/an socialmedialinks record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.socialmedialinks.add(ctx.request.body);
  },

  /**
   * Update a/an socialmedialinks record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.socialmedialinks.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an socialmedialinks record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.socialmedialinks.remove(ctx.params);
  }
};
