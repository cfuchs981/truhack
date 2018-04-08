
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>CS Registration</title>

    <!-- Bootstrap core CSS -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link href="bootstrap.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
    <script src="script.js"></script>

  </head>

 <?php
      session_start();

    ?>

  <body id="page-top">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav" >
      <a class="navbar-brand js-scroll-trigger" >
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="">
        </span>
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item name"> <?= $_SESSION['fullname'] ?></li>
          <li class="nav-item major"><?= $_SESSION['major'] . " : " .  $_SESSION['minor'] ?></li>
          <li class="nav-item grad"><?php echo "Graduation Date: " .  $_SESSION['datee'] ?></li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0" >

      <section class="tinder-section p-1 p-lg-5 d-flex d-column" style="width: 100%;">
          <div class="tablehold" id="table">
             <div class="subheading mb-5" id="class_number">NAME OF CLASS · COURSE NUMBER</div>
          <p class="mb-5" id="descrip">(picture??)Class description goes here</p>
          <p class="mb-5" id="capteach">Capacity, teacher etc here </p>
          <p class="mb-5" style="font-weight:bold;"id="type">Class type and credits</p>
          <div class="button-hold">
            <button class="yes">&#10004</button>
            <button class="no">X</button>
          </div>

          </div>

        <div class="my-auto" style="width:100%;padding: 20px;text-align:center;border: 1px solid #CECAC1;box-shadow: 3px 3px 1px #CECAC1;">

          <div class="subheading mb-5">COURSE SELECTIONS</div>

          <div class="datahold">
            <textarea class="wew" name="choices" rows='8' cols='48'></textarea>
            <div class="grades">A Credits Remaining:
              <span class="A"><?= $_SESSION['A']?></span><br/>
              B Credits Remaining:
              <span class="B"><?= $_SESSION['B']?></span><br/>
              C Credits Remaining:
              <span class="C"><?= $_SESSION['C']?></span><br/>
              G Credits Remaining:
              <span class="G"><?= $_SESSION['G']?></span><br/>
              S Credits Remaining:
              <span class="S"><?= $_SESSION['S']?></span><br/>


            </div>
          </div>
 
          <div class="button-hold">
            <a href="mailto:<?= $_SESSION['email']?>"><button class="email" >Email List</button></a>
          </div>

        </div>


      </section>


  </div>


<div class="hiddens" id="sauce">
  <?php

    $servername = "mysql.truman.edu";
    $username = "cef6418";
    $password = "ohbiethe";
    $dbname = "cef6418CS315";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT name, number, teacher, cap, description, type, credits FROM classesHack";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            echo $row["name"]. "!" . $row["number"]. "!" . $row["teacher"].
                "!" . $row["cap"]. "!" . $row["description"].
                "!" . $row["type"]. "!" . $row["credits"]. "!";
        }
    } else {
        echo "0 results";
    }

    mysqli_close($conn);

  ?>

</div>



  </body>

</html>
