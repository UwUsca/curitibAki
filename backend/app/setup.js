const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))
const fs = require('fs')
const path = require('path')

const sequelize = require('./Database')

const { DUMP_DIR } = require('./globals')

const { 
  Usuario,
  Local,
} = require('./model')

function gerarHash(str) {
  const saltRounds = 10
  return bcrypt.hashAsync(str, saltRounds)
}

async function cadastrarUsuarios() {
  console.log('log > setup > Cadastrando usuários...')

  let usuarios = [
    {
      nome: 'Lucas Lima',
      email: 'lucascordeirodelima12@gmail.com',
      senha: await gerarHash('lucas').catch(console.error),
    }
  ]

  for (let usuario of usuarios) {
    await Usuario.create(usuario)
  }
}

async function cadastrarLocais() {
  console.log('log > setup > Cadastrando locais...')

  let json = fs.readFileSync(path.resolve(DUMP_DIR, 'locais.json'))
  let locais = JSON.parse(json)

  locais = locais.map((el) => {
    delete el.id_local
    return el
  })

  for (let local of locais) {
    await Local.create(local)
  }
}

module.exports = async () => {
  await sequelize.sync({ force: true })
  
  /*
  * Usuários
  */
  let usuarios = await Usuario.count()
  if (usuarios === 0) await cadastrarUsuarios()
  usuarios =  await Usuario.count()
  console.log('log > setup > Usuários: ', usuarios)

  /*
  * Locais
  */
  let locais = await Local.count()
  if (locais === 0) await cadastrarLocais()
  locais =  await Local.count()
  console.log('log > setup > Locais: ', locais)
}