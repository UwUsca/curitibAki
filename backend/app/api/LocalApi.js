const slugify = require('slugify')
const update = require('immutability-helper')

const { Local } = require('../model')

module.exports = {
  async findAll(req, res) {
    const tipo = req.query.tipo

    let queryParams = {}

    if (tipo) queryParams = update(queryParams, {
      $merge: {
        where: { tipo: tipo }
      }
    })

    const result = await Local.findAll(
      queryParams
    )

    res.send(result)
  },

  async findOneById(req, res) {
    const id = req.params.id

    const result = await Local.findByPk(id)

    res.send(result)
  },

  async create(req, res) {
    let data = req.body
    
    data.slug = slugify(data.nome)
    if (req.file) data.foto = req.file.filename

    const result = await Local.create(data)
    
    if (result) res.sendStatus(200)
    else res.sendStatus(400)
  },

  async updateOneById(req, res) {
    const id = req.params.id

    let data = req.body
    
    data.slug = slugify(data.nome)
    if (req.file) data.foto = req.file.filename

    console.log(req.file, data)

    const result = await Local.update(
      data,
      { where: { id_local: id } }
    )

    if (result) res.sendStatus(200)
    else res.sendStatus(400)
  },

  async delete(req, res) {
    const id = req.params.id

    const result = await Local.destroy(
      { where: { id_local: id } }
    )

    if (result) res.sendStatus(200)
    else res.sendStatus(400)
  }
}