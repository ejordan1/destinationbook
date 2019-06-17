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



var mexico = new Destination("Tijuana", "la playa", "tiempos buenos");
var book = new DestinationBook("trips");

book.addDestination(mexico);
book.addDestination(new Destination("Colorado", "mountain", "winter"));

book.printDestinations();

book.deleteDestination(5);
book.deleteDestination(0);
book.printDestinations();
