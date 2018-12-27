
class library {
    constructor(name, location, hours,){
    this.name = name;
    this.location = location;
    this.hours = hours;}

}
class Manager extends library{
    constructor(name, ID, License)}{
    super(name)= name;
    this.ID = ID;
    this.License = License;
}

class Receptionist extends Manager{
    constructor(name, ID){
    super(name, ID)
}
}

class Person extends Receptionist{
    constructor(name, CardID, Rent){
        super(name);
        this.cardID = CardID;
        this.rent = Rent;
    }
   
}
class Book {
    constructor(Title, Author, Subject){
        this.Title = Title;
        this.Author = Author;
        this.Subject = Subject;
    }    
        }
class Inventory {
    constructor(books){
        this.books = books;
        alert('The following book has been added:', + this.books());}
    
    addBooktoInventory(title) {
    var book = {};
    book.title = title;
    book.addition = function() {
      alert('Following book has been added to inventory:' + book.title);
    };
    return book;
  }
}





