new Vue({
  el:'#stuff',
  data:{
    message:{
      name:'Manu',
      email:'manu@mail.com',
      password:'crap'
    }
  },
  methods:{
    myFunction(){
      this.message = 'Kill'
    }
  }
});
