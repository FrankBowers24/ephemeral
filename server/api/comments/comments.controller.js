var Comment = require('./comments.model.js');
var seed = require('./comments.seed.js');


module.exports = {
  addOne: addOne,
  addDummyComments: addDummyComments
};

function addOne(req, res) {
  var newComment = new Comment({
    user_id: req.body.user_id,
    event_id: req.body.event_id,
    comment: req.body.comment
  })
  .save()
  .then(function(){
    res.status(201).end();
  });
}



function addDummyComments(userId,eventId, number){
  for (var i = 0; i < number; i++) {
    new Comment({
      user_id: userId,
      event_id: eventId,
      comment: getRandomComment()
    }).save();
  };
}

var sentences = [
  [ 'conditioning tank barleywine top-fermenting yeast imperial cask conditioned ale shelf life autolysis',' barrel craft beer craft beer goblet grainy wort chiller, dunkle amber',' brew kettle lauter abv carbonation dunkle: enzymes alpha acid brew kettle pint glass balthazar? carbonation wort chiller conditioning racking kolsch cask krug priming bung',' wort wort chiller hand pump copper oxidized amber kolsch',' finishing hops: hand pump real ale caramel malt barrel biere de garde; wort chiller',' brewpub final gravity bock oxidized tulip glass units of bitterness? mouthfeel real ale bittering hops krug final gravity anaerobic brewhouse',' hand pump reinheitsgebot goblet aroma hops top-fermenting yeast units of ' ],
  [ 'Photo booth aesthetic art party bespoke',' Blue Bottle Portland cliche mlkshk, banh mi tilde Neutra art party pickled iPhone Williamsburg',' Beard squid try-hard gentrify tofu Shoreditch',' Photo booth squid salvia Helvetica, fanny pack literally kogi',' Skateboard Pinterest selvage, brunch Kickstarter retro Etsy street art bicycle rights salvia messenger bag',' Lomo mixtape occupy, stumptown organic Echo Park kitsch Marfa church-key',' Health goth PBR kitsch Intelligentsia Banksy heirloom Marfa, forage paleo viral cred retro tote bag stumptown authentic',' Schlitz ugh DIY, ennui gastropub irony Brooklyn roof party meggings Banksy listicle messenger bag distillery sustainable',' Vegan mixtape hoodie mumblecore, mustache banjo trust fund Austin gentrify viral selfies raw denim cardigan whatever',' Irony cold-pressed American Apparel mlkshk Godard Odd Future, trust fund scenester Williamsburg street art',' Tilde kale chips semiotics, lo-fi meggings paleo PBR&B biodiesel chillwave banh mi gastropub meditation VHS ennui literally',' Vinyl Schlitz church-key hella, chia mumblecore sriracha crucifix Vice tofu photo booth',' Quinoa cardigan next level messenger bag, hashtag wolf ennui Echo Park umami Williamsburg master cleanse',' Brunch PBR dreamcatcher, small batch direct trade Carles XOXO Blue Bottle twee wolf','' ],
  [ 'Hodor! Hodor hodor, HODOR hodor, hodor hodor… Hodor hodor hodor hodor hodor hodor? Hodor, hodor',' Hodor',' Hodor, hodor… Hodor hodor hodor?! Hodor hodor, hodor',' Hodor HODOR hodor, hodor hodor hodor! Hodor, hodor hodor hodor - hodor',' Hodor',' Hodor hodor hodor hodor hodor hodor hodor! Hodor, HODOR hodor, hodor hodor hodor hodor; hodor hodor',' Hodor hodor HODOR! Hodor hodor hodor hodor hodor, hodor, hodor hodor','' ],
  [ 'Bacon ipsum dolor amet prosciutto andouille pork, strip steak turkey commodo rump culpa qui leberkas meatloaf',' Occaecat nostrud sunt kevin shank venison ground round pastrami drumstick ball tip anim ribeye incididunt',' Consectetur dolor doner drumstick, pork labore shank lorem ut magna turkey alcatra do ut',' Mollit ipsum cupidatat, ex ham cupim culpa sed tenderloin',' Flank tenderloin picanha, ut chuck pariatur enim shankle adipisicing sint mollit kevin nostrud pork loin',' Chuck meatloaf fatback beef ribs voluptate labore duis brisket non',' T-bone fugiat id in spare ribs anim',' Jowl ground round ex excepteur dolore eiusmod leberkas pork chop eu reprehenderit laborum sed venison est',' Fatback incididunt beef, ut cow culpa short ribs tenderloin mollit porchetta quis',' Meatball aute cupidatat deserunt kevin porchetta pancetta bacon ribeye, nulla tenderloin duis voluptate t-bone fugiat','' ],
  [ 'Cupcake ipsum dolor sit amet',' Sesame snaps apple pie sesame snaps dragée',' Cotton candy sweet cheesecake sweet roll I love danish caramels biscuit sweet roll',' I love bonbon sugar plum I love cookie sesame snaps unerdwear','com liquorice marzipan',' Jujubes apple pie chocolate bar I love gummi bears apple pie',' Lollipop jelly beans I love sweet I love fruitcake jelly powder',' Marshmallow pudding macaroon applicake macaroon jujubes brownie',' I love muffin biscuit',' Macaroon candy canes sugar plum brownie pudding donut soufflé',' Gingerbread cookie marzipan I love lollipop',' Icing biscuit jelly beans',' Powder cheesecake lollipop unerdwear','com unerdwear','com fruitcake lollipop jujubes apple pie',' Jelly beans croissant lemon drops dragée tootsie roll lemon drops cake',' Macaroon macaroon I love apple pie',' Macaroon muffin bear claw chocolate jelly sweet roll sweet',' Tart tiramisu donut chocolate cake',' Caramels gummies dessert powder tart',' Candy canes croissant I love lollipop I love gingerbread carrot cake',' Dragée dragée brownie chocolate bar cupcake cotton candy sweet roll',' Dragée lemon drops gingerbread cotton candy jelly',' Jelly gummies jujubes croissant lemon drops toffee',' Bonbon topping wafer',' Soufflé applicake jujubes',' Wafer sesame snaps gingerbread sweet roll ice cream cheesecake cotton candy dessert','' ],
  [ 'Collaboratively administrate empowered markets via plug-and-play networks',' Dynamically procrastinate B2C users after installed base benefits',' Dramatically visualize customer directed convergence without revolutionary ROI',' Efficiently unleash cross-media information without cross-media value',' Quickly maximize timely deliverables for real-time schemas',' Dramatically maintain clicks-and-mortar solutions without functional solutions',' Completely synergize resource sucking relationships via premier niche markets',' Professionally cultivate one-to-one customer service with robust ideas',' Dynamically innovate resource-leveling customer service for state of the art customer service','' ],
  [ 'Collaboratively administrate empowered markets via plug-and-play networks',' Dynamically procrastinate B2C users after installed base benefits',' Dramatically visualize customer directed convergence without revolutionary ROI',' Efficiently unleash cross-media information without cross-media value',' Quickly maximize timely deliverables for real-time schemas',' Dramatically maintain clicks-and-mortar solutions without functional solutions',' Completely synergize resource sucking relationships via premier niche markets',' Professionally cultivate one-to-one customer service with robust ideas',' Dynamically innovate resource-leveling customer service for state of the art customer service','' ],
  [ 'Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale',' Celery potato scallion desert raisin horseradish spinach carrot soko',' Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea',' Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress',' Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke',' Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery',' Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip',' Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jÃ­cama salsify',' Celery quandong swiss chard chicory earthnut pea potato',' Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori',' Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard','' ],
  [ 'Problems look mighty small from 150 miles up',' The path of a cosmonaut is not an easy, triumphant march to glory',' You have to get to know the meaning not just of joy but also of grief, before being allowed in the spacecraft cabin',' Across the sea of space, the stars are other suns',' Astronomy compels the soul to look upward, and leads us from this world to another',' Here men from the planet Earth first set foot upon the Moon',' July 1969 AD',' We came in peace for all mankind',' The dreams of yesterday are the hopes of today and the reality of tomorrow',' We want to explore',' We’re curious people',' Look back over history, people have put their lives at stake to go out and explore … We believe in what we’re doing',' Now it’s time to go',' NASA is not about the ‘Adventure of Human Space Exploration’…We won’t be doing it just to get out there in space – we’ll be doing it because the things we learn out there will be making life better for a lot of people who won’t be able to go',' There can be no thought of finishing for ‘aiming for the stars','’ Both figuratively and literally, it is a task to occupy the generations',' And no matter how much progress one makes, there is always the thrill of just beginning',' I dont know what you could say about a day in which you have seen four beautiful sunsets','' ],
  [ 'Every eye was fastened with severe inquiry upon Sir Kay',' But he was equal to the occasion','  He got up and played his hand like a major—and took every trick','  He said he would state the case exactly according to the facts; he would tell the simple straightforward tale, without comment of his own; "and then," said he, "if ye find glory and honor due, ye will give it unto him who is the mightiest man of his hands that ever bare shield or strake with sword in the ranks of Christian battle—even him that sitteth there!" and he pointed to Sir Launcelot','  Ah, he fetched them; it was a rattling good stroke','  Then he went on and told how Sir Launcelot, seeking adventures, some brief time gone by, killed seven giants at one sweep of his sword, and set a hundred and forty-two captive maidens free; and then went further, still seeking adventures, and found him (Sir Kay) fighting a desperate fight against nine foreign knights, and straightway took the battle solely into his own hands, and conquered the nine; and that night Sir Launcelot rose quietly, and dressed him in Sir Kays armor and took Sir Kays horse and gat him away into distant lands, and vanquished sixteen knights in one pitched battle and thirty-four in another; and all these and the former nine he made to swear that about Whitsuntide they would ride to Arthurs court and yield them to Queen Guenevers hands as captives of Sir Kay the Seneschal, spoil of his knightly prowess; and now here were these half dozen, and the rest would be along as soon as they might be healed of their desperate wounds','' ],
  [ 'We played robber now and then about a month, and then I resigned','  All the boys did','  We hadnt robbed nobody, hadnt killed any people, but only just pretended','  We used to hop out of the woods and go charging down on hog-drivers and women in carts taking garden stuff to market, but we never hived any of them','  Tom Sawyer called the hogs `ingots,` and he called the turnips and stuff `julery,` and we would go to the cave and powwow over what we had done, and how many people we had killed and marked','  But I couldnt see no profit in it','  One time Tom sent a boy to run about town with a blazing stick, which he called a slogan (which was the sign for the Gang to get together), and then he said he had got secret news by his spies that next day a whole parcel of Spanish merchants and rich A-rabs was going to camp in Cave Hollow with two hundred elephants, and six hundred camels, and over a thousand `sumter` mules, all loaded down with dimonds, and they didnt have only a guard of four hundred soldiers, and so we would lay in ambuscade, as he called it, and kill the lot and scoop the things','  He said we must slick up our swords and guns, and get ready','  He never could go after even a turnip-cart but he must have the swords and guns all scoured up for it, though they was only lath and broomsticks, and you might scour at them till you rotted, and then they warnt worth a mouthful of ashes more than what they was before','  I didnt believe we could lick such a crowd of Spaniards and A-rabs, but I wanted to see the camels and elephants, so I was on hand next day, Saturday, in the ambuscade; and when we got the word we rushed out of the woods and down the hill','  and there warnt no camels nor no elephants','  It warnt anything but a Sunday-school picnic, and only a primer-class at that','  We busted it up, and chased the children up the hollow; but we never got anything but some doughnuts and jam, though Ben Rogers got a rag doll, and Jo Harper got a hymn-book and a tract; and then the teacher charged in, and made us drop everything and cut','' ],
  [ 'But it so happened just then, that it was high time for the Captain to mind his own eye',' The prodigious strain upon the main-sail had parted the weather-sheet, and the tremendous boom was now flying from side to side, completely sweeping the entire after part of the deck',' The poor fellow whom Queequeg had handled so roughly, was swept overboard; all hands were in a panic; and to attempt snatching at the boom to stay it, seemed madness',' It flew from right to left, and back again, almost in one ticking of a watch, and every instant seemed on the point of snapping into splinters',' Nothing was done, and nothing seemed capable of being done; those on deck rushed towards the bows, and stood eyeing the boom as if it were the lower jaw of an exasperated whale',' In the midst of this consternation, Queequeg dropped deftly to his knees, and crawling under the path of the boom, whipped hold of a rope, secured one end to the bulwarks, and then flinging the other like a lasso, caught it round the boom as it swept over his head, and at the next jerk, the spar was that way trapped, and all was safe',' The schooner was run into the wind, and while the hands were clearing away the stern boat, Queequeg, stripped to the waist, darted from the side with a long living arc of a leap',' For three minutes or more he was seen swimming like a dog, throwing his long arms straight out before him, and by turns revealing his brawny shoulders through the freezing foam',' I looked at the grand and glorious fellow, but saw no one to be saved',' The greenhorn had gone down',' Shooting himself perpendicularly from the water, Queequeg, now took an instants glance around him, and seeming to see just how matters were, dived down and disappeared',' A few minutes more, and he rose again, one arm still striking out, and with the other dragging a lifeless form',' The boat soon picked them up',' The poor bumpkin was restored',' All hands voted Queequeg a noble trump; the captain begged his pardon',' From that hour I clove to Queequeg like a barnacle; yea, till poor Queequeg took his last long dive','' ]
];

