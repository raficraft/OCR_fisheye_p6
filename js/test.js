function getJSON (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};



console.log(window.location.search);

let get = window.location.search.substring(1).split('=');
console.log(get);

 paramRequest = get[0];
 valueRequest = get[1];

console.log(paramRequest);
console.log(valueRequest);
console.log(parseInt(valueRequest));

id =parseInt(valueRequest)

console.log(data);

console.log(typeof(data));


 
getJSON('js/data.json', function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {


  return data;


    data.photographers.find(f => f.id === 243)
    console.log( data.photographers.find(f => f.id === id));
    console.log( data.media.filter(m => m.photographerId === id));

  }
  
});






