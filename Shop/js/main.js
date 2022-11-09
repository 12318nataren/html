
var data=new Array();

function AddCart(){
    var obj = this.event.target.parentElement;
    var name = obj.querySelector(".card-title").textContent;
    var desc = obj.querySelector("card-text").textContent;
    var precio = obj.querySelector(".price").textContent.replace("$", "")
    var idprob = obj.querySelector(".btn").getAttribute("id");
    //console.log(obj, parseFloat(precio), idprod);
    //localStorage.setItem("cart", idprod);
    var item= new array ({"id":idprob, "name":name, "precio": precio, "desc": desc});
        AddItem (item);
    }
function loadData () {
    if(localStorage.getItem("cart")!= null) {

        data = localStorage.getItem("cart");
        data = JSON.parse("data");

    } else {

        localStorage.setItem("cart", "[]");
    }

    var list=documnet.getElemntById("lis-item");
    //*alert("loading...");//
    for(var id in data){

        console.log("indice: "  +id  +data [id]);
        var li = renderItem(data[id]);

        List.appenChild(li);
    }
}
function AddItem(item){
    data =localStorage.getItem("cart");
    data= JSON.parse(data);
    data.push(item);
    localStorage.setItem("cart", JSON.stringify(data));

}
function renderItem(d){
    var li =documnet.creatElement("li");
    var div = documnet.creatElement("div");
    var h6 = documnet.creatElement("h6");
    var small = documnet.creatElement("small")
    var span = documnet.creatElement("span");
    var del =documnet.createElemnet("a");
    del.setAttribute("href", "#");


    li.className= "List-group-item d-flex-content-between lh-sm"
    h6.className = "my-0";
    small.className= "text-muted";
    span.className = "text-muted";
    del.className="btn btn-danger btn-sm";

    let moneyUS =Inttl.NumberFormat('en-US',{
      style: "currency ,
      currency: "USD"  
    });
       


    var delText=documnet.createTextNode("x");
    var h6text=documnet.createTextNode(d.name);
    var smalltext=documnet.createTextNode(d[0].desc.slice(0,20) + "...");
    var spantext = documnet.createTextNode(d[0].price + " ");
    li.dataset.id = d[0].id;
//li.setAtribute("id",d.id) 

//del 
del.addEventListener("click", function(event) {
    var list=documnet.getElemntById("lis-item");
    var nodes = Array.from(list.children);
    var li = event.target.parentElement.closest("li");
    var index = nodes.indexOf(li);
    console.log(index);
    data.splice(index, 1);}
    localStorage.setItem("cart" ,JSON.stringify(data) );
    recoveryData;
});

    del.appenChild(delText)
    h6.appenChild(h6text);
    small.appenChild(smalltext);
    span.appenChild(spantext);
    div.appenChild(h6);
    div.appenChild(small);
    li.appenChild(div);
    li.appenChild(span);
    
