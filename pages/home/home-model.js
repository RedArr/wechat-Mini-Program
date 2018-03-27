import { Base } from '../../untils/base.js';
class Home extends Base{
  constructor(){
    super();
  }
  
  getBannerData(id,callback){
    var params = {
      url:'banner/'+id,
      
      sCallback:function(res){
        callback && callback(res.items);
      }
    }
    this.request(params);
    
  }

  getThemeData(ids,callback){
    var params = {
      url : 'theme?ids='+ids,
      sCallback:function(res){
        callback && callback(res);
      }
    }
    this.request(params);
  }

  getProductsData(callback){
    var params = {
      url: 'product/recent',
      sCallback: function(data){
        console.log(data);
        callback && callback(data);
      }
    }
    this.request(params);
  }
}

export {Home};