const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async alive() {
    const { ctx, app } = this;
    ctx.body = {
      code: 200,
      project: app.config.pkg.name,
      version: app.config.pkg.version,
    };
  }
}

module.exports = HomeController;
