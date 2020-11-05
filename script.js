import './style.scss';
import $ from 'jquery';
// import axios from 'axios';
var chats = [{
  photo: 'Pixtune.jpg', nom: 'Pixtune', age: '1 an', sexe: 'masculin', mini_bio: 'Pitxune est un chaton assez calme, qui aime jouer avec ses frères et les humains, et qui sait s\'occuper aussi seul.', etat_vaccins: 'à faire', favori: 'non',
}, {
  photo: 'Tharra.jpg', nom: 'Tharra', age: '2 ans', sexe: 'féminin', mini_bio: ' Très calme, douce, très affectueuse qui adore les câlins.', etat_vaccins: 'à jour', favori: 'non',
}, {
  photo: 'Pippin.jpg', nom: 'Pippin', age: '1 an', sexe: 'masculin', mini_bio: 'Pippin est très joueur, il attrape tout ce qui bouge, pas craintif, il aime les gros câlins, mais c\'est quand il veut !', etat_vaccins: 'à jour', favori: 'oui',
}, {
  photo: 'Ouistiti.jpg', nom: 'Ouistiti', age: '2 an', sexe: 'masculin', mini_bio: 'Ouistiti est très joueur, Il adore les cages à grimper et y passerait sa vie ! Heureusement il aime bien aussi reevoir des calins.', etat_vaccins: 'à jour', favori: 'non',
}, {
  photo: 'Boufi.jpg', nom: 'Boufi', age: '3 an', sexe: 'masculin', mini_bio: 'Boufi, comme son nom l\'indique, aime bien manger ! Par ailleurs, assez tranquille ! il aime être à côté de son maitre facé à la télévision', etat_vaccins: 'à jour', favori: 'non',
}, {
  photo: 'Bootsy.jpg', nom: 'Bootsy', age: '1 an', sexe: 'féminin', mini_bio: 'Bootsy est tranquille et en même temps autonome... il mène sa vie comme bon lui semble', etat_vaccins: 'à faire', favori: 'oui',
}];
// localStorage.clear();

// RECUPERER CE QUI EST DANS LA MEMOIRE
var chatsSauves = [];
for (var k = 0; k < chats.length; k++) {
  chatsSauves.push(JSON.parse(localStorage.getItem(`chats${k}`)));
}
if (chatsSauves[0] !== null) {
  chats = chatsSauves;
}

// CREATION DUHTML DE LA PAGE
function render() {
  // CREATION SECTION CANDICHATS
  var html = '<h1 class="text-center p-4">Candichats à adopter</h1>';
  $('#app').append(html);
  var container = '<div class="container"></div>';
  $('#app').append(container);
  var row = '<div class="row" style="justify-content:space-around;"></div>';
  $('.container').append(row);
  var j = 0;
  for (var chat of chats) {
    html = `<div class="card m-3 p-0" style="width:250px;">
    <img src="${chat.photo}" class="card-img-top" alt="${chat.nom}">
    <div class="card-body">`;
    if (chat.favori === 'oui') {
      html += `<h3 class="card-title">${chat.nom} <i class="fas fa-star ${j}"></i></h3>`;
    } else {
      html += `<h3 class="card-title">${chat.nom} <i class="far fa-star ${j}"></i></h3>`;
    }
    html += `<h5 class="card-title">age : ${chat.age}</h5>
      <h5 class="card-title">sexe : ${chat.sexe}</h5>
      <h5 class="card-title">vaccins : ${chat.etat_vaccins}</h5>
      <p class="card-text">${chat.mini_bio}</p>
      <a href="#" class="btn btn-primary">Adopter</a>
    </div>
  </div>`;
    $('.row').append(html);
    j++;
  }
  // CREATION SECTION CHAVORIS
  $('#app').after('<section id="chavoris"><h2 class="text-center p-3">Chavoris</h2></section>');
  var containerChavoris = '<div class="container containerChavoris"></div>';
  $('#chavoris').append(containerChavoris);
  var rowChavoris = '<div class="row rowChavoris" style="justify-content:space-around;"></div>';
  $('.containerChavoris').append(rowChavoris);
  var h = 0;
  for (var cat of chats) {
    if (cat.favori === 'oui') {
      var htmlChavoris = '';
      htmlChavoris = `<div class="card m-3" style="width: 250px;">
    <img src="${cat.photo}" class="card-img-top" alt="${cat.nom}">
    <div class="card-body">
    <h3 class="card-title">${cat.nom} <i class="fas fa-star ${h}"></i></h3>
    <h5 class="card-title">age : ${cat.age}</h5>
      <h5 class="card-title">sexe : ${cat.sexe}</h5>
      <h5 class="card-title">vaccins : ${cat.etat_vaccins}</h5>
      <p class="card-text">${cat.mini_bio}</p>
      <a href="#" class="btn btn-primary">Adopter</a>
    </div>
  </div>`;
      $('.rowChavoris').append(htmlChavoris);
    }
    h++;
  }

  // ELEMENT CLIQUE
  $('i').click(function (e) {
    e.stopPropagation();
    var id = e.currentTarget.className;
    console.log(id);
    var ids = id.split(' ');
    var identite = ids[2];
    console.log(identite);
    console.log(chats[identite].favori);
    if (chats[identite].favori === 'oui') {
      chats[identite].favori = 'non';
    } else {
      chats[identite].favori = 'oui';
    }
    $('#app').empty();
    $('#chavoris').remove();
    render();
    console.log('render1');
    console.log(chats);
    // MISE EN MEMOIRE LOCALE
    for (var q = 0; q < chats.length; q++) {
      var str = JSON.stringify(chats[q]);
      localStorage.setItem(`chats${q}`, str);
    }
  });
}
render();
console.log('render3');
