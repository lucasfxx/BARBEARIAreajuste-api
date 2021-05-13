'use strict'
const Barberservices = use('App/Models/Barberservice')
class BarberserviceController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barberservices.query().paginate(page, perPage)
  }
  async create ({}) {
  }

  async store ({ request, response }){
    const dados = request.only('barber_id', 'name', 'price')
    return await Barberservices.create(dados)
  } 

  async show ({params, request, responser}) {
    return await Barberservice.findOrFail(params.id);
  }

  async edit ({}) {
  }

  async update ({}) {

    const Barberservice = await Barberservice.findOrFail(params.id)

    const dados = request.only (['barber_id', 'name', 'price'])
    

    Barberservice.merge(dados)
    Barberservice.save()
  }

  async destroy ({ params, request, response }) {
    const barberservice = await Barberservice.findOrFail(params.id)
    return await barberservice.delete();
  }

}

module.exports = BarberserviceController
