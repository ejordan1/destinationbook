$(function(){

for(i = 1; i < 11; i++){
var mexico = new Destination("Tijuana", "la playa", "tiempos buenos");
var book = new DestinationBook("trip--" + i);
DestinationBookManager(book);
book.addDestination(mexico);
book.addDestination(new Destination("Colorado", "mountain", "winter"));
}
//
// var mexico = new Destination("Tijuana", "la playa", "tiempos buenos");
// var book = new DestinationBook("trips" + 2);
// DestinationBookManager(book);
// book.addDestination(mexico);
// book.addDestination(new Destination("Colorado", "mountain", "winter"));

// book.deleteDestination(5);
// book.deleteDestination(0);

});

function DestinationBookManager(dBook){
  $(".destinationList").after("<ul id = " + dBook.name + ">" + dBook.name + "</ul>");
  $("#" + dBook.name).click(function(event){
      event.preventDefault();
    // $("#" + dBook.name + " li").each(function(d){
      $(".d" + dBook.name).toggle();
    // });
  });
}

function DestinationManager(dBook, destination){
  $("#" + dBook.name).append("<li class = d" + dBook.name + ">"+destination.location+"</li>");
  $(".d" + dBook.name).hide();
}



function Destination(location, landmark, time){
  this.location = location,
  this.landmark = landmark,
  this.time = time
}

Destination.prototype.logInfo = function () {
  console.log(this.location, this.landmark, this.time);
};

function DestinationBook(name){
  this.name = name,
  this.idCounter = 0,
  this.list = []
}

DestinationBook.prototype.addDestination = function(destination) {
    destination.id = this.idCounter;
    this.idCounter++;
    this.list.push(destination);
    //should be in front end code only
    DestinationManager(this, destination);
}

  DestinationBook.prototype.deleteDestination = function(id) {
    for(i = 0; i < this.list.length; i++ ){
      if(this.list[i]){
        if(this.list[i].id === id ){
            delete (this.list[i]);
        }
      }

    }
  }

DestinationBook.prototype.printDestinations = function(){
  this.list.forEach(function(d){
    d.logInfo();
  })
}
