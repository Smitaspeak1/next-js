$(document).ready(function(){
    $("#add_row").click(function(){
      var row="<tr> <td><input type='text' name='uname[]'></td> <td><input type='text' name='age[]'></td><td><input type='text' name='uname[]'></td><td><input type='text' name='uname[]'></td><td><input type='text' name='uname[]'></td><td><input type='text' name='uname[]'></td> <td><input type='button' value='Save' class='rmv'></td> </tr>";
      $("#tbl tbody").append(row);
    });
    
    $("body").on("click",".smv",function(){
      $(this).closest("tr").save();
    });
  });