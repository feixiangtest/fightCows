<template>
    <section id="home">
       <div class="header clearfix">
          <div class="userBox">
              <div class="userCont clearfix">
                  <div class="userLogo" @click="$router.push('/usercenter')">
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
              <img :src="playWayImages[item-1]" alt="">
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
            <div class="createRoomPanel clearfix endPoints">
                <h3>
                  底分:
                </h3>
                <ul class="panelCont clearfix">
                    <li class="clearfix" v-for="i in 5" :key="i" @click="selectPoint(i)">
                       <div class="panelIcon" >
                         <img src='../../assets/img/checkedIcon.png' alt="" v-if="selectPoints==i">
                         <img src='../../assets/img/uncheckedIcon.png' alt="" v-else>
                       </div>
                       <p>
                         {{i}}分
                       </p>
                       
                    </li>
                    
                </ul>
            </div>
            <div class="createRoomPanel clearfix rules">
                <h3>
                  规则:
                </h3>
                <ul class="panelCont clearfix">
                    <li class="clearfix" v-for="i in 2" :key="i" @click="selectRule(i)">
                       <div class="panelIcon" >
                         <img src='../../assets/img/checkedIcon.png' alt="" v-if="selectedRule==i">
                         <img src='../../assets/img/uncheckedIcon.png' alt="" v-else>
                       </div>
                       <p>
                         {{rulesText[i-1]}}
                       </p>
                       
                    </li>
                    
                </ul>
            </div>
            <div class="createRoomPanel clearfix pokerType">
                <h3>
                  牌型:
                </h3>
                <ul class="panelCont clearfix">
                    <li class="clearfix" v-for="i in 3" :key="i" @click="selectType(i)">
                       <div class="panelIcon" >
                         <img src='../../assets/img/checkedIcon.png' alt="" v-if="selectedType==i">
                         <img src='../../assets/img/uncheckedIcon.png' alt="" v-else>
                       </div>
                       <p>
                         {{pokerTypeText[i-1]}}
                       </p>
                       
                    </li>
                    
                </ul>
            </div>
           <div class="createRoomPanel clearfix playTime">
                <h3>
                  局数:
                </h3>
                <ul class="panelCont clearfix">
                    <li class="clearfix" v-for="i in 2" :key="i" @click="selectTime(i)">
                       <div class="panelIcon" >
                         <img src='../../assets/img/checkedIcon.png' alt="" v-if="selectedTime==i">
                         <img src='../../assets/img/uncheckedIcon.png' alt="" v-else>
                       </div>
                       <p>
                         {{playTimeText[i-1]}}
                       </p>
                       
                    </li>
                    
                </ul>
            </div>           
                <div class="botBtnBox" @click="createRoom">
                  确定
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
      playWayImages:[],
      selectedRoom: "",
      showMask: false,
      showCreateRoomDg: false,
      tabCardItem: [
        "../../assets/img/nnsz.png",
        "../../assets/img/gdzj.png",
        "../../assets/img/zyqz.png",
        "../../assets/img/mpqz.png",
        "../../assets/img/tbnn.png"
      ],
      selectPoints: 1,
      selectedRule: 1,
      rulesText: ["牛牛*3牛九*2牛八*2", "牛牛*4牛九*3牛八*2牛七*2"],
      selectedType: 1,
      pokerTypeText: ["五花牛(5倍)", "炸弹牛(5倍)", "五小牛(5倍)"],
      selectedTime: 1,
      playTimeText: ["10局*1房卡", "20局*2房卡"]
    };
  },
  methods: {
    selectTime(i) {
      this.selectedTime = i;
    },
    selectType(i) {
      this.selectedType = i;
    },
    selectRule(i) {
      this.selectedRule = i;
    },
    selectPoint(i) {
      this.selectPoints = i;
    },
    select(index) {
      this.selectedRoom = index;
      this.showMask = true;
      this.showCreateRoomDg = true;
    },
    hideCreateRoomDg() {
      this.showMask = false;
      this.showCreateRoomDg = false;
    },
    createRoom() {
      this.hideCreateRoomDg();
    }
  },
  components: {},
  created(){
    for(let i = 0;i<11;i++){
      let url = '../../assets/img/qinglong/'+(i+1)+'.png';
      this.playWayImages.push(url)
    }
    
  },
  mounted() {
    document.title = "斗牛";
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
