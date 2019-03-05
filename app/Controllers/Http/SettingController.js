'use strict'
const Setting = use('App/Models/Setting')


class SettingController {
 
  async index ({ request, response, view }) {
    let setting = await Setting.all();
    return response.status(200).json(setting);
  }

  
  async create ({ request, response, view }) {

  }

  
  async store ({ request, response }) {
    let setting = await Setting.create(request.all());
    return response.created(setting);
  }

  
  async show ({ params, request, response, view }) {
    let {id} = params;
    let setting = await Setting.findOrFail(id);
    return response.ok(setting);
  }

  
  async edit ({ params, request, response, view }) {
  }

  
  async update ({ params, request, response }) {
    let {id} = params;
    let setting = await Setting.findOrFail(id);
    if(request._qs['type']==1){
      setting.merge(request.all())
    }
    setting.merge(request.all())
    await setting.save()
    return response.ok(setting)
  }

  
  async destroy ({ params, request, response }) {
    let {id} = params;
    let setting = await Setting.findOrFail(id);
    await setting.delete();
    return response.ok({message : "Recurso eliminado"});
  }
}

module.exports = SettingController
