'use strict';

/**
 * Eventdetails.js controller
 *
 * @description: A set of functions called "actions" for managing `Eventdetails`.
 */

module.exports = {

  /**
   * Retrieve eventdetails records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.eventdetails.search(ctx.query);
    } else {
      return strapi.services.eventdetails.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a eventdetails record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.eventdetails.fetch(ctx.params);
  },

  /**
   * Count eventdetails records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.eventdetails.count(ctx.query);
  },

  /**
   * Create a/an eventdetails record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.eventdetails.add(ctx.request.body);
  },

  /**
   * Update a/an eventdetails record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.eventdetails.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an eventdetails record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.eventdetails.remove(ctx.params);
  }
};
