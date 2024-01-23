'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 基础路由
  router.get('/alive', controller.home.alive);
};
