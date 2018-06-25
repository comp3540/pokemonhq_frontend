<template>
<div id="container">

<h1>Let's Play!</h1>

<div class="flex-container">
<div class="activeCard">ACTIVE</div>
<div>2</div>
<div>3</div>  
<div>4</div>
<div>5</div>
<div>6</div>  
<div id="placeholder"></div>
<div class="prizeCard">
<div>1</div>
<div>2</div>
<div>3</div>  
<div>4</div>
<div>5</div>
<div>6</div> 
</div>
<div>9</div>  
<div>10</div>
<div>11</div>
<div>12</div>  
<div>13</div>  

<div id="column">  
<div class="squareBox">Deck</div>
<div class="squareBox">Discard</div>
</div><!--end of COLUMN-->

</div> 
</div><!--end of CONTAINER-->
</template>

<script>
export default {
  name: 'GameBoard'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
font-family: "Kooky";
src: url("fonts/cartoonist_kooky.ttf");
}

html {
  background: #ff5e0e;  
}

h1 {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #197270;
    color: #73b79b;
    text-align: left;
    font-size: 3em;
    margin-top: -15px;
    font-family: "Kooky", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body {
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.06);
    color: #545454;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-repeat: no-repeat;
    background-position: bottom;   
    background-size: 70%;
    margin: 0 auto; 
    max-width: 920px;
    min-height: 45em;
    padding: 2em 2em 4em;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  color: orange;
  justify-content: center;   
}

.flex-container > div {
  border: 3px solid orange;
  width: 98px;
  height: 6em;
  margin: 5px;
  text-align: center;
  line-height: 75px;
  font-size: 20px;
  border-radius: 10px 
}

/*ACTIVE CARD*/
.flex-container > .activeCard {
    background-color: deeppink;
    width: 200px;
    color: white;
    border: none;
}

/*PRIZE CARDs*/
.flex-container > .prizeCard {
  background-color: white;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: center;
  border: none;
}

.flex-container > .prizeCard > div {
  border: 1px solid white;   
  background-color: deeppink;
  width: 3em;
  height: 3em;
  border-radius: 8px; 
}

/*PLACEHOLDER*/
.flex-container > #placeholder {
    background: none;
}

/*DECK AND DISCARD*/
.flex-container > #column {
    display: flex;
    flex-direction: column;
    background: none;
}
.squareBox {
    background-color:cadetblue;
    height: 4em;
    width: 4em;
    margin: 4px;
    font-size: 15px;
    line-height: 1.7;  
    border-radius: 5px 
    border: none;    
}
/*END OF DECK AND DISCARD*/


/*
}
.flex-container {
  display: flex;
  justify-content: center;
  height: 9em;
  padding: 5px;
}

.flex-container > div {
  background-color: red;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 25px;
}

.flex-container > #column {
    display: flex;
    flex-direction: column;
    background: none;
}

.flex-container > #placeholder {
    background: none;
}

.squareBox {
    background-color:darkorange;
    height: 4em;
    width: 4em;
    margin: 4px;
    font-size: 15px;
    line-height: 1.7;
    
}
*/
</style>
