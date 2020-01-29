
function onEnterPressed(event){
    if(event.key !== "Enter"){
        return;
    }

    addEntry();
}

var id=0;

var Entries = ["Diana","Shreya","Dhawal"]

function addEntry() {

var input=getName();
Entrie.push(input);
localStrage.setItem('NameAry', JSON.stringify(Entries));
refresh();

}

function removeEntry(id) {
    document.getElementById(id).remove();
}

function getName() {
    return document.getElementById("name").value;
}

function setName(name) {
    return document.getElementById("name").value=name;
}


function refresh()
{
   var html='';
     for (var i=0; i<Entries.length; i++)
     {

        html +=`<tr id="${id}"><td onClick="removeEntry(${id})">❌</td><td>`+Entries[i]+'</td></tr>'

     }

     document.getElementById("tbody").innerHTML += html;

}