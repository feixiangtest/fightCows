<template>
  <div id="userCenter">
      <div class="header clearfix">
        <div class="userLogo">
            <div class="userPic">
                <img src="../../assets/img/userCenterPic.png" alt="">
            </div>
        </div>
        <div class="userName">
          <p>
              {{userName}}
          </p>
          <div class="authority">
              <div class="authorityPic">
                <img src="../../assets/img/homepage_phone.png" alt="">
              </div>
          </div>
        </div>

        <div class="roomCardNum">
          <h3>
            {{0}}张
          </h3>
          <p>
            房卡
          </p>
        </div>


      </div>
      
      <ul class="gameTabList">
          <li>


          </li>
         

      </ul>



  </div>
</template>
<script>
import "./index.less";
export default {
  data() {
    return {
      userName: "Su"
    };
  },
  methods: {}
};
</script>