function getRandomComment(){
  var chosenBlob = sentences[Math.floor(Math.random()*(sentences.length-1))];
  return chosenBlob[Math.floor(Math.random()*(chosenBlob.length-1))] + '.';
}



// var generalOptions = [
//     "I was told there would be cake.",
//     "This is amazing! So many people here right now.",
//     "Too loud and too crowded for my taste.",
//     "lol",
//     "My friend Robert told me to check this party out so I was catching muni to go but the bus was pretty late and then I guess my dollar didn't work in the machine thing so I got a cab, kind of expensive lol, but it got me there, anyway the bagels here are pretty good. I got the last sesame one but theres like a bunch of onion ones left if you get here pretty soon.",
//     "Yo this is pretty great, but my house party next week is gonna totally kill it, tweet @ me @superflySF421 for deets",
//     "Really nice people",
//     "The view from here is amazing",
//     "This event is marked free but they're actually asking for $10-20 donations at the door."
//     ];
//   var commentsByCategory = {
//     entertainment: [
//       "I laughed until I cried.  Seriously hilarious."
//       "These guys put on a really good show every time they come to town, check them out!!!"

//     ]
//     drink:
//     culture:
//     outdoors:
//     hobbies:
//     other: [
//       "I was told there would be cake.",
//       "This is amazing! So many people here right now.",
//       "Too loud and too crowded for my taste.",
//       "lol",
//       "My friend Robert told me to check this party out so I was catching muni to go but the bus was pretty late and then I guess my dollar didn't work in the machine thing so I got a cab, kind of expensive lol, but it got me there, anyway the bagels here are pretty good. I got the last sesame one but theres like a bunch of onion ones left if you get here pretty soon.",
//       "Yo this is pretty great, but my house party next week is gonna totally kill it, tweet @ me @superflySF421 for deets",
//       "Really nice people",
//       "The view from here is amazing",
//       "This event is marked free but they're actually asking for $10-20 donations at the door."
//     ]
//   }

//   return options[Math.floor(Math.random()*options.length)];
// }

