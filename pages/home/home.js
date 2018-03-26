// pages/home/home.js
import {Home} from 'home-model.js';
var home = new Home();
Page({
  /**
   * 页面初始化
   */
  data:{
    
  },

  onLoad:function(){
    this.__loadData();

  
  },
  
  __loadData:function(){
    var id = 1;
    var data = home.getBannerData(id,(res)=>{
      //数据绑定
      console.log(res);
      this.setData({
        'bannerArr': res,
      });
    });
  },
  callBack:function(res){
    console.log(res);
  }
})