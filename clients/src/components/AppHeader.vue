<template>
  <div id="header">
    <div class="md-medium-hide md-small-hide md-xsmall-hide">
      <!--ตั้งค่าสำหรับ modal ของ search-->
      <md-dialog :md-active.sync="showDialogSearch">
        <md-tabs md-dynamic-height md-alignment="right">
          <md-tab md-label="ค้นหาข่าว">
            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <md-field>
                  <md-icon>search</md-icon>
                  <md-input v-model="search"></md-input>
                  <div>
                    <md-button @click="SearchNew" class="md-raised md-primary">ค้นหา</md-button>
                  </div>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <md-field>
                  <label for="category">หมวดหมู่ข่าว</label>
                  <md-select v-model="selectedCate" name="category" id="category" multiple>
                    <div v-for="i in list.length">
                      <md-option :value="list[i-1].name_th">{{list[i-1].name_th}}</md-option>
                    </div>
                  </md-select>
                </md-field>
                <div>
                  <strong>หมวดหมู่ข่าวที่เลือก:</strong>
                  {{ selectedCate }}
                </div>
              </div>
              <div class="md-layout-item">
                <md-field>
                  <label for="dept">หน่วยงาน</label>
                  <md-select v-model="selectedDept" name="department" id="department" multiple>
                    <div v-for="i in list_Ministry.length">
                      <md-option :value="list_Ministry[i-1].id">{{list_Ministry[i-1].name_th}}</md-option>
                    </div>
                  </md-select>
                </md-field>
                <div>
                  <strong>หน่วยงานที่เลือก:</strong>
                  {{ selectedDept }}
                </div>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <md-datepicker v-model="selectedStartEnd">
                  <label>จากวันที่</label>
                </md-datepicker>
              </div>

              <div class="md-layout-item">
                <md-datepicker v-model="selectedDateEnd">
                  <label>ถึงวันที่</label>
                </md-datepicker>
              </div>

            </div>
          </md-tab>
          <md-tab md-icon="close" @click="showDialogSearch = false"></md-tab>

        </md-tabs>

      </md-dialog>
      <!--ตั้งค่า modal สำหรับเข้าสู่ระบบ-->
      <md-dialog :md-active.sync="showDialogLogin">
        <md-tabs md-dynamic-height md-alignment="right">
          <md-tab md-label="เข้าสู่ระบบ">
            <md-field>
              <md-icon>email</md-icon>
              <label>E-mail Address</label>
              <md-input v-model="Email"></md-input>
            </md-field>
            <md-field>
              <md-icon>lock</md-icon>
              <label>Password</label>
              <md-input type="password" v-model="Password"></md-input>
            </md-field>
            <md-button @click="forgetpassword = true">
              <a>ลืมรหัสผ่าน?</a>
            </md-button>
            <div>
              <md-button class="md-raised md-primary" @click="Login">เข้าสู่ระบบ</md-button>
            </div>
            <div>
              <label>{{Checklogin}}</label>
            </div>
          </md-tab>
          <md-tab md-label="สมัครสมาชิก">
            <md-field>
              <md-icon>face</md-icon>
              <label>Username</label>
              <md-input v-model="User_name" maxlength="30"></md-input>
            </md-field>
            <md-field>
              <md-icon>email</md-icon>
              <label>E-mail Address</label>
              <md-input v-model="Emailregister"></md-input>
            </md-field>
            <md-field>
              <md-icon>lock</md-icon>
              <label>Password</label>
              <md-input type="password" v-model="Passwordregister"></md-input>
            </md-field>
            <md-field>
              <md-icon>lock</md-icon>
              <label>Re-password</label>
              <md-input type="password" v-model="Passwordagainregister"></md-input>
            </md-field>
            <div>
              <md-button class="md-raised md-primary" @click="Register">ยืนยัน</md-button>
            </div>
            <div>
              <label>{{Checkuser}}</label>
            </div>
          </md-tab>
          <md-tab md-icon="close" @click="showDialogLogin = false ;resendingtoken = false ;confirmtoken = false;forgetpassword = false;forgetpasswordrequest = false;  "></md-tab>
        </md-tabs>
      </md-dialog>

      <md-dialog :md-active.sync="showDialogUser">
        <md-tabs md-dynamic-height md-alignment="right">
          <md-tab md-label="แก้ไขข้อมูลส่วนตัว">
            <div>
              <md-icon>face</md-icon>
              <label>{{todos[1]}}</label>
            </div>
            <div>
              <md-icon>email</md-icon>
              <label>{{todos[2]}}</label>
            </div>
            <div>
              <br>
              <label>แก้ไขรหัสผ่าน</label>
            </div>
            <md-field>
              <md-icon>lock</md-icon>
              <label>Old Password</label>
              <md-input type="password" v-model="OldPassword"></md-input>
            </md-field>
            <md-field>
              <md-icon>lock</md-icon>
              <label>New Password</label>
              <md-input type="password" v-model="NewPassword"></md-input>
            </md-field>
            <md-field>
              <md-icon>lock</md-icon>
              <label>New Password Again</label>
              <md-input type="password" v-model="NewPasswordagain"></md-input>
            </md-field>
            <div>
              <md-button class="md-raised md-primary" @click="Changepassword">เปลี่ยนรหัสผ่าน</md-button>
            </div>
            <div>
              <label>{{Changepasswordtext}}</label>
            </div>
          </md-tab>
          <md-tab md-icon="close" @click="showDialogUser = false"></md-tab>
        </md-tabs>
      </md-dialog>

      <md-dialog :md-active.sync="resendingtoken" style="width : 20%; height : 20%">
        <md-button style="margin-left : auto; margin-bottom : auto" @click="resendingtoken = false">
          <md-icon>close</md-icon>
        </md-button>
        <label style="margin : auto">กดปุ่มเพื่อร้องขอ Email-confirmation</label>
        <md-button class="md-raised md-primary" style="margin : auto" @click="resending">resending</md-button>
      </md-dialog>

      <md-dialog :md-active.sync="confirmtoken" style="width : 20%; height : 20%">
        <md-button style="margin-left : auto; margin-bottom : auto" @click="confirmtoken = false">
          <md-icon>close</md-icon>
        </md-button>
        <label style="margin : auto">Please confirm your email</label>
      </md-dialog>

      <md-dialog :md-active.sync="forgetpassword" style="width : 20%; height : 20%">
        <md-button style="margin-left : auto; margin-bottom : auto" @click="forgetpassword = false">
          <md-icon>close</md-icon>
        </md-button>
        <md-field style=" margin : auto">
          <md-icon>email</md-icon>
          <label>E-mail Address</label>
          <md-input v-model="Emailforget"></md-input>
        </md-field>
        <md-button class="md-raised md-primary" style="margin : auto" @click="Passwordforget">Send</md-button>
      </md-dialog>

      <md-dialog :md-active.sync="forgetpasswordrequest" style="width : 20%; height : 20%">
        <md-button style="margin-left : auto; margin-bottom : auto" @click="forgetpasswordrequest = false">
          <md-icon>close</md-icon>
        </md-button>
        <label style="margin : auto">Check your email to change password</label>
      </md-dialog>

      <md-tabs md-alignment="right" class="md-primary" style="box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);">
        <md-tab id="tab-home" md-label="หน้าหลัก" md-icon="home" v-on:click=" showCate = false,showOther = false,showLive = false"
          to="/home"></md-tab>
        <md-tab id="tab-category" md-label="หมวดหมู่ข่าว" md-icon="list" v-on:click=" showCate = !showCate,showOther = false,showLive = false"></md-tab>
        <md-tab id="tab-dept" md-label="หน่วยงาน" md-icon="account_balance" to="/Ministry" target="_blank" v-on:click=" showCate = false,showOther = false,showLive = false"></md-tab>
        <md-tab id="tab-live" md-label="Live" md-icon="live_tv" v-on:click=" showCate = false,showOther = false,showLive = !showLive"></md-tab>
        <md-tab id="tab-lottery" md-label="สลากกินแบ่งรัฐบาล" md-icon="monetization_on" to="/Lottery" v-on:click=" showCate = false,showOther = false,showLive = false"></md-tab>
        <!--<md-tab id="tab-none1" md-label="" md-icon=""></md-tab>
      <md-tab id="tab-none2" md-label="" md-icon=""></md-tab>
      <md-tab id="tab-none3" md-label="" md-icon=""></md-tab>
      <md-tab id="tab-none4" md-label="" md-icon=""></md-tab>
      <md-tab id="tab-none5" md-label="" md-icon=""></md-tab>
      <md-tab id="tab-none6" md-label="" md-icon=""></md-tab>
      <md-tab id="tab-none7" md-label="" md-icon=""></md-tab>-->
        <md-tab id="tab-govsev" md-label="บริการภาครัฐ" md-icon="launch" to="/GovServ" v-on:click=" showCate = false,showOther = false,showLive = false"></md-tab>
        <md-tab id="tab-calendar" md-label="ปฏิทิน" md-icon="event" to="/Calendar" v-on:click=" showCate = false,showOther = false,showLive = false"></md-tab>
        <md-tab id="tab-other" md-label="อื่นๆ" md-icon="more_horiz" v-on:click=" showOther = !showOther,showCate = false,showLive = false"></md-tab>
        <md-tab id="tab-search" md-label="ค้นหาข่าว" md-icon="search" @click="showDialogSearch = true" v-on:click=" showCate = false,showOther = false,showLive = false"></md-tab>
        <md-tab id="tab-login" v-bind:md-label="LoginLogout" md-icon="lock" @click="toggle()" v-on:click=" showCate = false,showOther = false,showLive = false"></md-tab>
      </md-tabs>

      <div class='logo' id="logo">
        <svg width="300" height="300" class="filter">
          <circle cx="150" cy="150" r="90" fill="white" />
          <circle cx="150" cy="150" r="70" fill="#FFD740" />
        </svg>
        <img id="logoimg" src="..\assets\logognews.png" width="110" height="110">
      </div>
      <div class='smalllogo'>
        <svg width="400" height="100">
          <rect width="300" height="100" style="fill:#FFD740" />
        </svg>
        <img id="logoimg2" src="..\assets\logognews2.png" width="220" height="110">
      </div>

      <div class="md-layout">
        <div class="md-layout-item md-size-30">
        </div>
        <div class="md-layout-item">
          <div class="full-control" v-if="showCate">
            <md-list id="listCategory" :md-expand-single="expandSingle">
              <md-list-item md-expand :md-expanded="expandCategory">
                <md-icon>history</md-icon>
                <span class="md-list-item-text">สถานการณ์ปัจจุบัน</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('0_0')" target="_blank">- ข่าวพระราชพิธี</md-list-item>
                </md-list>
              </md-list-item>

              <md-list-item md-expand>
                <md-icon>trending_up</md-icon>
                <span class="md-list-item-text">ข่าวเศรษฐกิจและการลงทุน</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('1_0')" target="_blank">- การเงินและธนาคาร</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('1_1')" target="_blank">- อุตสาหกรรม</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('1_2')" target="_blank">- เกษตรกรรม</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('1_3')" target="_blank">- เศรษฐกิจและการลงทุน</md-list-item>
                </md-list>
              </md-list-item>

              <md-list-item md-expand>
                <md-icon>wb_sunny</md-icon>
                <span class="md-list-item-text">ข่าวสารในชีวิตประจำวัน</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('2_0')" target="_blank">- ข่าวอาชญากรรมและความปลอดภัย</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('2_1')" target="_blank">- ข่าวเตือนภัย</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('2_2')" target="_blank">- จราจรและการเดินทาง</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('2_3')" target="_blank">- สภาพภูมิอากาศและพื้นที่</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('2_4')" target="_blank">- สาธารณูปโภคและสวัสดิการรัฐ</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('2_5')" target="_blank">- สินค้าอุปโภค บริโภค</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('2_6')" target="_blank">- สุขภาพและอนามัย</md-list-item>
                </md-list>
              </md-list-item>

              <md-list-item md-expand>
                <md-icon>language</md-icon>
                <span class="md-list-item-text">ข่าวสารทั่วไป</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('3_0')" target="_blank">- การงานและอาชีพ</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('3_1')" target="_blank">- การศึกษา</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('3_2')" target="_blank">- กิจกรรมและการท่องเที่ยว</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('3_3')" target="_blank">- ข่าวทั่วไทย</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('3_4')" target="_blank">- ต่างประเทศ</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('3_5')" target="_blank">- ที่อยู่อาศัย</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('3_6')" target="_blank">- องค์ความรู้เพื่อประชาชน</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('3_7')" target="_blank">- สังคม ศิลปะ วัฒนธรรม</md-list-item>
                </md-list>
              </md-list-item>

              <md-list-item md-expand>
                <md-icon>class</md-icon>
                <span class="md-list-item-text">ข่าวสารจากภาครัฐ</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('4_0')" target="_blank">- บริการจากภาครัฐ</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('4_1')" target="_blank">- กฎหมายและความมั่นคง</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('4_2')" target="_blank">- การศึกษา เทคโนโลยีและการสื่อสาร</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('4_3')" target="_blank">- นโยบายภาครัฐ</md-list-item>
                </md-list>
              </md-list-item>

              <md-list-item md-expand>
                <md-icon>power</md-icon>
                <span class="md-list-item-text">สาธารณูปโภค</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('5_0')" target="_blank">- เกี่ยวกับไฟฟ้า</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('5_1')" target="_blank">- เกี่ยวกับประปา</md-list-item>
                </md-list>
              </md-list-item>

              <md-list-item md-expand>
                <md-icon>more_horiz</md-icon>
                <span class="md-list-item-text">อื่นๆ</span>

                <md-list slot="md-expand">
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('6_0')" target="_blank">- ความมั่นคง</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('7_0')" target="_blank">- กฎหมายและยุติธรรม</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('8_0')" target="_blank">- วัฒนธรรม ท่องเที่ยว กีฬา</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('9_0')" target="_blank">- การศึกษา วิจัย เทคโนโลยี</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('10_0')" target="_blank">- สังคม</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('11_0')" target="_blank">- เศรษฐกิจ</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('12_0')" target="_blank">- บริหารราชการแผ่นดิน</md-list-item>
                  <md-list-item class="md-inset" to="/Econ" @click="setnews('13_0')" target="_blank">- การต่างประเทศ</md-list-item>
                </md-list>
              </md-list-item>

            </md-list>
            <div class="control">
              <md-switch v-model="expandSingle">Expand Only One</md-switch>
            </div>
          </div>
        </div>
        <div class="md-layout-item">
          <md-list id="listlive" v-if="showLive">
            <md-list-item to="/live" target="_blank">
              <md-icon>live_tv</md-icon>
              <span class="md-list-item-text">Live</span>
            </md-list-item>
            <md-list-item to="/radio" target="_blank">
              <md-icon>radio</md-icon>
              <span class="md-list-item-text">Radio</span>
            </md-list-item>
            <md-list-item to="/vod" target="_blank">
              <md-icon>video_library</md-icon>
              <span class="md-list-item-text">บันทึกย้อนหลัง</span>
            </md-list-item>
          </md-list>
        </div>
        <div class="md-layout-item">
          <md-list id="listother" v-if="showOther">
            <md-list-item to="/Suggestion" target="_blank">ข้อเสนอแนะ</md-list-item>
          </md-list>
        </div>
      </div>

    </div>

    <div>
      <div id="search" style="display: none;"></div>
    </div>
    <div>
      <div id="selectedStartEnd" style="display: none;"></div>
    </div>
    <div>
      <div id="selectedDateEnd" style="display: none;"></div>
    </div>
    <div>
      <div id="selectedCate" style="display: none;"></div>
    </div>
    <div>
      <div id="selectedDept" style="display: none;"></div>
    </div>
    <div>
      <div id="searchdata" style="display: none;"></div>
    </div>

    <div id="responsive">
      <md-toolbar class="md-primary" style="box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>
        </div>
        <div class='logoresp'>
          <!--<svg width="300" height="40">
            <rect width="300" height="100" style="fill:#FFD740" />
          </svg>-->
          <img id='logoresp' src="..\assets\logognews2.png" width="110" height="50">
        </div>
      </md-toolbar>
    </div>

    <!-- For User-->
    <div class="User" v-if="showUser">
      <div class="UserSide">
        <a href="#" id="User">Username
          <md-icon>account_circle</md-icon>
          <md-badge :md-content="countnoti"></md-badge>
        </a>
      </div>
      <div class="listUser">
        <md-list style="box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);">
          <md-list-item @click="countnoti = 0" to="/Notification" target="_blank">
            <font color="white">การแจ้งเตือน</font>
            <md-badge class="md-primary md-square" :md-content="countnoti" /></md-list-item>
          <md-list-item to="/MyNews" target="_blank">
            <font color="white">ข่าวของฉัน</font>
          </md-list-item>
          <md-list-item @click="showDialogUser = true">
            <font color="white">แก้ไขข้อมูลส่วนตัว</font>
          </md-list-item>
        </md-list>
      </div>
    </div>

  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'
  import axios from 'axios';
  export default {

    name: "AppHeader",
    data: () => ({
      showDialogSearch: false,
      search: "",
      inline: null,
      selectedCate: [],
      selectedDept: [],
      startdate: null,
      showDialogLogin: null,
      selectedDateEnd: null,
      expandCategory: false,
      expandSingle: true,
      expandUser: false,
      showCate: false,
      showOther: false,
      showLive: false,
      Email: null,
      Password: null,
      Emailregister: null,
      Passwordregister: null,
      Passwordagainregister: null,
      Checkuser: null,
      User_name: null,
      User_id: null,
      Login_type: null,
      CheckID: null,
      Checklogin: null,
      todos: [],
      selectedStartEnd: null,
      LoginLogout: null,
      showDialogLogin: false,
      resendingtoken: false,
      confirmtoken: false,
      forgetpassword: false,
      Emailforget: null,
      forgetpasswordrequest: false,
      Newsdata: null,
      temp: 0, //ใช้ในการเพิ่มจำนวน content card
      list: [], //array List ของ หมวดหมู่ข่าว id 1-14
      list_article: [], //array List ของ ข่าวใน หมวดหมู่ใดใด
      count: 1, //แสดงลำดับการ print ข้อมูล
      article: [], //ข่าวทั้งหมด
      all: [], //ข้อมูลทั้งหมด
      main: [], //เก็บข้อมูล main sub article
      list_Ministry: [],
      Datefirst: [],
      Dateend: [],
      Datasearch: [],
      searchtext: null,
      searchdata: null,
      showUser: false,
      linknews: [],
      showDialogUser: false,
      OldPassword: null,
      NewPassword: null,
      NewPasswordagain: null,
      Changepasswordtext: null,
      countnoti: null
    }),
    async mounted() {
      this.UserLogin()

      await axios.get(`https://gnewsapitesting.apps.go.th/gnews/ministry/list_ministry?dev=1999`).then(Response => {
        this.list_Ministry = Response.data
      });
      console.log(this.list_Ministry);
      await axios.get(`https://gnewsapitesting.apps.go.th/gnews/article_category/list_article_category?dev=1999`).then(
        Response => {
          this.list = Response.data.data;
        });
      //บันทึก List หมวดหมู่ข่าว id 7-14
      await axios.get(`https://gnewsapitesting.apps.go.th/gnews/article_category/list_article_category/2?dev=1999`).then(
        Response => {
          for (var i = 0; i < Response.data.data.length; i++) {
            this.list.push(Response.data.data[i]);
          }
        });

      //print content card หมวดหมู่ข่าว id 1-14
      for (var i = 0; i < this.list.length; i++) {
        //print sub ของ หมวดหมู่ข่าว id 1-14

        for (var j = 0; j < this.list[i].sub.length; j++) {
          //ดึงข้อมูล List ข่าว ของแต่ละ sub

          await axios.get(
            `https://gnewsapitesting.apps.go.th/gnews/feed/list_by_type?type=s_cat&type_id=${this.list[i].sub[j].article_s_cat_id}&dev=1999`
          ).then(Response => {
            this.list_article = Response.data.feed;
            this.temp += this.list_article.length;
          });

          //ดึงข้อมูลข่าวจาก List ข่าว
          for (var k = 0; k < this.list_article.length; k++) {
            await axios.get(
              `https://gnewsapitesting.apps.go.th/gnews/feed/select_by_id/${this.list_article[k].article_id}?dev=1999`
            ).then(Response => {
              /*
              //รูป
              document.getElementById("pic_"+this.count).innerHTML  = `
                <img src="${Response.data.pic}" style="margin:10px;" >
              `;
              //ข้อมูลข่าว
              document.getElementById("name_"+this.count).innerHTML  = `
                <span class="md-title" >ชื่อข่าว : ${Response.data.title}</span>
                <br>
                <span class="md-subhead">วันที่โพสต์ : ${Response.data.create_date}</span>
                <span> ${this.count}</span>
              `;*/
              this.main = [];
              this.main.push(this.list[i]);
              this.main.push(this.list[i].sub[j]);
              this.main.push(Response.data);
              this.all.push(this.main);

              //console.log("article_id : "+this.article[this.count-1].title);
              //console.log("count : "+this.count);
              //this.count++;       
            });
          }
        }
      }
      //console.log(this.all);


      //console.log(this.article[0]);
      //shuffle ค่า
      var x_date;
      var y_date;
      var empty;
      for (var i = 0; i < this.all.length; i++) {
        x_date = this.all[i][2].create_date.split(" ");
        if (x_date[1] == "มกราคม") x_date[1] = "1";
        else if (x_date[1] == "กุมภาพันธ์") x_date[1] = "2";
        else if (x_date[1] == "มีนาคม") x_date[1] = "3";
        else if (x_date[1] == "เมษายน") x_date[1] = "4";
        else if (x_date[1] == "พฤษภาคม") x_date[1] = "5";
        else if (x_date[1] == "มิถุนายน") x_date[1] = "6";
        else if (x_date[1] == "กรกฎาคม") x_date[1] = "7";
        else if (x_date[1] == "สิงหาคม") x_date[1] = "8";
        else if (x_date[1] == "กันยายน") x_date[1] = "9";
        else if (x_date[1] == "ตุลาคม") x_date[1] = "10";
        else if (x_date[1] == "พฤศจิกายน") x_date[1] = "11";
        else if (x_date[1] == "ธันวาคม") x_date[1] = "12";

        for (var j = i + 1; j < this.all.length; j++) {
          y_date = this.all[j][2].create_date.split(" ");
          if (y_date[1] == "มกราคม") y_date[1] = "1";
          else if (y_date[1] == "กุมภาพันธ์") y_date[1] = "2";
          else if (y_date[1] == "มีนาคม") y_date[1] = "3";
          else if (y_date[1] == "เมษายน") y_date[1] = "4";
          else if (y_date[1] == "พฤษภาคม") y_date[1] = "5";
          else if (y_date[1] == "มิถุนายน") y_date[1] = "6";
          else if (y_date[1] == "กรกฎาคม") y_date[1] = "7";
          else if (y_date[1] == "สิงหาคม") y_date[1] = "8";
          else if (y_date[1] == "กันยายน") y_date[1] = "9";
          else if (y_date[1] == "ตุลาคม") y_date[1] = "10";
          else if (y_date[1] == "พฤศจิกายน") y_date[1] = "11";
          else if (y_date[1] == "ธันวาคม") y_date[1] = "12";

          if (x_date[2] < y_date[2]) {
            empty = this.all[i];
            this.all[i] = this.all[j];
            this.all[j] = empty;
            x_date = y_date;
          } else if (x_date[2] == y_date[2]) {
            if (x_date[1] < y_date[1]) {
              empty = this.all[i];
              this.all[i] = this.all[j];
              this.all[j] = empty;
              x_date = y_date;
            } else if (x_date[1] == y_date[1]) {
              if (x_date[0] < y_date[0]) {
                empty = this.all[i];
                this.all[i] = this.all[j];
                this.all[j] = empty;
                x_date = y_date;
              }
            }
          }
          //console.log(this.article);
        }
      }
      console.log(this.all);
      this.$setItem('News', this.all).then(function () {
        return this.$getItem('News');
      })
      console.log('Finish');
      for (var i = 0; i < this.all.length; i++) {
        const responsenew = await PostsService.Findarticle({
          Article_id: this.all[i][2].article_id
        })
        console.log(responsenew.data.Article_id);
        if (responsenew.data.Article_id == null) {
          await PostsService.Postarticle({
            Article_id: this.all[i][2].article_id,
          })
          this.CheckID = '2'
          const responseFollow = await PostsService.CheckFollow({
            Follow_id: this.todos[0],
            CheckID: this.CheckID
          });
          for (var j = 0; j < responseFollow.data.Catagory_sub_id.length; j++) {
            if (responseFollow.data.Catagory_sub_id[j] == this.all[i][1].name_th) {
              const responseNoti = await PostsService.PutNoitificaton({
                User_id: this.todos[0],
                Article_id: this.all[i][2].article_id,
                CheckNoti: "0"
              })
              this.countnoti = this.countnoti + 1
            }
          }
          await PostsService.PutNoitificaton({
            User_id: this.todos[0],
            CountNoti: this.countnoti,
            CheckNoti: "1"
          })
        }
      }
      const responsetop = await PostsService.Listarticle({})
      console.log(responsetop.data);
    },
    methods: {
      async Changepassword() {
        this.Changepasswordtext = null
        if (this.todos[3] != this.OldPassword) {
          this.Changepasswordtext = "Your Password is wrong"
        } else {
          if (!this.NewPassword || this.NewPassword.length < 8) {
            this.Changepasswordtext = "Password must be at least 8 character"
          } else {
            if (this.NewPassword == this.NewPasswordagain) {
              await PostsService.ChangePassword({
                Check: 3,
                User_id: this.todos[0],
                User_password: this.NewPassword
              })
              this.todos[3] = this.NewPassword
              this.NewPassword = null
              this.OldPassword = null
              this.NewPasswordagain = null
              this.Changepasswordtext = 'Complete Change Password'
            } else {
              this.Changepasswordtext = 'Password not eqaul'
            }
          }
        }
      },
      async setnews(data) {
        this.linknews.push(data)
        this.$localStorage.set('linknews', JSON.stringify(this.linknews))
        location.reload();
      },
      async SearchNew() {
        console.log(this.selectedCate)
        console.log(this.selectedDept)
        console.log(this.search);
        console.log(this.selectedStartEnd);
        console.log(this.selectedDateEnd);
        this.Datefirst = this.selectedStartEnd + "";
        this.Dateend = this.selectedDateEnd + "";
        document.getElementById("selectedCate").innerHTML = `${this.selectedCate}`;
        document.getElementById("selectedDept").innerHTML = `${this.selectedDept}`;
        document.getElementById("search").innerHTML = `${this.search}`;
        document.getElementById("selectedStartEnd").innerHTML = `${this.selectedStartEnd}`;
        document.getElementById("selectedDateEnd").innerHTML = `${this.selectedDateEnd}`;
        await this.$getItem('News').then(async function (value) {
          var selectedCate = (String(document.getElementById("selectedCate").innerHTML + "")).split(",");
          var selectedDept = (String(document.getElementById("selectedDept").innerHTML + "")).split(",");
          var search = String(document.getElementById("search").innerHTML);
          var selectedStartEnd = (String(document.getElementById("selectedStartEnd").innerHTML + "")).split(" ");
          var selectedDateEnd = (String(document.getElementById("selectedDateEnd").innerHTML + "")).split(" ");
          var searchdata = []
          console.log(selectedCate);
          console.log(selectedDept);
          console.log(search);
          console.log(selectedStartEnd);
          console.log(selectedDateEnd);
          for (var i = 0; i < value.length; i++) {
            if (value[i][2].corporate_info == null) {

            } else if (value[i][2].title.match(search) || search == "") {
              for (var j = 0; j < selectedCate.length; j++) {
                if (value[i][0].name_th == selectedCate[j] || selectedCate[j] == [""]) {
                  for (var k = 0; k < selectedDept.length; k++) {
                    console.log(value[i][2].article_id);
                    if (value[i][2].corporate_info.ministry_id == selectedDept[k] || selectedDept[k] == [""]) {
                      var Datenews = (value[i][2].create_date).split(" ")
                      if (Datenews[1] == "มกราคม") Datenews[1] = "1";
                      else if (Datenews[1] == "กุมภาพันธ์") Datenews[1] = "2";
                      else if (Datenews[1] == "มีนาคม") Datenews[1] = "3";
                      else if (Datenews[1] == "เมษายน") Datenews[1] = "4";
                      else if (Datenews[1] == "พฤษภาคม") Datenews[1] = "5";
                      else if (Datenews[1] == "มิถุนายน") Datenews[1] = "6";
                      else if (Datenews[1] == "กรกฎาคม") Datenews[1] = "7";
                      else if (Datenews[1] == "สิงหาคม") Datenews[1] = "8";
                      else if (Datenews[1] == "กันยายน") Datenews[1] = "9";
                      else if (Datenews[1] == "ตุลาคม") Datenews[1] = "10";
                      else if (Datenews[1] == "พฤศจิกายน") Datenews[1] = "11";
                      else if (Datenews[1] == "ธันวาคม") Datenews[1] = "12";

                      if (selectedStartEnd[1] == "๋Jan") selectedStartEnd[1] = "1";
                      else if (selectedStartEnd[1] == "Feb") selectedStartEnd[1] = "2";
                      else if (selectedStartEnd[1] == "Mar") selectedStartEnd[1] = "3";
                      else if (selectedStartEnd[1] == "Apr") selectedStartEnd[1] = "4";
                      else if (selectedStartEnd[1] == "May") selectedStartEnd[1] = "5";
                      else if (selectedStartEnd[1] == "Jun") selectedStartEnd[1] = "6";
                      else if (selectedStartEnd[1] == "Jul") selectedStartEnd[1] = "7";
                      else if (selectedStartEnd[1] == "Aug") selectedStartEnd[1] = "8";
                      else if (selectedStartEnd[1] == "Sep") selectedStartEnd[1] = "9";
                      else if (selectedStartEnd[1] == "Oct") selectedStartEnd[1] = "10";
                      else if (selectedStartEnd[1] == "Nov") selectedStartEnd[1] = "11";
                      else if (selectedStartEnd[1] == "Dec") selectedStartEnd[1] = "12";

                      if (selectedDateEnd[1] == "๋Jan") selectedDateEnd[1] = "1";
                      else if (selectedDateEnd[1] == "Feb") selectedDateEnd[1] = "2";
                      else if (selectedDateEnd[1] == "Mar") selectedDateEnd[1] = "3";
                      else if (selectedDateEnd[1] == "Apr") selectedDateEnd[1] = "4";
                      else if (selectedDateEnd[1] == "May") selectedDateEnd[1] = "5";
                      else if (selectedDateEnd[1] == "Jun") selectedDateEnd[1] = "6";
                      else if (selectedDateEnd[1] == "Jul") selectedDateEnd[1] = "7";
                      else if (selectedDateEnd[1] == "Aug") selectedDateEnd[1] = "8";
                      else if (selectedDateEnd[1] == "Sep") selectedDateEnd[1] = "9";
                      else if (selectedDateEnd[1] == "Oct") selectedDateEnd[1] = "10";
                      else if (selectedDateEnd[1] == "Nov") selectedDateEnd[1] = "11";
                      else if (selectedDateEnd[1] == "Dec") selectedDateEnd[1] = "12";

                      console.log(Datenews);
                      console.log(parseInt(selectedStartEnd[3]) + 543);
                      console.log(parseInt(Datenews[2]));
                      console.log(parseInt(selectedDateEnd[3]) + 543);
                      if (selectedDateEnd[0] == "null" && selectedStartEnd[0] == "null") {
                        console.log('checktime1');
                        searchdata.push(value[i][2].article_id)
                      } else if (selectedDateEnd[0] == "null") {
                        if (parseInt(selectedStartEnd[3]) + 543 == parseInt(Datenews[2])) {
                          if (parseInt(selectedStartEnd[1]) == parseInt(Datenews[1])) {
                            if (parseInt(selectedStartEnd[2]) == parseInt(Datenews[0])) {
                              searchdata.push(value[i][2].article_id)
                            }
                          }
                        }
                      } else if (selectedStartEnd[0] == "null") {
                        if (parseInt(selectedDateEnd[3]) + 543 == parseInt(Datenews[2])) {
                          if (parseInt(selectedDateEnd[1]) == parseInt(Datenews[1])) {
                            if (parseInt(selectedDateEnd[2]) == parseInt(Datenews[0])) {
                              searchdata.push(value[i][2].article_id)
                            }
                          }

                        }
                      } else {
                        if ((parseInt(selectedStartEnd[3]) + 543) < (parseInt(Datenews[2])) && (parseInt(Datenews[2])) <
                          (parseInt(selectedDateEnd[3]) + 543)) {
                          console.log('check1');
                          searchdata.push(value[i][2].article_id)
                        } else if (parseInt(selectedStartEnd[3]) + 543 == parseInt(Datenews[2]) && parseInt(
                            Datenews[2]) == parseInt(selectedDateEnd[3]) + 543) {
                          if (parseInt(selectedStartEnd[1]) < parseInt(Datenews[1]) && parseInt(Datenews[1]) <
                            parseInt(selectedDateEnd[1])) {
                            console.log('check2');
                            searchdata.push(value[i][2].article_id)
                          } else if (parseInt(selectedStartEnd[1]) == parseInt(Datenews[1]) && parseInt(Datenews[1]) ==
                            selectedDateEnd[1]) {
                            if (parseInt(selectedStartEnd[2]) < parseInt(Datenews[0]) && parseInt(Datenews[0]) <
                              selectedDateEnd[2]) {
                              console.log('check3');
                              searchdata.push(value[i][2].article_id)
                            } else if (parseInt(selectedStartEnd[2]) == parseInt(Datenews[0]) && parseInt(Datenews[
                                0]) == selectedDateEnd[2]) {
                              console.log('check4');
                              searchdata.push(value[i][2].article_id)
                            } else if (parseInt(selectedStartEnd[2]) == parseInt(Datenews[0])) {
                              console.log('check5');
                              searchdata.push(value[i][2].article_id)
                            } else if (parseInt(Datenews[0]) == parseInt(selectedDateEnd[2])) {
                              console.log('check6');
                              searchdata.push(value[i][2].article_id)
                            }
                          } else if (parseInt(selectedStartEnd[1]) == parseInt(Datenews[1])) {
                            if (parseInt(selectedStartEnd[2]) <= parseInt(Datenews[0])) {
                              console.log('check7');
                              searchdata.push(value[i][2].article_id)
                            }
                          } else if (parseInt(Datenews[1]) == parseInt(selectedDateEnd[1])) {
                            if (parseInt(Datenews[0]) <= parseInt(selectedDateEnd[2])) {
                              console.log('check8');
                              searchdata.push(value[i][2].article_id)
                            }
                          }
                        } else if (parseInt(selectedStartEnd[3]) + 543 == parseInt(Datenews[2])) {
                          if (parseInt(selectedStartEnd[1]) < parseInt(Datenews[1])) {
                            console.log('check9');
                            searchdata.push(value[i][2].article_id)
                          } else if (parseInt(selectedStartEnd[1]) == parseInt(Datenews[1])) {
                            if (parseInt(selectedStartEnd[2]) <= parseInt(Datenews[0])) {
                              console.log('check10');
                              searchdata.push(value[i][2].article_id)
                            }
                          }
                        } else if (parseInt(Datenews[2]) == parseInt(selectedDateEnd[3]) + 543) {
                          if (parseInt(Datenews[1]) < parseInt(selectedDateEnd[1])) {
                            console.log('check11');
                            searchdata.push(value[i][2].article_id)
                          } else if (parseInt(Datenews[1]) == parseInt(selectedDateEnd[1])) {
                            if (parseInt(Datenews[0]) <= parseInt(selectedDateEnd[2])) {
                              console.log('check12');
                              searchdata.push(value[i][2].article_id)
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          console.log(searchdata);
          console.log(JSON.stringify(searchdata));
          for (var i = 0; i < searchdata.length; i++) {
            document.getElementById("searchdata").innerHTML += `${searchdata[i]} `;
          }
        });
        this.selectedCate = []
        this.selectedDept = []
        this.search = null
        this.selectedDateEnd = null
        this.selectedStartEnd = null
        this.searchdata = document.getElementById("searchdata").innerHTML
        window.open("http://localhost:8080/#/Searchcon/" + this.searchdata, '_blank')
        location.reload()
      },
      async Login() {
        if (this.Email != null && this.Password != null) {
          this.CheckID = '1'
          const response = await PostsService.Login({
            email: this.Email,
            CheckID: this.CheckID
          })
          this.User_id = response.data.User_id
          if (this.Password == response.data.User_password) {
            if (response.data.tokencheck == 1) {
              this.todos.push(this.User_id)
              this.todos.push(response.data.User_name)
              this.todos.push(this.Email)
              this.todos.push(response.data.User_password)
              this.$localStorage.set('todos', JSON.stringify(this.todos))
              this.showDialogLogin = false
              this.UserLogin()
            } else {
              this.Checklogin = 'Please confirm email'
              this.resendingtoken = true
            }
          } else {
            this.Checklogin = 'ID or Password is wrong'
          }
        }
      },
      async Register() {
        this.CheckID = '1'
        this.Checkuser = ''
        if (this.User_name.length < 5) {
          this.Checkuser = 'Username must be at least 5 capital'
        } else {
          if (!this.validEmail(this.Emailregister)) {
            this.Checkuser = 'This is not Email'
          } else {
            if (!this.Passwordregister || this.Passwordregister.length < 8) {
              this.Checkuser = 'Password must be at least 8 capital'
            } else {
              if (this.Passwordregister == this.Passwordagainregister) {
                const response = await PostsService.Login({
                  email: this.Emailregister,
                  CheckID: this.CheckID
                })
                if (this.Emailregister == response.data.User_email) {
                  this.Checkuser = 'Already have Id'
                } else {
                  const response = await PostsService.ListID({

                  })
                  if (response.data.User_id == null) {
                    this.User_id = 1
                  } else {
                    this.User_id = parseInt(response.data.User_id) + 1
                  }
                  await PostsService.Register({
                    User_email: this.Emailregister,
                    User_password: this.Passwordregister,
                    User_name: this.User_name,
                    User_id: this.User_id,
                    Login_type: this.Login_type,
                    Follow_id: this.User_id,
                    Block_id: this.User_id,
                    Read_id: this.User_id,
                    Later_id: this.User_id,
                  })

                  await PostsService.RegisterBlock({
                    Block_id: this.User_id,
                  })

                  await PostsService.RegisterFollow({
                    Follow_id: this.User_id,
                  })

                  await PostsService.RegisterRead({
                    Read_id: this.User_id,
                  })
                  await PostsService.RegisterLater({
                    Later_id: this.User_id,
                  })
                  await PostsService.RegisterNotification({
                    User_id: this.User_id,
                  })

                  this.User_name = null
                  this.Emailregister = null
                  this.Passwordregister = null
                  this.Passwordagainregister = null
                  this.User_id = null
                  this.CheckID = null
                  this.Checkuser = 'Complete register'
                }
              } else {
                this.Checkuser = 'Password not equal'
              }
            }
          }
        }
      },
      validEmail: function (email) {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      toggle: function () {
        if (this.todos[0] == null) {
          this.showDialogLogin = true
          return this.showDialogLogin
        } else {
          this.$localStorage.remove('todos')
          this.showDialogLogin = false
          location.reload();
        }
      },
      async UserLogin() {
        const todos = JSON.parse(this.$localStorage.get('todos'))
        if (todos) {
          this.todos = todos
        }
        console.log('gusjung' + this.todos);
        if (this.todos[0] == null) {
          this.LoginLogout = 'เข้าสู่ระบบ'
        } else {
          this.LoginLogout = 'ออกจากระบบ'
          this.showUser = true
          var CheckID = '2'
          var responseNotification = await PostsService.GetNotification({
            User_id: this.todos[0],
            CheckID: CheckID
          })
          this.countnoti = parseInt(responseNotification.data.CountNoti)
        }
      },
      async resending() {
        this.CheckID = '3'
        const response = await PostsService.Login({
          email: this.Email,
          CheckID: this.CheckID
        })
        this.resendingtoken = false
        this.confirmtoken = true
      },
      async Passwordforget() {
        this.CheckID = '5'
        const response = await PostsService.Login({
          email: this.Emailforget,
          CheckID: this.CheckID
        })
        this.forgetpassword = false
        this.forgetpasswordrequest = true
      }
    }
  };
  /*
  $(function() {
      var logo = $(".logo");
      var small = $(".smalllogo");
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
          if (scroll >= 100) {
              logo.removeClass('logo').addClass("logo-alt");  
              small.removeClass('smalllogo').addClass("smalllogo-alt");
          } else {
              logo.removeClass("logo-alt").addClass('logo');
              small.removeClass("smalllogo-alt").addClass("smalllogo");
          }
      });
  });
  */

</script>



<style lang="scss" scoped>
  #header {
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 10;
  }

  div>.logo {
    position: absolute;
    transform: translate(80px, -160px);
    -ms-transform: translate(80px, -160px);
    -moz-transform: translate(80px, -160px);
    -webkit-transform: translate(80px, -160px);
    -o-transform: translate(80px, -160px);
    margin-bottom: 0px;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
    /* Safari */
    transition: width 1s, height 1s, transform 1s;
  }

  .logo>img {
    transform: translate(-210px, -145px);
  }

  .logo-alt {
    width: 0%;
    height: 0px;
    transform: translate(-500px, -500px);
    -webkit-transform: rotate(-180deg);
    /* Safari */
    transform: rotate(-180deg);
  }

  .smalllogo-alt {
    transform: translate(80px, -175px);
    -ms-transform: translate(80px, -175px);
    -moz-transform: translate(80px, -175px);
    -webkit-transform: translate(80px, -175px);
    -o-transform: translate(80px, -175px);
    margin-bottom: 0px;
    position: fixed;
  }

  .smalllogo-alt>img {
    transform: translate(-350px, 45px);
  }

  .smalllogo {
    display: none;
  }

  #logoresp {
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 10;
  }

  #listother {
    width: 15em;
    max-width: 100%;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
    position: absolute;
  }

  #listlive {
    width: 15em;
    max-width: 100%;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
    position: absolute;
  }

  #listCategory {
    width: 25em;
    max-width: 100%;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
    display: inline-block;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
    position: absolute;
  }

  .control {
    display: none;
  }

  .filter {
    filter: drop-shadow(0 0.8em 0.7rem #EEEEEE);
  }

  .UserSide a {
    margin-top: 170px;
    position: absolute;
    left: -170px;
    transition: 0.3s;
    padding: 15px;
    width: 14vw;
    text-decoration: none;
    font-size: 16px;
    color: #2d2d2b;
    border-radius: 0 5px 5px 0;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.05);
  }

  .UserSide a>.md-icon {
    float: right;
  }

  .UserSide a:hover {
    left: 0;
    color: #2d2d2b;
  }

  .UserSide:hover+.listUser {
    display: block;
  }

  .listUser {
    display: none;
  }

  .listUser:hover {
    display: block;
    transition: width 1s, height 1s, transform 1s;
  }

  #User {
    top: 20px;
    background-color: #FFD740;
  }

  .listUser>.md-list {
    margin-top: 172px;
    width: 10.5vw;
    background-color: #2d2d2b;
    opacity: 0.9;
  }

  .md-badge {
    background-color: #D50000;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
  }

  #responsive,
  .logoresp {
    display: none;

  }

  /* Smartphone Portrait and Landscape */

  @media only screen and (min-device-width: 320px) and (max-device-width: 1280px) {
    #responsive {
      display: inline;
    }
    .logoresp {
      display: inline;
    }
  }

  @media only screen and (min-device-width: 1440px) and (max-device-width: 1440px) {
    .logo {
      position: fixed;
      transform: translate(20px, -160px);
      -ms-transform: translate(20px, -160px);
      -moz-transform: translate(20px, -160px);
      -webkit-transform: translate(20px, -160px);
      -o-transform: translate(20px, -160px);
      margin-bottom: 0px;
      -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
      /* Safari */
      transition: width 1s, height 1s, transform 1s;
    }
    .logo>img {
      transform: translate(-210px, -145px);
    }
    .smalllogo-alt {
      transform: translate(20px, -500px);
      -ms-transform: translate(20px, -500px);
      -moz-transform: translate(20px, -500px);
      -webkit-transform: translate(20px, -500px);
      -o-transform: translate(20px, -500px);
      margin-bottom: 0px;
      position: fixed;
    }
    .smalllogo-alt>img {
      transform: translate(-370px, 45px);
    }
  }

</style>
