class Book{
    constructor(Title,Category,Author,isRead='false',finishedDate){
        this.Title = Title;
        this.Category=Category;
        this.Author=Author;
        this.isRead= isRead;
        this.finishedDate=finishedDate;
    }
    markBookAsRead(){
        return this.isRead = 'true';
    }
    finishedDate(){
        return this.finishedDate = `Date.now()`;
    }
}


class BookList{
    constructor(arr,index){
        this.arr = arr;
        this.index=index;
    }
    add([Book]){
        return this.arr.push(Book);
    }
    getCurrentBook(){
        return this.arr[this.index];
    }
    getNextBook(){
        return this.arr[this.index];
    }
    getPrevBook(){
        return this.arr[this.index-1];
    }
    changeCurrentBook(update){
        let update = this.arr[this.index];
        return update;
    }
}