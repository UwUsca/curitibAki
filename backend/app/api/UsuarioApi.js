const { Usuario } = require('../model')

module.exports = {
  async findAll(req, res) {
    let queryParams = {}

    const result = await Usuario.findAll(
      { ...queryParams }
    )

    res.send(result)
  },

  async findOneById(req, res) {
    const id = req.params.id

    const result = await Usuario.findByPk(id)

    res.send(result)
  },

  async create(req, res) {
    let data = req.body

    if (data['senha']) {
      data = { ...data, password: await Usuario.hashPassword(data['senha']) }
    }
    
    const result = await Usuario.create(data)
    
    if (result) res.sendStatus(200)
    else res.sendStatus(400)
  },

  async updateOneById(req, res) {
    const id = req.params.id

    let data = req.body

    if (data['senha']) {
      data = { ...data, password: await Usuario.hashPassword(data['senha']) }
    }

    const result = await Usuario.update(
      data,
      { where: { id_usuario: id } }
    )

    if (result) res.sendStatus(200)
    else res.sendStatus(400)
  },

  async delete(req, res) {
    const id = req.params.id

    const result = await Usuario.destroy(
      { where: { id_usuario: id } }
    )

    if (result) res.sendStatus(200)
    else res.sendStatus(400)
  }
}