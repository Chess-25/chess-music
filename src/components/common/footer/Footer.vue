<template>
  <div id="footer">
    <div class="footer-left">
      <div class="wrap-v2">
        <div class="link">
          <a v-for="item in footerLinks" >{{item.title}}<span class="line">|</span></a>
        </div>
        <div class="copyright">
          <span>网易公司版权所有©1997-2020</span>
          <span>
          杭州乐读科技有限公司运营：
          <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
             rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
        </span>
        </div>
        <div class="report">
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>
          举报邮箱：
          <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
        </span>
        </div>
        <div class="info">
          <span>粤B2-20090191-18</span>
          <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer"
             target="_blank">
            工业和信息化部备案管理系统网站
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {footerLinks,footerImages} from "common/local-data";
  export default {
    name: "Footer",
    data(){
      return{
        footerLinks:[...footerLinks]
      }
    }
  }
</script>

<style scoped>
  .footer-left{
    height: 172px;
    background-color: #f2f2f2;
    color: #666;
    font-size: 14px;
    border-top: 1px solid #d3d3d3;
  }
  .copyright span{
    margin-right: 15px;
  }
  .link{
    display: flex;
  }
  .link a{
    color: #999;
  }
  .line{
    margin: 0 10px;
    color: #999;
  }
</style>