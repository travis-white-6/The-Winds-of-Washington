// Author: Travis White

function replaceTextOnPage(from, to) {
  getAllTextNodes().forEach(function(node) {
    node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
  });

  function getAllTextNodes() {
    var result = [];

    (function scanSubTree(node) {
      if (node.childNodes.length) {
        for (var i = 0; i < node.childNodes.length; i++) {
          scanSubTree(node.childNodes[i]);
        }
      }
      else if (node.nodeType == Node.TEXT_NODE) {
        result.push(node);
      }
    }) (document);

    return result;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

replaceTextOnPage('Mr.', '');
replaceTextOnPage('Mrs.', '');
replaceTextOnPage('Mr', '');
replaceTextOnPage('Mrs', '');
replaceTextOnPage('President Donald Trump', 'King of the Andals and the First Men, Lord of the Seven Kingdoms, Protector of the Realm, and the First of his name, Joffrey Baratheon');
replaceTextOnPage('President Trump', 'King Joffrey');
replaceTextOnPage('Donald Trump', 'Joffrey Baratheon');
replaceTextOnPage('Mike Pence', 'The High Sparrow');
replaceTextOnPage('Pence', 'The High Sparrow');
replaceTextOnPage('Melania Trump', 'Lady Melisandre');
replaceTextOnPage('Melania', 'Melisandre');
replaceTextOnPage('Jared Kushner', 'Robin Arryn');
replaceTextOnPage('Jared', 'Lord Arryn');
replaceTextOnPage('Kushner', 'Lord Arryn');
replaceTextOnPage('Don Jr.', 'Littlefinger');
replaceTextOnPage('Trump Jr.', 'Littlefinger');
replaceTextOnPage('Eric Trump', 'Walder Frey');
replaceTextOnPage('Eric', 'Lord Frey');
replaceTextOnPage('Paul Ryan', 'Reek');
replaceTextOnPage('Ryan', 'Reek');
replaceTextOnPage('Jeff Sessions', 'Old Nan');
replaceTextOnPage('Sessions', 'Old Nan');
replaceTextOnPage('Kellyanne Conway', 'Varys');
replaceTextOnPage('Conway', 'Varys');
replaceTextOnPage('Kellyanne', 'Varys');
replaceTextOnPage('Sean Spicer', 'HODOR');
replaceTextOnPage('Spicer', 'HODOR');
replaceTextOnPage('Ivanka Trump', 'Myrcella Baratheon');
replaceTextOnPage('Trump', 'Joffrey');
replaceTextOnPage('Ivanka', 'Myrcella Baratheon');
replaceTextOnPage('Steve Bannon', 'Sandor Clegane');
replaceTextOnPage('Bannon', 'The Hound');
replaceTextOnPage('Mitch McConnell', 'Grand Maester Pycelle');
replaceTextOnPage('McConnell', 'Grand Maester Pycelle');
replaceTextOnPage('Vladimir Putin', 'The Night\'s King');
replaceTextOnPage('Putin', 'The Night\'s King');
replaceTextOnPage('Russian', 'Wildling');
replaceTextOnPage('russian', 'wildling');
replaceTextOnPage('Russia', 'the land North of the Wall');
replaceTextOnPage('Tweets', 'Ravens');
replaceTextOnPage('tweets', 'ravens');
replaceTextOnPage('Tweet', 'Message sent by raven');
replaceTextOnPage('tweet', 'message sent by raven');
replaceTextOnPage('Twitter', 'Sending a raven');
replaceTextOnPage('twitter', 'sending a raven');
replaceTextOnPage('United States of America', 'The Seven Kingdoms');
replaceTextOnPage('Washington D.C.', 'King\'s Landing');
replaceTextOnPage('D.C.', 'King\'s Landing');
replaceTextOnPage('Americans', 'Westerosi');
replaceTextOnPage('American', 'Westerosi');
replaceTextOnPage('America', 'Westeros');
replaceTextOnPage('Game of Thrones', 'Actually just real life...');
