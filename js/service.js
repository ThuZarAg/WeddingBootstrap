$(document).ready(function(){
    showdata();

    $(".booking").click(function(){

      // alert("OK");
    
      var venuename=$(this).data('venuename');
      // console.log (id);
      var Booking ={    
        venuename:venuename
      }
      var itemlist=localStorage.getItem("Booking");
      var itemlistArray;
      if(itemlist==null){
        itemlistArray=[];
      }else{
        itemlistArray=JSON.parse(itemlist);
      }
        itemlistArray.push(Booking); 
      
      var itemString=JSON.stringify(itemlistArray);
      localStorage.setItem("Booking", itemString);
      showdata();
    })

    
  $(".jwellery").click(function(){

    // alert("OK");

    var jname=$(this).data('jname');
    
    // console.log (jname);
    var Booking ={
      jname:jname   
    }
    // console.log(jewellery);
    var itemlist=localStorage.getItem("Booking");
    var itemlistArray;
    if(itemlist==null){
      itemlistArray=[];
    }else{
      itemlistArray=JSON.parse(itemlist);
    }
      itemlistArray.push(Booking); 
    // console.log(itemlist);
    
    var itemString=JSON.stringify(itemlistArray);
    localStorage.setItem("Booking", itemString);
    showdata();
  })

  $(".dress").click(function(){                      
    
    // alert("OK");
    var dname=$(this).data('dname');
    // console.log (jname);
    var Booking ={
      dressname:dname,
    }
    // console.log(jewellery);
    var itemlist=localStorage.getItem("Booking");
    var itemlistArray;
    if(itemlist==null){
      itemlistArray=[];
    }else{
      itemlistArray=JSON.parse(itemlist);
    }
      itemlistArray.push(Booking); 
    // console.log(itemlist);
    
    var itemString=JSON.stringify(itemlistArray);
    localStorage.setItem("Booking", itemString);
    showdata();
  })

  function showdata(){
    var itemlist = localStorage.getItem("Booking");
    if(itemlist){
      var itemlistArray = JSON.parse(itemlist);
      console.log(itemlistArray);
      var html="";
      var j=1;
      $.each(itemlistArray,function(i,v){
        html += `
        <tr>
          <td>${v.venuename}</td>
          <td>
            <button id="btndelete" data-id="${i}">Remove</button>
          </td> 
        </tr>
        <tr>
          <td>${v.jname}</td>
          <td>
            <button id="btndelete" data-id="${i}">Remove</button>
          </td> 
        </tr>
        <tr>
          <td>${v.dname}</td>
          <td>
            <button id="btndelete" data-id="${i}">Remove</button>
          </td> 
        </tr>
        
        `
      })
      $("tbody").html(html)
    }
  }
})
 

