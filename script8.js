function onEnterPressed(event){
    if(event.key !=="Enter"){
        return;
    }
    addEntry();
}

var id=0;

var Entries = ["Dhawal", "Shreya", "Diana", "Aditya"];

function addEntry(){
    let snippet=`
        <tr id="${id}">
                <td onClick="removeEntry(${id})">❌</td>
                <td>${getName()}</td>
        </tr>
    `
    setName("");
    getElement("tbody").innerHTML+=snippet;
}

function getName(){
    return getValue("name");
}

function setName(name){
    document.getElementById("name").value=name;
}

function getValue(id){
    return document.getElementById(id).value;
}

function getElement(id){
    return document.getElementById(id);
}

function removeEntry(id){
    document.getElementById(id).remove();
}

function Refresh()
{
    var html='';
        for(var i = 0; i < Entries.length; i++)
        {
            html += `<tr id="${id}"><td onClick="removeEntry(${id})"}>❌</td><td>`+Entries[i]+'</td>'

            html +='</tr>'
        }
        getElement("tbody").innerHTML = html;

}