<template>
    <section id="home">
       <div class="header clearfix">
          <div class="userBox">
              <div class="userCont clearfix">
                  <div class="userLogo">

                  </div>
                  <div class="userInfo">
                    <div class="userName">
                     {{userName}} 
                    </div>
                    <div class="roomCard">
                            <p>
                              {{roomCardCount}}
                            </p>             
                    </div>

                  </div>
                  <div class="userHomePage">

                  </div>

              </div>
          </div>
          <div class="areaLogo">
             
          </div>


       </div>

        <ul class="playWayList clearfix">
            <li @click="select(item)" v-for="item in 11" :key="item">
              <img :src="'../../assets/img/qinglong/'+(item)+'.png'" alt="">
            </li>
            
        </ul>
      
        <div class="createRoomDg" v-show="showCreateRoomDg">
            <div class="closeBtn" @click="hideCreateRoomDg">
            </div>
            <div class="dgHeader">
              <img src="../../assets/img/createRoomText.png" alt="">
            </div>
            <ul class="tabCardBox clearfix">
              <li v-for="item in tabCardItem" :key="item">
                <img :src="item" alt="">
              </li>
            </ul>
            <div class="dgTitle">
                <div class="dgTitleBg">
                  <img src="../../assets/img/createTit.png" alt="">
                </div>
              
            </div>
            <div class="endPoints">
              
            </div>

        </div>
        <div class="mask"  v-show="showMask">
        
        </div>
    </section>
</template>
<script>
import "./index.less";
import wxShare from "../common/wxShare";
export default {
  data() {
    return {
      userName: "Janson",
      roomCardCount: "",
      playWayList: [],
      selectedRoom: "",
      showMask: true,
      showCreateRoomDg: true,
      tabCardItem:[
        '../../assets/img/nnsz.png',
        '../../assets/img/gdzj.png',
        '../../assets/img/zyqz.png',
        '../../assets/img/mpqz.png',
        '../../assets/img/tbnn.png',
      ]
    };
  },
  methods: {
    select(index) {
      this.selectedRoom = index;
      this.showMask = true;
      this.showCreateRoomDg = true;
    },
    hideCreateRoomDg() {
      this.showMask = false;
      this.showCreateRoomDg = false;
    }
  },
  components: {},
  mounted() {
    document.title = "pays";
    wxShare.redir();
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  },
  create() {
    document.getElementsByTagName("body")[0].scrollTop = 0;
  }
};
</script>
