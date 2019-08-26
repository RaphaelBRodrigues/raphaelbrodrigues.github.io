<?php

session_start();
include('Components/Header.php');
include('../Controller/Config.php');



?>
<h1 class='text-center text-success'>Escolha a categoria em que o curso a ser excluído se enquadra</h1>
<?php
$FirstQuery = mysqli_query($mysqli,'SELECT AT_Tipo,AT_TipoCursoID FROM TipoCurso');
if (empty($_GET['cat'])) {


echo "<ul>";
while($tipo = mysqli_fetch_array($FirstQuery)){
  //Open a list


echo "

  <li>
<a href='DelCurso.php?cat=".$tipo['AT_TipoCursoID']."'>".$tipo['AT_Tipo']."</a>

    </li>
    <br>


";
}

echo "


</ul>
";
}else{
  $tip = $_GET['cat'];
  echo "<ul>";
  $FirstQuery = mysqli_query($mysqli,"SELECT Curso.AT_CursoID,Curso.AT_Name,Curso.AT_TipoCursoID FROM Curso INNER JOIN TipoCurso where AT_TipoCursoID = $tip ");
  while ($print = mysqli_fetch_array($FirstQuery)) {
    echo "
<li>
<button class='btn btn-danger' value='".$print['AT_TipoCursoID']."' name='del'>X</button>

<a href='../Models/DelCursoPHP?del=".$print['AT_CursoID']."'>".$print['AT_Name']."</a>
</li>


    ";
  }
  echo "</ul";

}


?>
<br><br><br>
<br><br><br>
<br><br><br>

</form>

<?php

include('Components/Footer.php');

?>
