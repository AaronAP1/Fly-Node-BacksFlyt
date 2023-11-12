
const { models } = require('../libs/sequelize');

class vuelosService { 
  
    constructor() {}

    async find() {
      const res = await models.vueloss.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.vueloss.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.vueloss.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }
  }
  
  module.exports = vuelosService;