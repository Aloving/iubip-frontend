var API = {
  education: {
    course: { // path catalog-app.js //path modules/ajax-lazy.js //path modules/autocomplete.js
      getList: getCourseList
    }
  },

  auth: { // path module/login-module.js
    login: login
  },

  search: { // path module/search/searchRequest.js
    searchRequest: getSearchRequestList
  },

  document: { // path documents-list-app.js
    getList: getDocumentsList
  },

  news: { // path news-list-app.js
    getList: getNewsList
  },

  callback: {   // path modules/callback-action.js
    send: sendCallback
  },

  proposal: {   // path modules/footerapp-action.js
    create: proposalCreate
  },

  password: {    // path modules/forgotpassaction.js
    recovery: recoveryPassword
  }

};

function getCourseList(obj) {
  return $.ajax({
    url: '/api/v1/education/course/',
    method: 'GET',
    data: obj
  });
}

function getNewsList(){
  return $.ajax({
    url: '/api/v1/news/',
    method: 'GET'
  });
}

function getDocumentsList(){
  return $.ajax({
    url: '/api/v1/document/',
    method: 'GET'
  });
}

function login(obj){
  return $.ajax({
    url: '/auth/',
    method: 'GET',
    data: obj
  });
}

function getSearchRequestList(obj){
  return $.ajax({
    url: '/api/v1/search/',
    method: 'GET',
    data: obj
  });
}

function sendCallback(obj){
  return $.ajax({
    url: '/api/v1/callback/',
    type: 'POST',
    data: obj
  });
}

function proposalCreate(obj){
  return $.ajax({
    url: '/api/v1/proposal/',
    type: 'POST',
    data: obj
  });
}

function recoveryPassword(obj) {
  return $.ajax({
    url: '/recovery-password/',
    method: 'POST',
    data: obj
  });
}

// $.when(API.education.course.getList())
//   .then(function(response) {
//     counter.text(response.length);
//   }, function(err) { console.log(err); });

module.exports = API;
