$(document).ready(function(){

  showdata();
  count();

    $(".btn").click(function(){

      // alert("OK");
      var id=$(this).data('id');
      var name=$(this).data('name');
      var price=$(this).data('price')
      // console.log(id);

      var shopping={
        id:id,
        name:name,
        price:price,
        qty:1
      }
      var shoplist=localStorage.getItem("Shop");
      var shoplistArray;
      if(shoplist==null){
        shoplistArray=[];
      }else{
        shoplistArray=JSON.parse(shoplist);
      }
      var status=false;
      $.each(shoplistArray,function(i,v){
        if(v.id==id){
          //alert("ok");
          v.qty++;
          status=true;
        }
      })

      if(!status){
        shoplistArray.push(shopping); 
      }
      var itemstring=JSON.stringify(shoplistArray);
      localStorage.setItem("Shop", itemstring);
      showdata();
      count();
    })
    function showdata(){
      var shoplist=localStorage.getItem("Shop");
      shoplistArray=JSON.parse(shoplist);
      console.log(shoplistArray)
      var j=1;
      var html="";
      var total=0;
      $.each(shoplistArray,function(i,v){
      var subtotal=v.qty*v.price;
        total+=subtotal;
        html+=`<tr>
        <td>${j++}</td>
        <td>${v.name}</td>
        <td>${v.qty}</td>
        <td>${v.price}</td>
        <td>${subtotal}</td>
        </tr>`

      })
      html+=`<tr><td colspan="4">Total</td><td>${total}</td></tr>`
      
      $("tbody").html(html);

  }
        function count(){
          var totalcount = 0;
          var shoplist = localStorage.getItem("Shop");
          if(shoplist){
            shoplistArray = JSON.parse(shoplist);
              $.each(shoplistArray,function(i,v){
                totalcount += v.qty;

              })
            }
          $("#carticon").html(totalcount);
        }

      $(".checkout").click(function(){
        localStorage.clear();
  })
})
  