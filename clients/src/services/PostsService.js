import Api from '@/services/Api'
export default {
  Findarticle (params) {
    return Api().get('/article/'+params.Article_id)
  },
  Listarticle () {
    return Api().get('/articles')
  },
  Postarticle (params) {
    return Api().post('/articles',params)
  },
  PutNoitificaton (params){
    return Api().put('/Notifications',params)
  },
  GetNotification (params) {
    return Api().get('/Notification/'+params.User_id+'/'+params.CheckID)
  },
  Putarticle (params){
    return Api().put('/articles',params)
  },
  Login (params) {

    return Api().get('/User/'+params.email+'/'+params.CheckID)
  },
  CheckFollow (params) {
    return Api().get('/Follow/'+params.Follow_id+'/'+params.CheckID)
  },
  CheckBlock (params) {
    return Api().get('/Block/'+params.Block_id+'/'+params.CheckID)
  },
  CheckRead (params) {
    return Api().get('/Read/'+params.Read_id+'/'+params.CheckID)
  },
  CheckLater (params) {
    return Api().get('/Later/'+params.Later_id+'/'+params.CheckID)
  },
  Passwordforget (params) {
    return Api().get('/User/'+params.Token+'/'+params.CheckID)
  },
  Register (params){
    console.log("regis");
    
    return Api().post('/Users',params)
  },
  ListID () {
    return Api().get('Users')
  },
  Follow (params) {
    console.log("follow");
    console.log(params)
    return Api().put('/Users',params)
  },
  Ministry (params){
    return Api().post('Ministries',params)
  },
  CheckToken (params) {
    console.log('Checktoken1')
    console.log(params.Check);
    return Api().put('Users',params)
  },
  ChangePassword (params) {
    console.log('ChangePassword')
    console.log(params.Check);
    return Api().put('Users',params)
  },
  Clearhistory (params) {
    return Api().put('/Users',params)
  },
  Departmenturl (params) {
    return Api().get('Department/'+params.Department_id)
  }
  ,
  Ministryurl (params) {
    return Api().get('Ministry/'+params.Ministry_id)
  },
  SendSuggestion (params) {
    return Api().get(params.Suggestion+'/'+params.Name+'/'+params.Email+'/'+params.textarea)
  },
  RegisterBlock (params){
    return Api().post('/Blocks',params)
  },
  RegisterNotification (params){
    return Api().post('/Notifications',params)
  },
  RegisterFollow (params){
    return Api().post('/Follows',params)
  },
  RegisterRead (params){
    return Api().post('/Reads',params)
  },
  RegisterLater (params){
    return Api().post('/Laters',params)
  },

  FollowBlock (params) {
    return Api().put('/Blocks',params)
  },
  ClearhistoryBlock (params) {
    return Api().put('/Blocks',params)
  },

  FollowFollow (params) {
    console.log(params.Follow_id);
    return Api().put('/Follows',params)
  },
  ClearhistoryFollow (params) {
    return Api().put('/Follows',params)
  },

  FollowRead (params) {
    return Api().put('/Reads',params)
  },
  ClearhistoryRead (params) {
    return Api().put('/Reads',params)
  },

  FollowLater (params) {
    return Api().put('/Laters',params)
  },
  ClearhistoryLater (params) {
    return Api().put('/Laters',params)
  },



  
  
}
