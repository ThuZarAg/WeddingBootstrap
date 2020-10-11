// $(document).ready(function(){
//   showdata();
//   $(".jwellery").click(function(){

//     // alert("OK");

//     var id=$(this).data('id');
//     var jname=$(this).data('jname');
//     var jprice=$(this).data('jprice');
//     // console.log (jname);
//     var Booking ={
//       id:id,
//       jname:jname,
//       jprice:jprice
//     }
//     // console.log(jewellery);
//     var itemlist=localStorage.getItem("Booking");
//     var itemlistArray;
//     if(itemlist==null){
//       itemlistArray=[];
//     }else{
//       itemlistArray=JSON.parse(itemlist);
//     }
//       itemlistArray.push(Booking); 
//     // console.log(itemlist);
    
//     var itemString=JSON.stringify(itemlistArray);
//     localStorage.setItem("Booking", itemString);
//     showdata();
//   })
//   function showdata(){
//     var itemlist = localStorage.getItem("Booking");
//     if(itemlist){
//       var itemlistArray = JSON.parse(itemlist);
//       console.log(itemlistArray);
//       var html="";
//       var j=1;
//       $.each(itemlistArray,function(i,v){
//         html += `
//         <tr>
//           <td>${j++}</td>
//           <td>${v.jname}</td>
//           <td>${v.jprice}</td>
//           <td>
//             <button id="btndelete" data-id="${i}">Delete</button>
//           </td> 
//           </tr>
//         `
//       })
//       $("tbody").html(html)
//     }
//   }
// })