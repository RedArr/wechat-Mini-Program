import { Base } from '../../untils/base.js';
class Home extends Base{
  constructor(){
    super();
  }
  
  getBannerData(id,callBack){
    var params = {
      url:'banner/'+id,
      
      sCallBack:function(res){
        callBack && callBack(res.items);
      }
    }
    this.request(params);
    
  }
}

export {Home};