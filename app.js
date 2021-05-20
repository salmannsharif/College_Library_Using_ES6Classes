console.log('This is College Library !');



class Book
{
    constructor(name, author ,type)
    {
        this.name=name;
        this.author=author;
        this.type=type;
    }
}


class Display
{

    validate(book)
    {
        if(book.name.length < 2 || book.author.length < 2)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    clear()
    {
        let libraryForm=document.getElementById('libraryForm');
        libraryForm.reset();
    }

    add(book)
    {

       let tableBody=document.getElementById('tableBody');

       let uiString=` <tr>
       <td>${book.name}</td>
       <td>${book.author}</td>
       <td>${book.type}</td>
   </tr>`;

   tableBody.innerHTML+=uiString;

    }


    show(type , displayMessage)
    {
        let message=document.getElementById('message');
        let boldText;
        if(type=='success')
        {
            boldText='success';
        }
        else
        {
            boldText='Error';
        }

        message.innerHTML+=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message: !</strong>   ${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`


      setTimeout(() => {
          message.innerHTML="";
      }, 2000);



    }
}



// Grap the form
let libraryForm=document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e)
{
    console.log('This is slaman from form')

    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let type;


    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');


    if(fiction.checked)
    {
        type=fiction.value;
    }
    else if(programming.checked)
    {
        type=programming.value;
    }
    else if(cooking.checked)
    {
        type=cooking.value;
    }


    let book= new Book(name , author, type);
    console.log(book);

    e.preventDefault();

    let display=new Display();
    display.validate(book)

    if (display.validate(book))
    {
    display.add(book);
    display.clear();
    display.show('success', 'Your book has been successfullly added')
    }

    else
    {
        display.show('Error', 'Sorry You cant add this book ')
    }


} 

