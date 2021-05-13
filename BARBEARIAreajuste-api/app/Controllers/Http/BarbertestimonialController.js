'use strict'
const Barbertestimonials = use('App/Models/Barbertestimonial')
class BarbertestimonialController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barbertestimonials.query().paginate(page, perPage)
  }
  async create ({}) {
  }

  async store ({ request, response }){
    const dados = request.only(['barber_id', 'name', 'rate', 'body'])
    return await Barbertestimonials.create(dados)
  } 

  async show ({params, request, responser}) {
    return await Barbertestimonial.findOrFail(params.id);
  }

  async edit ({}) {
  }

  async update ({}) {

    const Barbertestimonial = await Barbertestimonial.findOrFail(params.id)

    const dados = request.only (['barber_id', 'name', 'rate', 'body'])
    

    Barbertestimonial.merge(dados)
    Barbertestimonial.save()
  }

  async destroy ({ params, request, response }) {
    const barbertestimonial = await Barbertestimonial.findOrFail(params.id)
    return await barbertestimonial.delete();
  }

}

module.exports = BarbertestimonialController
