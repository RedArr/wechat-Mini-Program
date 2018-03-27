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
    // 滚动栏
    home.getBannerData(id,(res)=>{
      //数据绑定
      this.setData({
        'bannerArr': res,
      });
    });

  // 主题
  var ids = "1,2,3";
    home.getThemeData(ids,(res)=>{
      // 数据绑定
      this.setData({
        'themeArr': res,
      });
    });

    home.getProductsData((data)=>{
      //数据绑定
      this.setData({
        'prodoctsArr': data,
      });
    });

  }

})